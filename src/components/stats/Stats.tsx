import { useState, useEffect } from 'react'
import { Hamster } from '../../models/Hamster'
import { Wrapper } from '../../shared/Wrapper'
import { StatsWrapper, Loser, Winner, Left, Right } from './Wrapper'
import axios from 'axios'



const Stats = () => {
    const [winners, setWinners] = useState<Hamster[]>([])
    const [losers, setLosers] = useState<Hamster[]>([])

    async function getLadders() {
        const winner = await axios.get('/winners')
        const loser = await axios.get('/losers')
        setWinners(winner.data)
        setLosers(loser.data)
    }

    useEffect(() => {
        getLadders()
    }, [])


    return (
        <Wrapper>
            <h1>TOP 5 & BOTTOM 5</h1>
            <StatsWrapper>
                <Left>
                    <h2>Winners</h2>
                    <div>
                        {winners.map(winner => (
                            <Winner key={winner.id}>

                                {winner.imgName.startsWith('http') ?
                                    <img src={winner.imgName} alt={winner.name} />
                                    :
                                    <img src={`/img/${winner.imgName}`} alt={winner.name} />
                                }
                                <div>
                                    <h3>{winner.name}</h3>
                                    <p>{winner.wins} Wins</p>
                                </div>
                            </Winner>
                        ))}
                    </div>
                </Left>
                <Right>
                    <h2>Losers</h2>
                    <div>
                        {losers.map(loser => (
                            <Loser key={loser.id}>
                                {loser.imgName.startsWith('http') ?
                                    <img src={loser.imgName} alt={loser.name} />
                                    :
                                    <img src={`/img/${loser.imgName}`} alt={loser.name} />
                                }
                                <div>
                                    <h3>{loser.name}</h3>
                                    <p>{loser.wins} Wins</p>
                                </div>
                            </Loser>
                        ))}
                    </div>
                </Right>
            </StatsWrapper>
        </Wrapper>
    )
}

export default Stats;