import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from './Image'
import { Hamster } from '../../models/Hamster'
import { Button } from '../../shared/Button'



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


      <section className="buttons">
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