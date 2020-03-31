export const initialState = {

    //data that the leaderboard screen
    leaderboard: { 
        listData: [ ] 
    },

    //information about current game
    gameData: {
        asked : '?????',
        answered : '?????',
        points : "?????",
        points : "?????",
        right : "?????",
        wrong : "?????",
        totalTime : "?????",
        fastest : "?????",
        slowest : "?????",
        average : "?????"
    },

    //data used on question screen
    question: {
        answerButtonPrimary : [ true, true, true, true, true ],
        answerButtonDanger : [ false, false, false, false, false ],
        answerButtonLabels : [ null, null, null, null, null ],
        currentQuestion : null,
        selectedAnswer : -1
    },

    //flags to determine which modal is showing
    modals: {
        namePromptVisible : false,
        endGameVisible : false,
        adminVisible : false,
        endGameMessage : null,
        isAdmin : false,
        currentStatus : " "
    },

    //information about player
    playerInfo : {
        id: null, 
        name : null
    }
};