import { useState, useEffect } from 'react';
import { Hamster } from '../models/Hamster'


const Battle = () => {
    const [combatantOne, setCombatantOne] = useState<null | Hamster>(null)
    const [combatantTwo, setCombatantTwo] = useState<null | Hamster>(null)



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




    if (!combatantOne || !combatantTwo) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    return (
        <>
            <h1>Battle</h1>
            <img src={`/img/${combatantOne.imgName}`} alt="hamster" height="300px" width="300px" />
            <h2>{combatantOne.name}</h2>

            <br />
            <br />

            vs

            <br />
            <br />

            <img src={`/img/${combatantTwo.imgName}`} alt="hamster" height="300px" width="300px" />
            <h2>{combatantTwo.name}</h2>

            <br />
            <br />

            <h1>{combatantOne.id}</h1>
            <br />
            <br />
            <h1>{combatantTwo.id}</h1>
        </>
    )
};

export default Battle;