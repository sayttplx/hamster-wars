import { FunctionComponent, MouseEventHandler, useState } from "react"
import { ReactComponent as FoodIcon } from '../../../assets/food.svg'
import InputWithIcon from "./InputWithIcon"
import { PostHamster } from "../../../models/Hamster"
import { AddFormProps, Form, CloseButton, CloseSign, Header, Button, ButtonContainer, Section } from './Form'



const AddForm: FunctionComponent<AddFormProps> = ({ show, set, addHamster }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [favFood, setFavFood] = useState('')
  const [loves, setLoves] = useState('')
  const [imgName, setImgName] = useState('')
  const [wins] = useState(0)
  const [games] = useState(0)
  const [defeats] = useState(0)

  const [nameTouch, setNameTouch] = useState(false)
  const [ageTouch, setAgeTouch] = useState(false)
  const [foodTouch, setFoodTouch] = useState(false)
  const [loveTouch, setLoveTouch] = useState(false)
  const [imgTouch, setImgTouch] = useState(false)


  let nameIsValid: boolean = true
  let nameError: string = ''
  if (name === '') { nameIsValid = false; nameError = 'Vänligen skriv ett namn' }


  let nameClass = ''
  if (nameTouch) { nameClass = (nameIsValid ? 'valid' : 'invalid') }


  const allowedAgeCharacters = /^[0-9]*$/
  let ageIsValid: boolean = true;
  let ageError: string = "";
  if (age === "") {
    ageIsValid = false; ageError = "Vänligen skriv in ålder";
  } else if (
    !age.split("").every((char) => allowedAgeCharacters.test(char))
  ) {
    ageIsValid = false;
    ageError = "Vänligen skriv med siffror";
  }
  let ageClass = "";
  if (ageTouch) { ageClass = ageIsValid ? "valid" : "invalid"; }



  let favFoodIsValid: boolean = true;
  let foodError: string = "";
  if (favFood === "") { favFoodIsValid = false; foodError = "Vänligen skriv in favoritmat"; }
  let favFoodClass = "";
  if (foodTouch) { favFoodClass = favFoodIsValid ? "valid" : "invalid"; }


  let lovesIsValid: boolean = true;
  let loveError: string = "";
  if (loves === "") { lovesIsValid = false; loveError = "Vänligen skriv vad din hamster älskar"; }
  let lovesClass = "";
  if (loveTouch) { lovesClass = lovesIsValid ? "valid" : "invalid"; }


  let imgNameIsValid: boolean = true;
  let imgError: string = "";
  if (imgName === "") { imgNameIsValid = false; imgError = "Vänligen ange en URL till en bild på en hamster"; }
  let imgNameClass = "";
  if (imgTouch) { imgNameClass = imgNameIsValid ? "valid" : "invalid"; }

  const formIsInvalid =
  !nameIsValid ||
  !ageIsValid ||
  !favFoodIsValid ||
  !lovesIsValid ||
  !imgNameIsValid;



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
            className={nameClass}
            onBlur={() => setNameTouch(true)}
            onChange={e => setName(e.target.value)}
            type="name"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Name"

          />
          {nameTouch ? <div className="message"> {nameError} </div> : null}
          <InputWithIcon
            value={age}
            className={ageClass}
            onBlur={() => setAgeTouch(true)}
            onChange={e => setAge(e.target.value)}
            type="age"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Age"
          />
          {ageTouch ? <div className="message"> {ageError} </div> : null}
          <InputWithIcon

            value={favFood}
            className={favFoodClass}
            onBlur={() => setFoodTouch(true)}
            onChange={e => setFavFood(e.target.value)}
            type="favFood"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Favorite food"
          />
          {foodTouch ? <div className="message"> {foodError} </div> : null}
          <InputWithIcon

            value={loves}
            className={lovesClass}
            onBlur={() => setLoveTouch(true)}
            onChange={e => setLoves(e.target.value)}
            type="loves"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Loves"
          />
          {loveTouch ? <div className="message"> {loveError} </div> : null}
          <InputWithIcon

            value={imgName}
            className={imgNameClass}
            onBlur={() => setImgTouch(true)}
            onChange={e => setImgName(e.target.value)}
            type="imgName"
            icon={<FoodIcon width="24px" height="24px" fill="white" />}
            placeholder="Image url"
          />
          {imgTouch ? <div className="message"> {imgError} </div> : null}
          <ButtonContainer>
            <Button onClick={() => { set(!show) }}>Cancel</Button>
            <Button disabled={formIsInvalid} onClick={() => {
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