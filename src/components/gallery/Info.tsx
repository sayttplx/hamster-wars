
import { MouseEventHandler } from 'react';
import { Hamster } from '../../models/Hamster'
import styled from 'styled-components'

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


interface Props {
  hamster: Hamster
  handleClose: () => void
}


const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
    e.persist();
    e.stopPropagation();
  };


const HamsterInfo = ({hamster, handleClose}: Props) => {

    
    


    return (
        <Section onClick={handleClose} >
            <Info onClick={stopPropagation}>
            <Header>{hamster.name}</Header>
        <div className="hamster-info">
            
            <p><span>Age:</span> {hamster.age}</p>
            <p><span>Favorite food:</span> {hamster.favFood}</p>
            <p> <span>Loves:</span> {hamster.loves}</p>
            <p> <span>Wins:</span> {hamster.wins}</p>
            <p> <span>Defeats:</span> {hamster.defeats}</p>
            <p><span>Games:</span> {hamster.games}</p>
            <button onClick={handleClose}>Close</button>
        </div>
        </Info>
        </Section>
    )

}

export default HamsterInfo