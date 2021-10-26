const { db } = require('../firebase');
const MATCHES = 'matches';
const HAMSTERS = 'hamsters';

exports.getWinnersMatches = async (req, res) => {

    const hamsterID = req.params.id;
    let arr = []

    const matchesRef = db.collection(MATCHES);
    const hamsterRef = db.collection(HAMSTERS).doc(hamsterID);
    const matchesSnapshot = await matchesRef.get();
    if (matchesSnapshot.empty) {
        res.sendStatus(404);
    }
    const hamsterSnapshot = await hamsterRef.get();
    if (hamsterSnapshot.empty) {
        res.sendStatus(404);
    }

    await matchesSnapshot.forEach(async matchRef => {
        const match = await matchRef.data();
        if (match.winnerId === hamsterID) {
            arr.push(match);
        }
    })
    if (arr.length > 0) {
        res.status(200).send(arr);
    } else {
        res.sendStatus(404);
    }
}