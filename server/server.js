const fs = require("fs");
const lodash = require("lodash");


const io =
  require("socket.io")(require("http").createServer(function(){}).listen(80));


const players = { };

// Is a game currently in progress?.
let inProgress = false;

// The questions for the game.
let questions = null;

// The current question in play.
let question = null;

// The condensed version of the current question that goes to the players
// (sans answers and info that could be used to cheat.
let questionForPlayers = null;

// The server-local time the current question began.
let questionStartTime = null;

// The number of questions asked during the current game.
let numberAsked = 0;



function newGameData() {

  console.log("newGameData()");

  return { right : 0, wrong : 0, totalTime : 0, fastest : 999999999,
    slowest : 0, average : 0, points : 0, answered : 0, playerName : null
  };

} 

function calculateLeaderboard() {

  console.log("calculateLeaderboard()");

  // Get our players into an array.
  const playersArray = [ ];
  for (const playerID in players) {
    if (players.hasOwnProperty(playerID)) {
      const player = players[playerID];
      playersArray.push({ playerID : playerID, playerName : player.playerName,
      points : player.points });
    }
  }

  // Now sort that array based on points.
  playersArray.sort((inA, inB) => {
    const pointsA = inA.points;
    const pointsB = inB.points;
    if (pointsA > pointsB) {
      return -1;
    } else if (pointsA < pointsB) {
      return 1;
    } else {
      return 0;
    }
  });

  return playersArray;

}

io.on("connection", io => {


  console.log("Connection established with a client");

  io.emit("connected", { });


  io.on("validatePlayer", inData => {

    try {

      console.log("validatePlayer", inData);

      const responseObject = { inProgress : inProgress,
        gameData : newGameData(), leaderboard : calculateLeaderboard(),
        asked : numberAsked
      };
      responseObject.gameData.playerName = inData.playerName;

      // First, give them an ID.
      responseObject.playerID = `pi_${new Date().getTime()}`;

      // Now, make sure their name is unique.
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          if (inData.playerName === players[playerID].playerName) {
            responseObject.gameData.playerName += `_${new Date().getTime()}`;
          }
        }
      }

      // Finally, save their gameData object and emit response message.
      players[responseObject.playerID] = responseObject.gameData;
      io.emit("validatePlayer", responseObject);

    // Handle any unexpected problems, ensuring the server doesn't go down.
    } catch (inException) {
      console.log(`${inException}`);
    }

  });

  io.on("submitAnswer", inData => {

    try {

      console.log("submitAnswer", inData);

      // Get the gameData instance for this player.
      const gameData = players[inData.playerID];

      // By default, assume they answered wrong.
      let correct = false;

      // Bump up the count of how many questions this player has answered.
      gameData.answered++;

      // noinspection JSUnresolvedVariable
      if (question.answer === inData.answer) {

        players[inData.playerID].right++;
        players[inData.playerID].wrong--;

        // See how long it took and update the time-related values.
        const time = new Date().getTime() - questionStartTime;
        gameData.totalTime = gameData.totalTime + time;
        if (time > gameData.slowest) {
          gameData.slowest = time;
        }
        if (time < gameData.fastest) {
          gameData.fastest = time;
        }
        gameData.average = Math.trunc(gameData.totalTime / numberAsked);

        const maxTimeAllowed = 15;
        gameData.points = gameData.points + (maxTimeAllowed * 4);
        gameData.points = gameData.points -
          Math.min(Math.max(Math.trunc(time / 250), 0), (maxTimeAllowed * 4));
        gameData.points = gameData.points + 10;
        correct = true;

      }

      io.emit("answerOutcome", { correct : correct, gameData : gameData,
        asked : numberAsked, leaderboard : calculateLeaderboard()
      });

    // Handle any unexpected problems, ensuring the server doesn't go down.
    } catch (inException) {
      console.log(`${inException}`);
    }

  });
  io.on("adminNewGame", () => {

    try {

      console.log("adminNewGame");

      // Reset tracking variables
      question = null;
      questionForPlayers = null;
      numberAsked = 0;
      inProgress = true;

      questions = (JSON.parse(fs.readFileSync("questions.json", "utf8"))).questions;

      
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          const playerName = players[playerID].playerName;
          players[playerID] = newGameData();
          players[playerID].playerName = playerName;
        }
      }

     
      const responseObject = { inProgress : inProgress, question : null,
        playerID : null, gameData : newGameData(), asked : numberAsked,
        leaderboard : calculateLeaderboard()
      };
      const gd = newGameData();
      gd.asked = 0;
      
      io.broadcast.emit("newGame", responseObject);

      
      io.emit("adminMessage", { msg : "Game started" });

    
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); 
  io.on("adminNextQuestion", () => {

    try {

      console.log("adminNextQuestion");

      if (!inProgress) {
        io.emit("adminMessage", { msg : "There is no game in progress" });
        return;
      }

      
      if (questions.length === 0) {
        io.emit("adminMessage", { msg : "There are no more questions" });
        return;
      }

      
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          players[playerID].wrong++;
        }
      }

     
      let choice = Math.floor(Math.random() * questions.length);
      question = questions.splice(choice, 1)[0];

     
      questionForPlayers = { question : question.question, answers : [ ] };

      
      const decoys = question.decoys.slice(0);
      for (let i = 0; i < 5; i++) {
        let choice = Math.floor(Math.random() * decoys.length);
        questionForPlayers.answers.push(decoys.splice(choice, 1)[0]);
      }

      
      questionForPlayers.answers.push(question.answer);

      
      questionForPlayers.answers = lodash.shuffle(questionForPlayers.answers);

      
      numberAsked++;

      questionStartTime = new Date().getTime();

      io.broadcast.emit("nextQuestion", questionForPlayers);

      
      io.emit("adminMessage", { msg : "Question in play" });

    
    } catch (inException) {
      console.log(`${inException}`);
    }

  });
  io.on("adminEndGame", () => {

    try {

      console.log("adminEndGame");

      
      if (!inProgress) {
        io.emit("adminMessage", { msg : "There is no game in progress" });
        return;
      }

      
      const leaderboard = calculateLeaderboard();
      
      io.broadcast.emit("endGame", { leaderboard : leaderboard });

      
      inProgress = false;
      questions = null;
      question = null;
      questionForPlayers = null;
      questionStartTime = null;
      numberAsked = 0;
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          const playerName = players[playerID].playerName;
          players[playerID] = newGameData();
          players[playerID].playerName = playerName;
        }
      }

      
      io.emit("adminMessage", { msg : "Game ended" });

    
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); 


}); 

console.log("Server ready");