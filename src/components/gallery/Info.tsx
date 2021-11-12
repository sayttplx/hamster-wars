
import { MouseEventHandler, useEffect, useState } from 'react';
import axios from 'axios'
import { Hamster } from '../../models/Hamster'
import { Matches } from '../../models/Matches'
import { Section, Info, Grid, ButtonContainer, Kills } from './Information'
import { SecondaryButton as Button } from '../../shared/Button';
import Header from './Header';
import { Details } from './Details';


interface Props {
  hamster: Hamster
  handleClose: () => void
}


const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
  e.stopPropagation();
};


const HamsterInfo = ({ hamster, handleClose }: Props) => {

  const [matches, setMatches] = useState<Hamster[]>([])
  const [matchesWon, setMatchesWon] = useState<Matches[] | null>(null)



  useEffect(() => {
    async function getMatchWinners(id: string) {

      const response = await axios.get(`/matchwinners/${id}`);
      // if error return
      if (response.status !== 200) {
        return;
      }
      const data = response.data;


      let loserIds = data.map((match: Matches) => match.loserId);
      let arr: string[] = []
      loserIds.forEach((id: string) => {
        if (!arr.includes(id)) {
          arr.push(id)
        } else {
          setMatchesWon(null)
        }
      })


      const getLosers = async (id: string) => {
        const response = await axios.get(`/hamsters/${id}`);
        const data = await response.data;
        setMatches(matches => [...matches, data])
      }
      arr.map(id =>
        getLosers(id)
      )
    }

    getMatchWinners(hamster.id)

  }, [hamster.id])


  const [showStats, setShowStats] = useState(false)
  const handleCloseStats = () => setShowStats(false)


  return (
    <Section onClick={handleClose} >
      <Info onClick={stopPropagation}>
        <Header text={hamster.name} />
        <Details>
          <p><span>Age:</span> {hamster.age}</p>
          <p><span>Favorite food:</span> {hamster.favFood}</p>
          <p><span>Loves:</span> {hamster.loves}</p>
          <p><span>Wins:</span> {hamster.wins}</p>
          <p><span>Defeats:</span> {hamster.defeats}</p>
          <p><span>Games:</span> {hamster.games}</p>
        </Details>
        <ButtonContainer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => setShowStats(!showStats)}>Wins</Button>
        </ButtonContainer>
      </Info>

      {showStats ?
        <Kills onClick={stopPropagation}>
          {matchesWon ?
            <h1>Defeated</h1>
            : <h1>No Hamsters Defeated</h1>
          }
          <Grid>
            {matches ? matches.map(hamster =>
              <div key={hamster.id}>
                <p>{hamster.name}💀</p>
              </div>
            ) : null}

          </Grid>
          <Button onClick={handleCloseStats}>Close</Button>
        </Kills>
        : null
      }

    </Section>
  )

}

export default HamsterInfo