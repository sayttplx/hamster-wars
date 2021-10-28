import { useState, useEffect } from 'react'
import { Hamster } from '../models/Hamster'


const Home = () => {

    const [cutestHamster, setCutestHamster] = useState<Hamster[] | null>(null)

    async function getCutest() {
        const response = await fetch('/hamsters/cutest', { method: 'GET' });
        const data: Hamster[] = await response.json();
        setCutestHamster(data);
    }



    useEffect(() => {
        getCutest()
    }, [])


    return (
        <div>
            <h1>Hamster wars</h1>
            <p>Välkommen, klicka på battle för att köra igång spelet och välj sedan den hamster du tycker är sötast.. Du kan också gå till galleriet för att
                se alla hamster som finns i spelet.
            </p>

            {cutestHamster ?

                cutestHamster.map(hamster => (
                    <div className='hamster-card' key={hamster.id} >
                        <li><img src={`/img/${hamster.imgName}`} alt={hamster.name} /></li>
                        <li><h3>Name: </h3> <h3 className="hamster-name">{hamster.name}</h3></li>
                        <li><h3>Wins: </h3> {hamster.wins} </li>
                        <li><h3>Defeats: </h3> {hamster.defeats} </li>
                        <li><h3>Games: </h3> {hamster.games} </li>


                    </div>
                ))
                : 'Loading hamsters...'}

        </div>
    )
}

export default Home