import { useState, useEffect } from "react";
import axios from "axios";
import { Matches } from '../../models/Matches'
import { Hamster } from '../../models/Hamster'
import { Button } from '../../shared/Button'
import { Wrapper } from '../../shared/Wrapper'
import { Match } from './Match'



const History = () => {
    const [matches, setMatches] = useState<Matches[] | null>(null)
    const [hamsters, setHamsters] = useState<Hamster[] | null>(null)


    async function getMatches() {
        const response = await axios.get(`/matches`)
        setMatches(response.data)
    }

    async function getHamsters() {
        const response = await axios.get(`/hamsters`)
        setHamsters(response.data)
    }

    async function deleteMatch(id: string) {
        await axios.delete(`/matches/${id}`)
        getMatches()
    }


    useEffect(() => {
        getMatches();
        getHamsters();
    }, []);





    return (
        <Wrapper>
            {matches ?
                matches.map(match => (
                    <Match key={match.id} >
                        <Button onClick={() => deleteMatch(match.id)}>Delete</Button>
                        {
                            hamsters?.map(hamster => {

                                if (hamster.id === match.winnerId) {
                                    return (
                                        <div key={match.winnerId}>
                                            <h1>Winner</h1>
                                            {hamster.imgName.startsWith('http') ?
                                                <img src={hamster.imgName} alt={hamster.name} height="200" width="200" />
                                                :
                                                <img src={`/img/${hamster.imgName}`} alt={hamster.name} height="200" width="200" />
                                            }
                                            <h2>{hamster.name}</h2>
                                        </div>
                                    )
                                }
                                if (hamster.id === match.loserId) {
                                    return (
                                        <div key={match.loserId}>
                                            <h1>Loser</h1>
                                            {hamster.imgName.startsWith('http') ?
                                                <img src={hamster.imgName} alt={hamster.name} height="200" width="200" />
                                                :
                                                <img src={`/img/${hamster.imgName}`} alt={hamster.name} height="200" width="200" />
                                            }
                                            <h2>{hamster.name}</h2>
                                        </div>
                                    )
                                } else {
                                    return null
                                }

                            })
                        }


                    </Match>
                ))

                : <div>Loading...</div>}

        </Wrapper>
    )
}





export default History;