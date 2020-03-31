//Define action constants

exports.ANSWER_BUTTON_HIGHLIGHT ="abh";
exports.RESET_ALL_BUTTONS ="rab";
exports.SET_CURRENT_STATUS = "scs";
exports.SET_END_GAME_MESSAGE = "segm";
exports.SET_GAME_DATA= "sgd";
exports.SHOW_HIDE_MODAL ="shm";
exports.SET_PLAYER_ID = "spi";
exports.SET_PLAYER_NAME = "spn";
exports.UPDATE_ANSWER_BUTTON_LABEL = "uabl";
exports.SET_QUESTION = "scq";
exports.SET_IS_ADMIN = "sia";
exports.UPDATE_LEADERBOARD = "ul";


//For showing/hiding the name prompt dialog when user is new to the server.
exports.showHideModal =(inModalName, inVisibe) => {
    return {
        type: exports.SHOW_HIDE_MODAL,
        payload: { 
            modalName: inModalName, 
            visible :inVisibe
        }
    };
};


//For setting the player's ID
exports.setPlayerID = (inID) => {
    return {
        type: exports.SET_PLAYER_ID,
        payload: {
            id: inID
        }
    };
};

//used to mutate the name field only
exports.setPlayerName = (inName) => {
    return{
        type : exports.SET_PLAYER_NAME,
        payload : {
            name : inName
        }
    };
};

//used to mutate the entire gameData field
exports.gameData = (inGameData) => {
    return {
        type: exports.SET_GAME_DATA,
        payload: {
            gameData : inGameData
        }
    };
};


//Used to highlight a button when the user taps it
exports.answerButtonHighlight = (inButtonNumber) => {
    return {
        type: exports.ANSWER_BUTTON_HIGHLIGHT,
        payload: {
            buttonNumber : inButtonNumber
        }
    };
};

// Changes the label of a specified button 
exports.updateAnswerButtonLabel = (inButtonNumber, inLabel)=> {
    return {
        type: exports.UPDATE_ANSWER_BUTTON_LABEL,
        payload : {
            buttonNumber : inButtonNumber,
            label : inLabel
        }
    };
};

// Used to reset all buttons to their default
exports.resetAllButtons = () => {
    return {
        type : exports.RESET_ALL_BUTTONS,
        payload : { }
    };
};

//Used to mutate currentQuestion field
exports.setQuestion =(inQuestion) => {
    return {
        type: exports.SET_QUESTION,
        payload: {
            question : inQuestion
        }
    };
};

//Used to show the player a message when game ends
exports.setEndGameMessage =(inMessage) => {
    return {
        type: exports.SET_END_GAME_MESSAGE,
        payload: {
            message: inMessage   
        }
    };
};

exports.updateLeaderboard =(inListData) => {
    return {
        type: exports.UPDATE_LEADERBOARD,
        payload: {
            listData : inListData
        }
    };
};


//For when the user says they are the admin.
exports.setIsAdmin = (inIsAdmin) => {
    return {
        type: exports.SET_IS_ADMIN,
        payload: {
            isAdmin: inIsAdmin
        }
    };
};


// Used to display messages from the server to the admin
exports.setCurrentStatus = (inCurrentStatus) => {
    return {
        type: exports.SET_CURRENT_STATUS,
        payload: {
            currentStatus : inCurrentStatus
        }
    };
};