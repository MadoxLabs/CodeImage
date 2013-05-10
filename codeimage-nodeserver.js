var url = require('url');
var http = require('http');
var io = require('socket.io');
var fs = require('fs');
var net = require('net');

var num = 0;

///////////////
// Event Handlers
///////////////
function handleGet(request, response)
{
  var file;
  if (request.url.indexOf(".") > -1) file = __dirname + request.url;
  else file = __dirname + '/encoder.html';

  fs.readFile(file,
    function (err, data)
    {
      if (err) { response.writeHead(500); return response.end('Error loading file'); }
      response.writeHead(200);
      response.end(data);
    }
  );
}

function handleConnection(socket)
{
  // expect these commands
  socket.on('disconnect', handleDisconnect);
  socket.on('getfile', handleGetFile);
  num++;
  // welcome the client
  socket.set('id', num, function () { socket.emit('hello', { hello: num }); });
}

function handleGetFile(data)
{
  var socket = this;
  var filename = data.file;
  this.get('id', function (err, name)
  {
    fs.readFile(data.file, function (err, data) { socket.emit('file', { file: data, name: filename }); });
  });
}

function handleDisconnect()
{
  var socket = this;
  this.get('id', function (err, name)
  {
  });
}

///////////////
// Main
///////////////

// server init
var app = http.createServer(handleGet);
app.listen(8080);
var mainsocket = io.listen(app);
mainsocket.set('log level', 2);
mainsocket.on('connection', handleConnection);