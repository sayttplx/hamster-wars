const express = require('express');
const router = express.Router();

const { getAllMatches, getMatchById, addOneMatch, deleteOneMatchById } = require('../controller/matchControllers');

// GET /matches
router.get('/', getAllMatches);

// GET /matches/:id
router.get('/:id', getMatchById);

// POST /matches
router.post('/', addOneMatch);

// DELETE /matches/:id
router.delete('/:id', deleteOneMatchById);

module.exports = router;