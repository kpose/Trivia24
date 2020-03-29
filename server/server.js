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