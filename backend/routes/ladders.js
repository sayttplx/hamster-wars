const express = require('express');
const router = express.Router();

const { getWinners, getLosers } = require('../controller/ladderControllers');

// GET /winners
router.get('/winners', getWinners);

// GET /losers
router.get('/losers', getLosers);

module.exports = router;