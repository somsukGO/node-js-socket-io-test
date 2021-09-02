const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 8085;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
});

server.listen(port, function () {
  console.log(`Server is listening on ${port}!`);
});
