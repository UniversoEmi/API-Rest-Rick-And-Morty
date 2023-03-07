import CharacterList from "./CharacterList";
function Character({character}) {
    return (
        <div key = {Character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        </div>
    );
}

export default Character;