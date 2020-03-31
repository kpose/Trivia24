
import {
    ANSWER_BUTTON_HIGHLIGHT, RESET_ALL_BUTTONS, SET_CURRENT_STATUS,
    SET_END_GAME_MESSAGE, SET_GAME_DATA, SET_IS_ADMIN, SET_PLAYER_ID,
    SET_PLAYER_NAME, SET_QUESTION, SHOW_HIDE_MODAL, UPDATE_ANSWER_BUTTON_LABEL,
    UPDATE_LEADERBOARD
  } from "./actions";



  /**
 * Reducer for the various Modals throughout the app.
 */

 
 //Modals reducer
exports.modalsReducer = function(inState={}, inAction) {
    switch (inAction.type) {
        
        case SET_CURRENT_STATUS: {
            // Get current state.
            const modalsNode = {...inState};
            // Set current status.
            modalsNode.currentStatus = inAction.payload.currentStatus;
            return{
                ...state,
                ...modalsNode
            };
        }
        
        case SET_END_GAME_MESSAGE : {
            const modalsNode = { ...inState };
            modalsNode.endGameMessage = inAction.payload.message;
            return { 
                ... inState, 
                ...modalsNode 
            };
          }
      
          case SET_IS_ADMIN : {
            const modalsNode = { ...inState };
            modalsNode.isAdmin = inAction.payload.isAdmin;
            return { 
                ... inState, 
                ...modalsNode 
            };
          }
      
          case SHOW_HIDE_MODAL : {
            const modalsNode = { ...inState };
            // Set appropriate visible attribute based on modal name.
            modalsNode[`${inAction.payload.modalName}Visible`] =
              inAction.payload.visible;
            return { 
                ... inState, 
                ...modalsNode 
            };
          }
      
          default : { 
              return inState; 
            }
      
    }
};


//Player info reducer
exports.playerInfoReducer = function(inState = {}, inAction) {

    switch (inAction.type) {
  
      case SET_PLAYER_ID : {
        // Get current state.
        const playerInfoNode = { ...inState };
        // Set ID.
        playerInfoNode.id = inAction.payload.id;
        return { 
            ... inState, 
            ...playerInfoNode 
        };
      }
  
      case SET_PLAYER_NAME : {
        const playerInfoNode = { ...inState };
        playerInfoNode.name = inAction.payload.name;
        return { 
            ... inState, 
            ...playerInfoNode 
        };
      }
  
      default : { return inState; }
  
    } 
  
  }; 
  
  

  /**
   * Reducer for the InfoScreen screen (game data).
   */
exports.gameDataReducer = function(inState = {}, inAction) {
  
    switch (inAction.type) {
  
      case SET_GAME_DATA : {
        // Store new game data.
        return { 
            ...inState, 
            ...inAction.payload.gameData 
        };
      }
  
      default : { return inState; }
  
    } 
  
  };

  
  
  /**
   * Reducer for the GameScreen->Question screen.
   */
  exports.questionReducer = function(inState = {}, inAction) {
  
    switch (inAction.type) {
  
      case ANSWER_BUTTON_HIGHLIGHT : {
        // Get current state.
        const questionNode = { ...inState };
        questionNode.answerButtonPrimary = [ true, true, true, true, true ];
        questionNode.answerButtonDanger = [ false, false, false, false, false ];
        questionNode.selectedAnswer = inAction.payload.buttonNumber;
        // Now flip the button to be highlighted.
        if (inAction.payload.buttonNumber !== -1) {
          questionNode.answerButtonDanger[inAction.payload.buttonNumber] = true;
        }
        return { 
            ...inState, 
            ...questionNode 
        };
      }
  
      case UPDATE_ANSWER_BUTTON_LABEL : {
        const questionNode = { ...inState };
        // Set label on the specified button.
        questionNode.answerButtonLabels[inAction.payload.buttonNumber] =
          inAction.payload.label;
        return { 
            ...inState, 
            ...questionNode 
        };
      }
  
      case RESET_ALL_BUTTONS : {
        const questionNode = { ...inState };
        questionNode.answerButtonPrimary = [ true, true, true, true, true ];
        questionNode.answerButtonDanger = [ false, false, false, false, false ];
        return { 
            ...inState, 
            ...questionNode
         };
      }
  
      case SET_QUESTION : {
        const questionNode = { ...inState };
        // Store new question.
        questionNode.currentQuestion = inAction.payload.question;
        return { 
            ...inState, 
            ...questionNode
         };
      }
  
      default : { return inState; }
  
    }
  
  }; 

  
  
  /**
   * Reducer for the GameScreen->Leaderboard screen.
   */
  exports.leaderboardReducer = function(inState = {}, inAction) {
  
    switch (inAction.type) {
  
      case UPDATE_LEADERBOARD : {
        // Store new leaderboard player list data.
        return { 
            ...inState, 
            ...{ listData : inAction.payload.listData } 
        };
      }
  
      default : { return inState; }
  
    }
  
  };