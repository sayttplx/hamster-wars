const express = require('express');
const router = express.Router();

const { getWinnersMatches } = require('../controller/matchWinnerControllers');

router.get('/:id', getWinnersMatches);

module.exports = router;