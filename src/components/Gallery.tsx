import { useEffect, useState } from "react";
import { Hamster } from '../models/Hamster'


const Gallery = () => {
    const [hamsters, setHamsters] = useState<Hamster[]>([]);

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