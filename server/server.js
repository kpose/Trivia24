const fs = require('fs');
const lodash = require('lodash');

//build server and hook socket
const io = 
    require('socket.io')(require('http').createServer(function(){}).listen(80));

//variables
const players = { };
let inProgress = false;
let questions = null;
let question = null;
let questionForPlayers = null;
let questionStartTime = null;
let numberAsked = 0;

//new game data object
function newGameData() {
    return { right: 0, wrong: 0, totalTime: 0, fastest: 999999999,
                slowest: 0, average: 0, points: 0, answered: 0, playerName: null
            };
}

//calculate Leader board
function calculateLeaderBoard() {
    const playersArray= [ ];
    for(const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
            const player = players[playerID];
            playersArray.push({ playerID: playerID, playerName:player.playerName,
                points: player.points });
        }
    }
    //sort array based on individual player points
    playersArray.sort((A, B)=> {
        const pointsA = A.points;
        const pointsB = B.points;
        if (pointsA > pointsB) { 
            return -1; 
        }
        else if (pointsA < pointsB) {
            return 1; 
        }
        else{
            return 0; 
        }
    });
    return playersArray;
}

//player message handlers
io.on('connection', io => {
    console.log("Connection established with a client");

    io.emit("connected", { });

    //validate player
    io.on('validatePlayer', inData => {
        try {
            const responseObject = { inProgress : inProgress,
            gameData : newGameData(), leaderboard: calculateLeaderBoard(),
            asked: numberAsked
        };
        responseObject.playerID = `T24_${new Date().getTime()}`;
        for (const playerID in players) {
            if (players.hasOwnProperty(playerID)) {
                if(inData.playerName === players[playerID].playerName) {
                    responseObject.gameData.playerName += `_${new Date().getTime()}`;
                }
            }
        }
        players[responseObject.playerID] = responseObject.gameData;
        io.emit('validatePlayer', responseObject);
        } catch (inException) {
            console.log(`${inException}`);
        }
    })

    //submit answers
    io.on("submitAnswer", inData => {
        try {
            const gameData = players[inData.playerID];
            let correct = false;
            gameData.answered++;

            if (questions.answer === inData.answer) {
                players[inData.playerID].right++;
                players[inData.playerID].wrong--;

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
                gameData.points = gameData.points - Math.min(Math.max(
                    Math.trunc(time / 250), 0), (maxTimeAllowed * 4
                ));
                gameData.points = gameData.points + 10;
                correct = true;
            }
            io.emit("answerOutcome", { correct: correct, gameData : gameData,
                asked : numberAsked, leaderboard: calculateLeaderBoard()
            });
        } catch (inException) {
            console.log(`${inException}`);
        }
    });
//admin starts new game
io.on('adminNewGame', () => {
    try {

        question = null;
        questionForPlayers = null;
        numberAsked = 0;
        inProgress = true;

        questions = (JSON.parse(fs.readFileSync('questions.json', 'utf8'))).question;

        for (const playerID in players)  {
            if (players.hasOwnProperty(playerID)) {
                const playerName = players[playerID].playerName;
                players[playerID] = newGameData();
                players[playerID].playerName = playerName;
            }
        }
        const responseObject = { inProgress: inProgress, question : null,
            playerID : null, gameDta : newGameData(), asked: numberAsked,
            leaderboard: calculateLeaderBoard()
        };
        const gd = newGameData();
        gd.asked = 0;

        io.broadcast.emit('newGame', responseObject);
        io.emit("adminMessage", { msg: "Game on!! See you at the Leaderboard" });
    } catch (inException) {
        console.log(`${inException}`);
    }
});


    
});