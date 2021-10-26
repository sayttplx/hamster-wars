import { useEffect, useState } from "react";

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const getAnimals = async () => {
        const response = await fetch('/animals');
        const data = await response.json();
        const animals = data
        return animals
    }


    useEffect(() => {
        async function send() {
            const animal = await getAnimals()
            setAnimals(animal)
        }
        send()
    }, []) 

    return (
        <div>
            <h1>Animals</h1>
            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    );
    
}

export default AnimalList;