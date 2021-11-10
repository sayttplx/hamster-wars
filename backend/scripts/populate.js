const { db } = require('../firebase')
const HAMSTERS = 'hamsters'
const data = require('../data.json')

populate()

async function populate() {
    data.forEach(hamster => {
        let newHamster = {
            ...hamster,
        }
        db.collection(HAMSTERS).add(newHamster)
    })
}