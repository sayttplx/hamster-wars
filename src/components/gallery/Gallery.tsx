import { useEffect, useState } from "react";
import { Hamster } from '../../models/Hamster'
import { Grid } from './Grid'
import { GalleryItem, GalleryHeader } from "./GalleryItem";
import { Button } from "../../shared/Button";
import AddForm from './modal/ModalForm'
import axios from "axios";
import HamsterInfo from "./Info";



const Gallery = () => {
    const [hamsters, setHamsters] = useState<[] | Hamster[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [hamsterInfo, setHamsterInfo] = useState<Hamster | null>(null);


    async function getHamsters() {
        const response = await axios.get('/hamsters')
        setHamsters(response.data)
    }

    useEffect(() => {
        getHamsters();

    }, []);

    async function deleteHamster(id: string) {
        await axios.delete(`/hamsters/${id}`)
        setHamsters(hamsters.filter(hamster => hamster.id !== id));

    }

    async function addHamster() {
        getHamsters();
    }

    async function getHamsterInfoById(id: string) {
        const response = await axios.get(`/hamsters/${id}`);
        setHamsterInfo(response.data)
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)


    return (
        <>
            <GalleryHeader>
                <h1>Gallery</h1>
                <Button onClick={() => setIsModalVisible(!isModalVisible)}>Add Hamster</Button>
                {isModalVisible ?
                    <AddForm addHamster={addHamster} show={isModalVisible} set={setIsModalVisible} />
                    : null}
            </GalleryHeader>

            <Grid>
                {hamsterInfo && show ? <HamsterInfo hamster={hamsterInfo} handleClose={handleClose} /> : null}
                {hamsters ? hamsters.map(hamster =>

                    <GalleryItem key={hamster.id}>

                        {hamster.imgName.startsWith('http') ?
                            <img src={hamster.imgName} alt={hamster.name} />
                            :
                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
                        }

                        <h3>{hamster.name}</h3>
                        <button className="delete-button" onClick={() => deleteHamster(hamster.id)}>🗑️</button>
                        <button className="info-button" onClick={() => { setShow(!show); getHamsterInfoById(hamster.id) }}>🐹</button>

                    </GalleryItem>
                ) : null}

            </Grid>
        </>
    );
}

export default Gallery;