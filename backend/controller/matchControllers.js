const { db } = require('../firebase');
const MATCHES = 'matches';

exports.getAllMatches = async (req, res) => {
    const matchesRef = db.collection(MATCHES);
    const matchesSnapshot = await matchesRef.get();

    const arr = [];
    if (matchesSnapshot.empty) {
        res.send(arr);
    }

    await matchesSnapshot.forEach(async matchRef => {
        const match = await matchRef.data();
        match.id = matchRef.id;
        arr.push(match);
    });
    res.send(arr);
};

exports.addOneMatch = async (req, res) => {

    const matchRef = await db.collection(MATCHES).add(req.body);
    const newMatch = { id: matchRef.id }
    return res.status(200).send(newMatch);
}

exports.getMatchById = async (req, res) => {

    const matchId = req.params.id;
    const matchSnapshot = await db.collection(MATCHES).doc(matchId).get();

    if (matchSnapshot.exists) {
        const match = await matchSnapshot.data();
        match.id = matchSnapshot.id;
        res.send(match);
    } else {
        res.sendStatus(404);
    }
};


exports.deleteOneMatchById = async (req, res) => {
    const matchId = req.params.id;
    const matchSnapshot = await db.collection(MATCHES).doc(matchId).get();

    if (matchSnapshot.exists) {
        await db.collection(MATCHES).doc(matchId).delete();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
};