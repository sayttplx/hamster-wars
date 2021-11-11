const { db } = require('../firebase');
const HAMSTERS = 'hamsters';
const validate = require('../validators/isHamsterUpdateObject');
const validateHamster = require('../validators/isHamsterObject');



exports.getAllHamsters = async (req, res) => {

    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    const arr = [];

    if (hamstersSnapshot.empty) {
        return arr;
    }

    await hamstersSnapshot.forEach(async hamsterRef => {
        const hamster = await hamsterRef.data();
        hamster.id = hamsterRef.id;
        arr.push(hamster);
    });
    res.send(arr);
}


exports.getRandomHamster = async (req, res) => {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) {
        res.sendStatus(400);
        return;
    };

    const arr = [];

    hamstersSnapshot.forEach(async hamsterRef => {

        arr.push({ ...hamsterRef.data(), id: hamsterRef.id });
    });

    const randomHamster = arr[Math.floor(Math.random() * arr.length)];

    res.send(randomHamster);
}


exports.getHamsterById = async (req, res) => {

    const hamsterId = req.params.id;

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        const hamster = await hamsterSnapshot.data();
        hamster.id = hamsterSnapshot.id;
        res.send(hamster);
    } else {
        return
    }
}

exports.updateOneHamsterById = async (req, res) => {

    if (!validate(req.body)) {
        res.sendStatus(400);
        return;
    }

    const hamsterId = req.params.id;
    const hamster = req.body;

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).update(hamster);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
};

exports.deleteOneHamsterById = async (req, res) => {

    const hamsterId = req.params.id;
    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).delete();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
}


exports.getCutestHamster = async (req, res) => {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();
    if (hamstersSnapshot.empty) { res.sendStatus(400); return; };
    const arr = []
    hamstersSnapshot.forEach(hamster => {
        arr.push({ ...hamster.data(), id: hamster.id });
    })
    const sortedHamsters = arr.sort(function (a, b) {
        return b.wins - a.wins
    })
    const cutestHamster = [];
    for (let i = 0; i < 1; i++) {
        cutestHamster.push(sortedHamsters[i])
    }

    res.status(200).send(cutestHamster);
}


exports.addOneHamster = async (req, res) => {

    if (!validateHamster(req.body)) {
        res.sendStatus(400);
        return;
    }
    const hamsterRef = await db.collection(HAMSTERS).add(req.body);
    const newHamster = { id: hamsterRef.id }
    return res.status(200).send(newHamster);
}