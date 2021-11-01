import { useState, useEffect } from 'react';
import { Hamster } from '../models/Hamster'
import { Grid } from './battle/Grid'
import { BattleField } from './battle/Battlefield'
import axios from 'axios'
import styled from 'styled-components';


const Button = styled.button`
    background-color: #ff5c5c;
    border: none;
    width: 100px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
`;


const Battle = () => {
    const [combatantOne, setCombatantOne] = useState<null | Hamster>(null)
    const [combatantTwo, setCombatantTwo] = useState<null | Hamster>(null)
    const [combatantStatsOne, setCombatantStatsOne] = useState(false)
    const [combatantStatsTwo, setCombatantStatsTwo] = useState(false)
    const [voteButton, setVoteButton] = useState(true)


    
    async function getRandomHamster() {
        const resOne = await axios.get('/hamsters/random')
        const resTwo = await axios.get('/hamsters/random')
        setCombatantOne(resOne.data)
        setCombatantTwo(resTwo.data)
    }

    useEffect(() => {
        getRandomHamster()
    }, [])

    const next = () => {
        getRandomHamster()
        setCombatantStatsOne(false)
        setCombatantStatsTwo(false)
        setVoteButton(true)
    }

    if (!combatantOne || !combatantTwo) { return <div>Loading...</div> }
        
    async function voteOne() {

        if (!combatantOne || !combatantTwo) { return }
            
        const winnerId = combatantOne.id
        const loserId = combatantTwo.id

        setCombatantOne({ ...combatantOne, wins: combatantOne.wins + 1, games: combatantOne.games + 1 })
        setCombatantTwo({ ...combatantTwo, games: combatantTwo.games + 1, defeats: combatantTwo.defeats + 1 })
            
        const changeWinner = { wins: combatantOne.wins + 1, games: combatantOne.games + 1 }
        const changeLoser = { games: combatantTwo.games + 1, defeats: combatantTwo.defeats + 1 }

        setCombatantStatsOne(true)
        setVoteButton(false)

        await axios.put(`/hamsters/${winnerId}`, changeWinner)
        await axios.put(`/hamsters/${loserId}`, changeLoser)

    }

    async function voteTwo() {

        if (!combatantOne || !combatantTwo) { return }

        const winnerId = combatantTwo.id
        const loserId = combatantOne.id

        setCombatantTwo({ ...combatantTwo, wins: combatantTwo.wins + 1, games: combatantTwo.games + 1 })
        setCombatantOne({ ...combatantOne, games: combatantOne.games + 1, defeats: combatantOne.defeats + 1 })

        const changeWinner = { wins: combatantTwo.wins + 1, games: combatantTwo.games + 1 }
        const changeLoser = { games: combatantOne.games + 1, defeats: combatantOne.defeats + 1 }

        setCombatantStatsTwo(true)
        setVoteButton(false)

        await axios.put(`/hamsters/${winnerId}`, changeWinner)
        await axios.put(`/hamsters/${loserId}`, changeLoser)
    }

    return (
        <BattleField>

            <h1>Battle</h1>

            <Grid>

                <div className="grid-item">
                    <img src={`/img/${combatantOne.imgName}`} alt={combatantOne.name} />
                    <h1>{combatantOne.name}</h1>
                    {voteButton && <button onClick={voteOne}>Vote</button>}
                    {(combatantStatsOne || combatantStatsTwo) &&
                        <div className="stats">
                            <h3>Wins: {combatantOne.wins}</h3>
                            <h3>Games: {combatantOne.games}</h3>
                            <h3>Defeats: {combatantOne.defeats}</h3>
                        </div>}
                </div>

                <div className="grid-item">
                    <img src={`/img/${combatantTwo.imgName}`} alt={combatantTwo.name} />
                    <h1>{combatantTwo.name}</h1>
                    {voteButton && <button onClick={voteTwo}>Vote</button>}
                    {(combatantStatsOne || combatantStatsTwo) &&
                        <div className="stats">
                            <h3>Wins: {combatantTwo.wins}</h3>
                            <h3>Games: {combatantTwo.games}</h3>
                            <h3>Defeats: {combatantTwo.defeats}</h3>
                        </div>}
                </div>

            </Grid>

            <Button onClick={next}>Next</Button>

        </BattleField>
    )
};

export default Battle;