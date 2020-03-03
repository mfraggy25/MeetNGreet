"use strict";

const axios = require("axios");

module.exports.getAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=lrlpvmncurd803tghsn4kleoqv" +
    "&client_secret=9bf9lvmd9jlc4q21sr673b0a7m" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://mfraggy25.github.io/" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};
