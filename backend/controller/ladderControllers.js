const { db } = require('../firebase');
const HAMSTERS = 'hamsters';

exports.getWinners = async (req, res) => {
    let getHamsters = await db.collection(HAMSTERS).orderBy('wins', 'desc').limit(5).get();
    
    const topHamsters = [];
    getHamsters.forEach(doc => {
        
        
        topHamsters.push({...doc.data(), id: doc.id});
    })
    res.status(200).send(topHamsters);
}

exports.getLosers = async (req, res) => {
    let getHamsters = await db.collection(HAMSTERS).orderBy('defeats', 'desc').limit(5).get();

    const bottomHamsters = [];

    getHamsters.forEach(doc => {
        
        bottomHamsters.push({...doc.data(), id: doc.id});
    })
    res.status(200).send(bottomHamsters);
}