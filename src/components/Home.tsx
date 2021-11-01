import { useState, useEffect } from 'react'
import { Hamster } from '../models/Hamster'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Button = styled.button`
      background-color: #ff5c5c;
  border: none;
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;






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
        <Wrapper>
            <h1>Hamster wars</h1>
            <p>Välkommen, klicka på battle för att köra igång spelet och välj sedan den hamster du tycker är sötast.. Du kan också gå till galleriet för att
                se alla hamster som finns i spelet.
            </p>

            <Link to="/battle">
                <Button>Battle</Button>
            </Link>
            {cutestHamster ? <p>{cutestHamster[0].name} är den sötaste!</p>
                : <p>Vänta lite...</p>
            }



        </Wrapper>
    )
}

export default Home