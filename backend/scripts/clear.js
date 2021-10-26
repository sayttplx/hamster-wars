const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

clear();

async function clear() {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if( hamstersSnapshot.empty) {
        return
    }

    hamstersSnapshot.forEach(hamster => {
        hamstersRef.doc(hamster.id).delete()
    })
}