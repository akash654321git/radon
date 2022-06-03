const express = require('express');
const akpublic = require('../logger/logger')
const util1 = require('../util/helper')



const router = express.Router();

router.get('/test-me', function (req, res) {
    akpublic.ak()

    util1.date()
   util1.month()
   util1.getBatchInfo()

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reasonggn