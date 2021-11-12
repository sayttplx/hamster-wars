import { useState, useEffect } from 'react';
import axios from 'axios';
import { Hamster } from '../../models/Hamster'
import { Grid, GridItem } from './Grid'
import { Button } from '../../shared/Button'
import { Wrapper } from '../../shared/Wrapper';
import { Loading } from './Loading';



const Battle = () => {
    const [combatantOne, setCombatantOne] = useState<null | Hamster>(null)
    const [combatantTwo, setCombatantTwo] = useState<null | Hamster>(null)
    const [winner, setWinner] = useState<null | Hamster>(null)
    const [loser, setLoser] = useState<null | Hamster>(null)
    const [combatantStatsOne, setCombatantStatsOne] = useState(false)
    const [combatantStatsTwo, setCombatantStatsTwo] = useState(false)
    const [voteButton, setVoteButton] = useState(true)


    async function getRandomHamster() {
        const response = await axios.get('/hamsters/')
        const hamsters = response.data

        let randomHamsterOne = hamsters[Math.floor(Math.random() * hamsters.length)]
        let randomHamsterTwo = hamsters[Math.floor(Math.random() * hamsters.length)]

        if (randomHamsterOne.id === randomHamsterTwo.id) {
            randomHamsterTwo = hamsters[Math.floor(Math.random() * hamsters.length)]
        }
        setCombatantOne(randomHamsterOne)
        setCombatantTwo(randomHamsterTwo)
    }



    useEffect(() => {
        getRandomHamster()
    }, []);

    const next = () => {
        getRandomHamster()
        setCombatantStatsOne(false)
        setCombatantStatsTwo(false)
        setVoteButton(true)
        setWinner(null)
        setLoser(null)
    }

    async function createMatch(winner: Hamster, loser: Hamster) {
        try {
            const res = await axios.post('/matches', {
                winnerId: winner.id,
                loserId: loser.id,
            })
           
        } catch  {
            return
        }
    }

    if (!combatantOne || !combatantTwo) { return <Loading>Loading...</Loading> }

    async function voteOne() {

        if (!combatantOne || !combatantTwo) { return }

        const winnerId = combatantOne.id
        const loserId = combatantTwo.id

        setCombatantOne({ ...combatantOne, wins: combatantOne.wins + 1, games: combatantOne.games + 1 })
        setCombatantTwo({ ...combatantTwo, games: combatantTwo.games + 1, defeats: combatantTwo.defeats + 1 })
        setWinner(combatantOne)
        setLoser(combatantTwo)

        const changeWinner = { wins: combatantOne.wins + 1, games: combatantOne.games + 1 }
        const changeLoser = { games: combatantTwo.games + 1, defeats: combatantTwo.defeats + 1 }

        setCombatantStatsOne(true)
        setVoteButton(false)

        await axios.put(`/hamsters/${winnerId}`, changeWinner)
        await axios.put(`/hamsters/${loserId}`, changeLoser)

        await createMatch(combatantOne, combatantTwo)
    }

    async function voteTwo() {

        if (!combatantOne || !combatantTwo) { return }

        const winnerId = combatantTwo.id
        const loserId = combatantOne.id

        setCombatantTwo({ ...combatantTwo, wins: combatantTwo.wins + 1, games: combatantTwo.games + 1 })
        setCombatantOne({ ...combatantOne, games: combatantOne.games + 1, defeats: combatantOne.defeats + 1 })
        setWinner(combatantTwo);
        setLoser(combatantOne);

        const changeWinner = { wins: combatantTwo.wins + 1, games: combatantTwo.games + 1 }
        const changeLoser = { games: combatantOne.games + 1, defeats: combatantOne.defeats + 1 }

        setCombatantStatsTwo(true)
        setVoteButton(false)

        await axios.put(`/hamsters/${winnerId}`, changeWinner)
        await axios.put(`/hamsters/${loserId}`, changeLoser)

        await createMatch(combatantTwo, combatantOne)

    }

    return (
        <Wrapper>
            <h1>Battle</h1>
            <Grid>

                <GridItem>
                    {(combatantOne.id === winner?.id && <h1>Winner</h1>) || (combatantOne.id === loser?.id && <h1>Loser</h1>)}
                    {combatantOne.imgName.startsWith('http') ?
                        <img src={combatantOne.imgName} alt={combatantOne.name} />
                        :
                        <img src={`/img/${combatantOne.imgName}`} alt={combatantOne.name} />
                    }
                    <h1>{combatantOne.name}</h1>

                    {voteButton && <Button onClick={voteOne}>Vote</Button>}


                    {(combatantStatsOne || combatantStatsTwo) &&

                        <div className="stats">
                            <h3>Wins: {combatantOne.wins}</h3>
                            <h3>Games: {combatantOne.games}</h3>
                            <h3>Defeats: {combatantOne.defeats}</h3>
                        </div>}
                </GridItem>

                <GridItem>
                    {(combatantTwo.id === winner?.id && <h1>Winner</h1>) || (combatantTwo.id === loser?.id && <h1>Loser</h1>)}
                    {combatantTwo.imgName.startsWith('http') ?
                        <img src={combatantTwo.imgName} alt={combatantTwo.name} />
                        :
                        <img src={`/img/${combatantTwo.imgName}`} alt={combatantTwo.name} />
                    }
                    <h1>{combatantTwo.name}</h1>

                    {voteButton && <Button onClick={voteTwo}>Vote</Button>}

                    {(combatantStatsOne || combatantStatsTwo) &&

                        <div className="stats">
                            <h3>Wins: {combatantTwo.wins}</h3>
                            <h3>Games: {combatantTwo.games}</h3>
                            <h3>Defeats: {combatantTwo.defeats}</h3>
                        </div>}
                </GridItem>

            </Grid>

            <Button onClick={next}>Next</Button>

        </Wrapper>
    )
};

export default Battle;