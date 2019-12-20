const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Twitter = require('twitter');
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/jackstwittwershit', (res, req) => {
    const T = Twitter({
      consumer_key: 'KVun9c8UmJqTCzHzfZCmbPwKy',
      consumer_secret: 'm5xT4E1wy5JIAozCkETm6s2RuDd3w6i77llk8r9E1VTOzRyvbv',
      access_token_key: '1197082173574176768-oqedAjes332MUV4GzHi6zIgjm6EcVA',
      access_token_secret: '8LzOvwz7F9s1nVmA4T9UIs2MEeJVdhoZFOFOqKfdx3n26'
    });
    
    T.post('statuses/update', {status: 'I Love Twitter'})
      .then(function (tweet) {
        console.log(tweet);
        return tweet
      })
      .catch(function (error) {
        throw error;
      })
    return true;
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
