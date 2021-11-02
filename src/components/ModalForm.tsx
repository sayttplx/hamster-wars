import { FunctionComponent, MouseEventHandler, useState } from "react"
import { ReactComponent as FoodIcon } from '../assets/food.svg'
import styled from "styled-components"
import InputWithIcon from "./InputWithIcon"
import { PostHamster } from "../models/Hamster"


const Section = styled.section`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`

const Header = styled.h3`
color: white;
font-size: 35px;
line-height: 1em;
font-weight: 300;
margin: 5px 0 10px;
text-align: center;
`


const Form = styled.div`
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
background-color: black;
color: black;
z-index: 1;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Button = styled.button`
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
  background-color: rgb(200, 0, 0);
  &:hover {
    color: black;
    background-color: white;
    border-color: white;
  }
`

const ButtonContainer = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 22rem;
`;


interface AddFormProps {
  addHamster: () => void;
  show: boolean;
  set: any;
}

const CLOSE_BUTTON_SIZE = 40;
const CloseButton = styled.div`
position: absolute;
width: 40px;
height: 40px;
background-color: #c8c8c8;
border-radius: 50%;
cursor: pointer;
top: -${CLOSE_BUTTON_SIZE / 2}px;
left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);
& > * {
  opacity: 1;
}
&:hover > * {
  opacity: 0.4;
}
`;



const CloseSign = styled.div`
top: 0;
bottom: 0;
left: 0;
right: 0;
color: #323232;
&:before,
&:after {
  position: absolute;
  left: 19px;
  top: 10px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: #333;
}
&:before {
  transform: rotate(45deg);
}
&:after {
  transform: rotate(-45deg);
}
`;


const AddForm: FunctionComponent<AddFormProps> = ({ show, set, addHamster }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [favFood, setFavFood] = useState('')
  const [loves, setLoves] = useState('')
  const [imgName, setImgName] = useState('')
  const [wins] = useState(0)
  const [games] = useState(0)
  const [defeats] = useState(0)


  const hamsterObject = { name, age, favFood, loves, imgName, wins, games, defeats }

  async function createHamster(hamsterObject: PostHamster) {
    await fetch('/hamsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hamsterObject)
    })
    addHamster()
  }

  const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
    e.persist();
    e.stopPropagation();
  };


  return (
    <>
      <Section onClick={() => set(!show)}>
        <Form onClick={stopPropagation}>
          <CloseButton onClick={() => { set(!show) }}>
            <CloseSign />
          </CloseButton>
          <Header> Add a new hamster </Header>
          <InputWithIcon
            value={name}
            required
            onChange={e => setName(e.target.value)}
            type="name"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Name"
          />
          <InputWithIcon
            value={age}
            required
            onChange={e => setAge(Number(e.target.value))}
            type="age"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Age"
          />
          <InputWithIcon

            value={favFood}

            required
            onChange={e => setFavFood(e.target.value)}
            type="favFood"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Favorite food"
          />
          <InputWithIcon

            value={loves}

            required
            onChange={e => setLoves(e.target.value)}
            type="loves"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Loves"
          />
          <InputWithIcon

            value={imgName}

            required
            onChange={e => setImgName(e.target.value)}
            type="imgName"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Image url"
          />

          <ButtonContainer>
            <Button onClick={() => { set(!show) }}>Cancel</Button>
            <Button onClick={() => {
              createHamster(hamsterObject)
              set(!show)
            }}>Add</Button>
          </ButtonContainer>

        </Form>
      </Section>
    </>
  )
}

export default AddForm