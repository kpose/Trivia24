import { Vibration } from "react-native";
import { Toast } from "native-base";
import io from "socket.io-client";
import {
  answerButtonHighlight, resetAllButtons, setCurrentStatus, setGameData,
  setEndGameMessage, setPlayerID, setQuestion, showHideModal,
  updateAnswerButtonLabel, updateLeadboard
} from "../src/state/actions";
import store from "../src/state/store";


const CoreCode = {


  // The IP address of the server.
  //serverIP : "192.168.0.102",

  // Our Socket.io connection to the server.
  io : null,

  // Reference to the main navigator.
  mainNavigator : null,


  startup : () => {
    if (!store.getState().modals.isAdmin &&
      (store.getState().playerInfo.name == null ||
      store.getState().playerInfo.name.trim() === "" ||
      store.getState().playerInfo.name.length === 1)
    ) {
      return;
    }

    // Hide Name Prompt Modal.
    store.dispatch(showHideModal("namePrompt", false));

    // Open a socket.io-based connection to the server.
    CoreCode.io = io("https://trivia24server.herokuapp.com");
    if (store.getState().modals.isAdmin) {
      CoreCode.io.on("connected", function() { console.log("ADMIN CONNECTED"); });
      CoreCode.io.on("adminMessage", CoreCode.adminMessage);
      // Now show the admin Modal.
      store.dispatch(showHideModal("admin", true));
    } else {
      CoreCode.io.on("connected", CoreCode.connected);
      CoreCode.io.on("validatePlayer", CoreCode.validatePlayer);
      CoreCode.io.on("newGame", CoreCode.newGame);
      CoreCode.io.on("nextQuestion", CoreCode.nextQuestion);
      CoreCode.io.on("answerOutcome", CoreCode.answerOutcome);
      CoreCode.io.on("endGame", CoreCode.endGame);
    }
  },
  

  connected : function(inData) {

    console.log("connected()", inData);
    CoreCode.io.emit("validatePlayer", {
      playerName : store.getState().playerInfo.name
    });

  },


  validatePlayer : function(inData) {

    console.log("validatePlayer()", inData);
    store.dispatch(setPlayerID(inData.playerID));
    if (inData.inProgress) {
      inData.gameData.asked = inData.asked;
      store.dispatch(setGameData(inData.gameData));
      store.dispatch(updateLeadboard(inData.leaderboard));
      CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
    }

  },


  newGame : function(inData) {

    console.log("newGame()", inData);
    store.dispatch(showHideModal("endGame", false));
    inData.gameData.asked = inData.asked;
    store.dispatch(setGameData(inData.gameData));
    store.dispatch(updateLeadboard(inData.leaderboard));

    // Show the leaderboard screen.
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");

  },

 
  nextQuestion : function(inData) {

    console.log("nextQuestion()", inData);

    // Make sure we start out with no selected answer.
    store.dispatch(answerButtonHighlight(-1));

    // Show the question.
    store.dispatch(setQuestion(inData.question));

    // Populate the answers and reset their state.
    for (let i = 0; i < 6; i++) {
      // noinspection JSUnresolvedVariable
      store.dispatch(updateAnswerButtonLabel(i, inData.answers[i]));
    }

    // The button labels won't be reflected on the screen unless we force them
    // to update, which is done by resetting the type of all buttons (not sure
    // why this is).
    store.dispatch(resetAllButtons());

    // Show the question screen.
    CoreCode.mainNavigator.navigate("GameQuestionScreen");

  }, /* End nextQuestion(). */


  answerOutcome : function(inData) {

    console.log("answerOutcome()", inData);

    let msg = "Sorry!  That's not correct :(";
    let type = "danger";
    // noinspection JSUnresolvedVariable
    if (inData.correct) {
      msg = "Hooray!  You got it right :)";
      type = "success";
    }

    // Update the game info.
    inData.gameData.asked = inData.asked;
    store.dispatch(setGameData(inData.gameData));

    // Show the leaderboard and a toast message telling the player the result.
    store.dispatch(updateLeadboard(inData.leaderboard));
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
    Toast.show({ 
      text: msg, 
      buttonText : "Okay", 
      type : type, 
      duration : 3000,
      textStyle: { color: "yellow" },
      buttonTextStyle: { color: "#008000" },
      buttonStyle: { backgroundColor: "#5cb85c" } 
    });
    Vibration.vibrate(1000);

  }, /* End answerOutcome(). */


  
  endGame : function(inData) {

    console.log("endGame()", inData);

    store.dispatch(setGameData(inData.gameData));
    store.dispatch(updateLeadboard(inData.leaderboard));

    // Show the leaderboard screen.
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");




    if (inData.leaderboard[0].playerID === store.getState().playerInfo.id) {

      store.dispatch(setEndGameMessage("Congratulations! You were the winner!"));
      store.dispatch(showHideModal("endGame", true));

    } else {

      let place = "";
      let index = inData.leaderboard.findIndex((inPlayer) => inPlayer.playerID === CoreCode.playerID);
      index++;
      const j = index % 10;
      const k = index % 100;
      if (j === 1 && k !== 11) {
        place = `${index}st`;
      } else if (j === 2 && k !== 12) {
        place = `${index}nd`;
      } else if (j === 3 && k !== 13) {
        place = `${index}rd`;
      } else {
        place = `${index}th`;
      }

      store.dispatch(setEndGameMessage(
        `Sorry, you didn't win. You finished in ${place} place.`)
      );
      store.dispatch(showHideModal("endGame", true));

    }

  },
  adminMessage : function(inData) {

    console.log("adminMessage()", inData);

    store.dispatch(setCurrentStatus(inData.msg));

  }
};


export default CoreCode;