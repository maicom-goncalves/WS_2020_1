const http = require('http');
const server = http.createServer();

//const io = require('socket.io')(server);

const twitter = new Twit({
    consumer_key: 'ClkspMmRMOTAJvysssMpylY56',
    consumer_secret: '34qxajeFKcPTvMocYT5xMdOTZrQohbOAO1btgpRihJuA1tGxlM',
    access_token: '138086873-jMTpMLwOTPKRRDQ9MnlgUvwIollZTadG3i9ZnRlz',
    access_token_secret: 'xFdxY1bV2aRaxvy5AJ16i7kCxsVNe6MzThTr5QgJxJzwJ'
});

const express = require('express'),
    app = express(),
    //hbs = require('express-handlebars'),
    Twit = require('twit'),
    io = require('socket.io')(server);


app.get('/', function (req, res) {
    res.render('home');
});

//var stream = twitter.stream('statuses/filter', { track: 'nodejs' });
var stream = T.stream('statuses/filter', { follow: ['nodejs'] })

stream.on('tweet', function (tweet) {
    console.log(tweet.text)
})


t.on('tweet', function (tweet) {
    console.log('tweet received', tweet)
})

t.on('error', function (err) {
    console.log('Oh no')
})

socket.on('connect', function (data) {
    console.log('connected');
})

socket.on('allTweet', function (tweet) {
    console.log(tweet);
    tweetArray = tweet;
    loopArray();
});

/*io.on('connection', socket =>{
    stream.on('tweet', function (tweet) {
        const data = {
            'name': tweet.user.name,
            'screen_name': tweet.user.screen_name,
            'text': tweet.text,
            'avatar': tweet.user.profile_image_url
        };

        socket.emit('tweets', data);
    });
 
});*/

io.on('connection', function (socket) {
    Twit.get('search/tweets', { q: '#coding', count: 10 }
        , function (err, data, response) {
            var tweetArray = [];
            for (let index = 0; index < data.statuses.length; index++) {
                const tweet = data.statuses[index];
                var tweetbody = {
                    'text': tweet.text,
                    'userScreenName': "@" + tweet.user.screen_name,
                    'userImage': tweet.user.profile_image_url_https,
                    'userDescription': tweet.user.userDescription,
                }
                try {
                    if (tweet.entities.media[0].media_url_https) {
                        tweetbody['image'] = tweet.entities.media[0].media_url_https;
                    }
                } catch (err) { }
                tweetArray.push(tweetbody);
            }
            io.emit('allTweet', tweetArray)
        })
})



module.exports = server;