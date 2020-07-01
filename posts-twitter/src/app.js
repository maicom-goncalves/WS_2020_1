const http = require('http');
const server = http.createServer();

const io = require('socket.io')(server);


io.on('connection', socket => {
    
    var Twitter = require('node-tweet-stream')
        socket = new Twitter({
          consumer_key: 'h4ImURy6vNuOoMY9AAHy76ou2',
          consumer_secret: '7NFsfhBmhIjn7mKXLltTbWlhOJtaHwsOeMYrKQux4cJ1pgyvdH',
          token: '1261730138934435848-tTpR8oh0hxUVzJtESpqPsn2qyj1mvy',
          token_secret: 'zweFGwoe0fKUC93453WaeXBI3ofJhIBHRj8p6BflY9Y4T'
    })

    socket.track('socket.io');
    socket.track('street fighter v')

    socket.on('tweet', function (tweet) { 
        io.emit('tweet', tweet);
        console.log('tweet received', tweet)
      })
       
      socket.on('error', function (err) {
        console.log('Oh no')
      })
});

module.exports = server;