exports.ANSWER_BUTTON_HIGHLIGHT = "abh";
exports.RESET_ALL_BUTTONS = "rab";
exports.SET_CURRENT_STATUS = "scs";
exports.SET_END_GAME_MESSAGE = "segm";
exports.SET_GAME_DATA = "sgd";
exports.SET_IS_ADMIN = "sia";
exports.SET_PLAYER_ID = "spi";
exports.SET_PLAYER_NAME = "spn";
exports.SET_QUESTION = "scq";
exports.SHOW_HIDE_MODAL = "shm";
exports.UPDATE_ANSWER_BUTTON_LABEL = "uabl";
exports.UPDATE_LEADERBOARD = "ul";



exports.showHideModal = (inModalName, inVisible) => {
  return {
    type : exports.SHOW_HIDE_MODAL,
    payload : { modalName : inModalName, visible : inVisible }
  };
}; 


exports.setPlayerID = (inID) => {
  return {
    type : exports.SET_PLAYER_ID,
    payload : { id : inID }
  };
}; 


exports.setPlayerName = (inName) => {
  return {
    type : exports.SET_PLAYER_NAME,
    payload : { name : inName }
  };
};


exports.setGameData = (inGameData) => {
  return {
    type : exports.SET_GAME_DATA,
    payload : { gameData : inGameData }
  };
}; 


exports.answerButtonHighlight = (inButtonNumber) => {
  return {
    type : exports.ANSWER_BUTTON_HIGHLIGHT,
    payload : { buttonNumber : inButtonNumber }
  };
};


exports.updateAnswerButtonLabel = (inButtonNumber, inLabel) => {
  return {
    type : exports.UPDATE_ANSWER_BUTTON_LABEL,
    payload : { buttonNumber : inButtonNumber, label : inLabel }
  };
};


exports.resetAllButtons = () => {
  return {
    type : exports.RESET_ALL_BUTTONS,
    payload : { }
  };
};


exports.setQuestion = (inQuestion) => {
  return {
    type : exports.SET_QUESTION,
    payload : { question : inQuestion}
  };
};


exports.setEndGameMessage = (inMessage) => {
  return {
    type : exports.SET_END_GAME_MESSAGE,
    payload : { message : inMessage}
  };

}; 


exports.updateLeadboard = (inListData) => {
  return {
    type : exports.UPDATE_LEADERBOARD,
    payload : { listData : inListData }
  };
};


exports.setIsAdmin = (inIsAdmin) => {
  return {
    type : exports.SET_IS_ADMIN,
    payload : { isAdmin : inIsAdmin }
  };
};


exports.setCurrentStatus = (inCurrentStatus) => {
  return {
    type : exports.SET_CURRENT_STATUS,
    payload : { currentStatus : inCurrentStatus }
  };
};