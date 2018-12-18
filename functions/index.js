'use strict'
const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');
const app = dialogflow();

const DEFAULT_WELCOME_INTENT = 'Default Welcome Intent';
const ANSWER = 'answer';

app.intent(DEFAULT_WELCOME_INTENT,conv => {
    conv.ask('今日のなぞかけ へようこそ。では早速。政治家とかけまして、ゴキブリと解きます。');
});

app.intent(ANSWER,conv => {
    conv.close('どちらも新聞に叩かれるでしょう');
});


exports.todaysNazokake = functions.https.onRequest(app);
