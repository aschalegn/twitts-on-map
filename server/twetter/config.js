const Twit = require("twit");
const axios = require("axios");

var T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTPs request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

module.exports = { T };

