const socket = io('http://localhost:3000');

const mostrarTweet = tweet => {
    console.log(tweet);
    const { text, extended_tweet, retweeted_status, user } = tweet;

    
    let texto = '';
    if(retweeted_status) {
        tweetText = retweeted_status.extended_tweet 
            ? retweeted_status.extended_tweet.full_text
            : text;
    } else {
        tweetText = extended_tweet ? extended_tweet.full_text : text;
    }
    
    const novoTweet = `
        <div class="tweet">
            <img src="${user.profile_image_url}" alt="Thumb usuário">
            <span><b>${user.name}:</b> ${tweetText}</span>
        </div>
    `;

    $('#tweets').append(novoTweet);
    console.log(texto);
}

socket.on('tweet',
 tweet => mostrarTweet(tweet)
 
 );

//console.log(texto);

