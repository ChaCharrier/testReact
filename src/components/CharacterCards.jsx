

const CharacterCards = ({character}) => {
    return (
    <figure>
        <img src= {character.imgSrc} alt = {character.name}/>
        <p>Hello I'm {character.name} ! You can recognise me because I'm always wearing {character.isWearing}</p>
    </figure>
    )
}
export default CharacterCards;