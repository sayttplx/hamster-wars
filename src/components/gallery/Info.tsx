
import { Hamster } from '../../models/Hamster'


const HamsterInfo = ({ ham }: { ham: Hamster }) => {
    console.log(ham)

    return (
        <div className="hamster-info">
            <p><span>Age:</span> {ham.age}</p>
            <p><span>Favorite food:</span> {ham.favFood}</p>
            <p> <span>Loves:</span> {ham.loves}</p>
            <p> <span>Wins:</span> {ham.wins}</p>
            <p> <span>Defeats:</span> {ham.defeats}</p>
            <p><span>Games:</span> {ham.games}</p>
            
        </div>
    )

}

export default HamsterInfo