import { useState, useEffect } from 'react';
import { Hamster } from '../models/Hamster'


const Battle = () => {
    const [combatantOne, setCombatantOne] = useState<null | Hamster>(null)
    const [combatantTwo, setCombatantTwo] = useState<null | Hamster>(null)
    const [combatantStatsOne, setCombatantStatsOne] = useState(false)
    const [combatantStatsTwo, setCombatantStatsTwo] = useState(false)
    const [voteButton, setVoteButton] = useState(true)



    async function getRandomHamster() {
        const resOne = await fetch('/hamsters/random')
        const hamsterOne = await resOne.json()
        setCombatantOne(hamsterOne)
        const resTwo = await fetch('/hamsters/random')
        const hamsterTwo = await resTwo.json()
        setCombatantTwo(hamsterTwo)
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


    if (!combatantOne || !combatantTwo) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }


    async function voteOne() {

        if (!combatantOne || !combatantTwo) {
            return
        }

        const winnerId = combatantOne.id
        const loserId = combatantTwo.id


        setCombatantOne({
            ...combatantOne,
            wins: combatantOne.wins + 1,
            games: combatantOne.games + 1
        })


        setCombatantTwo({
            ...combatantTwo,
            games: combatantTwo.games + 1,
            defeats: combatantTwo.defeats + 1
        })


        const changeWinner = {
            wins: combatantOne.wins + 1,
            games: combatantOne.games + 1
        }

        const changeLoser = {
            games: combatantTwo.games + 1,
            defeats: combatantTwo.defeats + 1
        }

        setCombatantStatsOne(true)
        setVoteButton(false)

        await fetch(`/hamsters/${winnerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeWinner)
        })

        await fetch(`/hamsters/${loserId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeLoser)
        })

    }

    async function voteTwo() {

        if (!combatantOne || !combatantTwo) {
            return
        }

        const winnerId = combatantTwo.id
        const loserId = combatantOne.id

        setCombatantTwo({
            ...combatantTwo,
            wins: combatantTwo.wins + 1,
            games: combatantTwo.games + 1
        })

        setCombatantOne({
            ...combatantOne,
            games: combatantOne.games + 1,
            defeats: combatantOne.defeats + 1
        })

        const changeWinner = {
            wins: combatantTwo.wins + 1,
            games: combatantTwo.games + 1
        }

        const changeLoser = {
            games: combatantOne.games + 1,
            defeats: combatantOne.defeats + 1
        }

        setCombatantStatsTwo(true)
        setVoteButton(false)


        await fetch(`/hamsters/${winnerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeWinner)
        })

        await fetch(`/hamsters/${loserId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeLoser)
        })
    }

    return (
        <>
            <h1>Battle</h1>
            <img src={`/img/${combatantOne.imgName}`} alt="hamster" height="300px" width="300px" />

            <h2>{combatantOne.name}</h2>
            {voteButton && <button onClick={voteOne}>Vote</button>}

            <br />
            <br />
            {(combatantStatsOne || combatantStatsTwo) &&
                <div>
                    <p>Wins: {combatantOne.wins}</p>
                    <p>Games: {combatantOne.games}</p>
                    <p>Defeats: {combatantOne.defeats}</p>
                    <br />
                </div>
            }


            vs
            <br />
            <br />
            <img src={`/img/${combatantTwo.imgName}`} alt="hamster" height="300px" width="300px" />

            <h2>{combatantTwo.name}</h2>
            {voteButton && <button onClick={voteTwo}>Vote</button>}
            <br />
            <br />
            {(combatantStatsOne || combatantStatsTwo) &&
                <div>
                    <p>Wins: {combatantTwo.wins}</p>
                    <p>Games: {combatantTwo.games}</p>
                    <p>Defeats: {combatantTwo.defeats}</p>
                    <br />
                </div>
            }

            <button onClick={next}>Next</button>

            <h1>{combatantOne.id}</h1>
            <br />
            <br />
            <h1>{combatantTwo.id}</h1>

        </>
    )
};

export default Battle;