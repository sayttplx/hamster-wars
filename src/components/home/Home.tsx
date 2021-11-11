import { useState, useEffect } from 'react'
import { Hamster } from '../../models/Hamster'
import axios from 'axios';
import Start from './Start';
import Error from './Error';
import { Wrapper } from '../../shared/Wrapper'



const Home = () => {

    const [hamsters, setHamsters] = useState<Hamster[] | null>(null)

    async function getCutest() {
        const response = await axios.get('/hamsters/cutest');
        const data = await response.data
        setHamsters(data)
    }

    useEffect(() => {
        getCutest()
    }, [])



    return (
        <Wrapper>
            {hamsters ? <Start/> : <Error/>}
        </Wrapper>
    )
}

export default Home