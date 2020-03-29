const fs = require('fs');
const lodash = require('lodash');

//build server and hook socket
const io = require('socket.io')(require('http').createServer(function(){}).listen(80));

const players = { };
let inProgress = false;