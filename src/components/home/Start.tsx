import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hamster } from '../../models/Hamster'

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

const Image = styled.div`
position: relative;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 4px;
margin-top: 2rem;

img {
  padding: 1rem;
  width: 100%;
  height: 400px
}

.crown {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 6rem;
  padding: 0;
  border-radius: 0;
}

.hamster-leader {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 5rem;
  padding: 0;
  border-radius: 0;
  color: #fff;
}
  `




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
      <p> Här kan du rösta på olika hamstrar för att utse den sötaste hamstern i hela världen. </p>
            <div>
        {cutestHamster ? cutestHamster.map(hamster => (
          <div key={hamster.id}>
            <Image>
            <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
            <div className="crown">
            👑
            </div>
            <div className="hamster-leader">
            <strong>{hamster.name} </strong>
            </div>
            </Image>
          </div>

        )) : <p>Hämtar den sötaste hamstern, vänligen vänta!</p>}
      </div>


      <section>
        <p>Klicka här om du vill köra igång och rösta!</p>
        <Link to="/battle">
          <Button>BATTLE</Button>
        </Link>

        <p>Klicka här om du vill gå till galleriet och se alla hamstrar!</p>
        <Link to="/gallery">
          <Button>GALLERY</Button>
        </Link>
      </section>

    </div>


  );
}
export default Start;