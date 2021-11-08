import { useState, useEffect } from "react";
import { Matches } from '../models/Matches'
import { Hamster } from '../models/Hamster'
import axios from "axios";




const History = () => {
    const [matches, setMatches] = useState<Matches[] | null>(null)
    const [hamsters, setHamsters] = useState<Hamster[] | null>(null)


    async function getMatches() {
        const response = await axios.get("/matches");
        setMatches(response.data);
    }

    async function getHamsters() {
        const response = await axios.get('/hamsters')
        setHamsters(response.data)
    }


    useEffect(() => {
        getMatches();
        getHamsters();
    }, []);


    return (
        <div>
            {matches ?
                matches.map(match => (
                    <div key={match.id} >
                        {
                            hamsters?.map(hamster => {
                                
                                if (hamster.id === match.winnerId) {
                                    return (
                                        <div key={match.winnerId}>
                                            <h1>Winner</h1>
                                            <h2>{hamster.name}</h2>
                                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} width="200px" height="200px" />
                                        </div>
                                    )
                                }
                                if (hamster.id === match.loserId) {
                                    return (
                                        <div key={match.loserId}>
                                            <h1>Loser</h1>
                                            <h2>{hamster.name}</h2>
                                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} width="200px" height="200px" />
                                        </div>
                                    )
                                }
                            })
                        }


                    </div>
                ))

                : 'Laddar matcher...'}

        </div>
    )
}





export default History;