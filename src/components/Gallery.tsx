import { useEffect, useState } from "react";
import { Hamster } from '../models/Hamster'
import BaseModalWrapper from '../ModalPopup/BaseModalWrapper'


const Gallery = () => {
    const [hamsters, setHamsters] = useState<Hamster[]>([]);

    const [isModalVisible, setIsModalVisible] = useState(false);


    const toggleModal = () => {
        setIsModalVisible(isModalVisible => !isModalVisible);
    }


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

    return (
        <>
            <h1>Gallery</h1>
            <br />
            <br />
            <button onClick={toggleModal}>New Hamster</button>
            <BaseModalWrapper 
            isModalVisibile={isModalVisible} 
            onBackdropClick={toggleModal}/>


            <br />
            <br />
            <br />
            <br />
            
            <div className="gallery">
                {hamsters ? hamsters.map(hamster =>
                    <div key={hamster.id} className="gallery__item">
                        <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
                        <h3>{hamster.name}</h3>
                        <button onClick={() => deleteHamster(hamster.id)}>Delete</button>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default Gallery;