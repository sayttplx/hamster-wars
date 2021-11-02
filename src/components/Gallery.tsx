import { useEffect, useState } from "react";
import { Hamster } from '../models/Hamster'
import AddForm from './ModalForm'
import styled from "styled-components";


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,260px);
    grid-gap: 1.2rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0px;
    max-width: 1100px;
    list-style-type: none;
`;

const GalleryItem = styled.div`
position: relative;

img {
    border: 4px solid rgb(0, 0, 0);
    border-radius: .3rem;
    box-shadow: 4px 7px 4px 4px rgba(0,0,0,0.75);
    width: 250px;
    height: 250px;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    width: 3rem;
    padding: 0;
    border-radius: 0;
    cursor: pointer;
    opacity: 0.5;
}

button:hover {
    opacity: 1;
}
`

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

const Gallery = () => {
    const [hamsters, setHamsters] = useState<Hamster[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    async function getHamsters() {
        const response = await fetch('/hamsters', { method: 'GET' });
        const data: Hamster[] = await response.json();
        setHamsters(data);
    }

    useEffect(() => {
        getHamsters();
    }, []);

    async function deleteHamster(id: string) {
        await fetch(`/hamsters/${id}`, { method: 'DELETE' });
        getHamsters();
    }

    async function addHamster() {
        getHamsters();
    }

    return (
        <>
            <div className="gall">
                <h1>Gallery</h1>
                <Button onClick={() => setIsModalVisible(!isModalVisible)}>Add Hamster</Button>
                {isModalVisible ?
                    <AddForm addHamster={addHamster} show={isModalVisible} set={setIsModalVisible} />
                    : null}
            </div>

            <Grid>
                {hamsters ? hamsters.map(hamster =>
                    <GalleryItem key={hamster.id}>
                        <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
                        <h3>{hamster.name}</h3>
                        <button onClick={() => deleteHamster(hamster.id)}>🗑️</button>
                    </GalleryItem>
                ) : null}
            </Grid>
        </>
    );
}

export default Gallery;