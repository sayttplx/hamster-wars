import React, { useState } from 'react';
import ModalRWD from './ModalRWD';
import { ReactComponent as FoodIcon } from '../assets/food.svg'
import InputWithIcon from './InputWithIcon';
import { Button, ButtonContainer } from './ModalPopup.styled';
import { PostHamster } from '../models/Hamster';


export interface CreateArgs {
  name: string,
  age: number,
  favFood: string,
  loves: string,
  imgName: string,
  wins: number,
  defeats: number,
  games: number
}


interface CreateModalProps {
  onClose: () => void;
  isModalVisible: boolean;
}

const CreateModal: React.FC<CreateModalProps> = ({ isModalVisible, onClose }) => {
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

  }


  return (
    <ModalRWD
      onBackdropClick={onClose}
      isModalVisible={isModalVisible}
      header="Create Hamster"
      message="Please add information"
      content={
        <>
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
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={() => {
              createHamster(hamsterObject)
              onClose()
            }}>Create</Button>
          </ButtonContainer>
        </>
      }
    />
  );
};

export default CreateModal;