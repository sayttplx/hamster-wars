const express = require('express');
const router = express.Router();

const {
	getAllHamsters,
	getRandomHamster,
	getHamsterById,
	updateOneHamsterById,
	deleteOneHamsterById,
	getCutestHamster,
	addOneHamster,
} = require('../controller/hamsterControllers');

// GET /hamsters
router.get('/', getAllHamsters);

// GET /hamsters/random
router.get('/random', getRandomHamster);

// GET /hamsters/cutest
router.get('/cutest', getCutestHamster);

// GET /hamsters/:id
router.get('/:id', getHamsterById);

// POST /hamsters
router.post('/', addOneHamster);

// PUT /hamsters/:id
router.put('/:id', updateOneHamsterById);

// DELETE /hamsters/:id
router.delete('/:id', deleteOneHamsterById);

module.exports = router;