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



    return (
        <>
            <h1>Gallery</h1>
            <div>
                {hamsters ? hamsters.map(hamster =>
                    
                        <div key={hamster.id}>
                            <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
                            
                            <h3>{hamster.name}</h3>
                            
                        </div>
                    
                ) : null}
            </div>
        </>
    );
}

export default Gallery;