import { Hamster } from '../models/Hamster'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Stats = () => {
    const [winners, setWinners] = useState<Hamster[]>([])
    const [losers, setLosers] = useState<Hamster[]>([])


    async function getLadders() {
        const winner = await axios.get('/winners')
        const loser = await axios.get('/losers')
        setWinners(winner.data)
        setLosers(loser.data)
        console.log(winner.data)
        console.log(loser.data)
    }


    useEffect(() => {
        getLadders()
    }, [])


    return (
        <div>
            <h1>Stats</h1>
            <div>
                <div>
                    <h2>Winners</h2>
                    <ul>
                        {winners.map(winner => (
                            <li key={winner.id}>
                                <p>{winner.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Losers</h2>
                    <ul>
                        {losers.map(loser => (
                            <li key={loser.id}>
                                <p>{loser.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Stats;



