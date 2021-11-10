
import { MouseEventHandler, useEffect, useState } from 'react';
import { Hamster } from '../../models/Hamster'
import { Matches } from '../../models/Matches'
import styled from 'styled-components'
import axios from 'axios'


const Section = styled.section`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Header = styled.h3`
  color: black;
  font-size: 52px;
  line-height: 1em;
  font-weight: 700;
  margin: 5px 0 10px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 22rem;
`;


const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;
  width: 400px;
  margin: 5em auto;
  border-radius: 5px;
  padding: 2em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #a18c8c;
  color: black;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Kills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;
  width: 400px;
  margin: 5em auto;
  border-radius: 5px;
  padding: 2em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #a18c8c;
  color: black;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1em;
`

const Details = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 4px solid rgb(0,0,0);
    border-radius: 0.3rem;
    width: 250px;
    height: 360px;
    background-color: gray;
    color: white;
`

export const Button = styled.button`
  cursor: pointer;
  border: 3px solid white;
  font-size: 16px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 8px 16px;
  line-height: 1em;
  color: white;
  background-color: rgb(27, 27, 27);
  
  &:hover {
    color: black;
    background-color: white;
    border-color: white;
  }
  `


interface Props {
  hamster: Hamster
  handleClose: () => void
}


const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
  e.stopPropagation();
};


const HamsterInfo = ({ hamster, handleClose }: Props) => {

  const [matches, setMatches] = useState<Hamster[]>([])


  useEffect(() => {
    async function getMatchWinners(id: string) {
      const response = await axios.get(`/matchwinners/${id}`);
      const data = response.data;

      let loserIds = data.map((match: Matches) => match.loserId);
      let arr: string[] = []
      loserIds.forEach((id: string) => {
        if (!arr.includes(id)) {
          arr.push(id)
        } else {
          return
        }
      })

      const getLosers = async (id: string) => {
        const response = await axios.get(`/hamsters/${id}`);
        const data = await response.data

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
        <Header>{hamster.name}</Header>
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
          <h1>Defeated</h1>
          <Grid>
          {matches ? matches.map(hamster =>
            <div key={hamster.id}>
               <p>{hamster.name}💀</p>
            </div>
            
          )
          
            : 'Loading..'}
            </Grid>
          <Button onClick={handleCloseStats}>Close</Button>
        </Kills>
        : null
      }

    </Section>
  )

}

export default HamsterInfo