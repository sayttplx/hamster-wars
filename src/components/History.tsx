import { useState, useEffect } from "react";
import { Matches } from '../models/Matches'
import { Hamster } from '../models/Hamster'
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Match = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 1rem;
margin: 10px;
`;


export const Button = styled.button`
  background-color: #E1C1BC;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d6b5a8;
  }
`;


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
                                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} width="200px" height="200px" />
                                            <h2>{hamster.name}</h2>
                                        </div>
                                    )
                                }
                                if (hamster.id === match.loserId) {
                                    return (
                                        <div key={match.loserId}>
                                            <h1>Loser</h1>
                                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} width="200px" height="200px" />
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

                : null }

        </Wrapper>
    )
}





export default History;