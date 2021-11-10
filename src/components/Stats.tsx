import { Hamster } from '../models/Hamster'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StatsWrapper = styled.div`
    display: grid;
    grid-template-areas: 
            "left right"
            "left right"
            "left right";
    grid-gap: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Left = styled.div`
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

const Right = styled.div`
    grid-area: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

const Loser = styled.div`

div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: red;
        margin-block-start: 0;

    }

    h3 {
        margin-block-start: 0;
 
    }
}

    
    `

const Winner = styled.div`

div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: green;
        margin-block-start: 0;
    }

    h3 {
        margin-block-start: 0;
    }
}
    `


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



