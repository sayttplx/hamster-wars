import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hamster } from '../../models/Hamster'

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

const Start = () => {
  const [cutestHamster, setCutestHamster] = useState<Hamster[] | null>(null)

  async function getCutest() {
    const response = await axios.get('/hamsters/cutest');
    const data = await response.data
    setCutestHamster(data)
  }

  useEffect(() => {
    getCutest()
  }, [])


  

  return (
    <div>
      <h1>Välkommen till Hamsterwars! </h1>
      <p> Här kan du rösta på olika hamstrar för att utse den sötaste hamstern i hela världen. </p>
      <section>
        <Link to="/battle">
          <Button>BATTLE</Button>
        </Link>
      </section>
      <div>
        {cutestHamster ? cutestHamster.map(hamster => (
          <div key={hamster.id}>
            <p><strong>{hamster.name} </strong>är den sötaste hamstern i världen just nu!</p>
            <img src={`/img/${hamster.imgName}`} alt={hamster.name} width="300px" height="300px" />
          </div>

        )) : <p>Hämtar den sötaste hamstern, vänligen vänta!</p>}
      </div>
    </div>


  );
}
export default Start;