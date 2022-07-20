import { useEffect, useState } from "react";
import CardCharacters from "./sub-components/CardCharacters";

const CharactersList = () => {
  const [Characters, setCharacters] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch("https://62d80e029c8b5185c781fe4a.mockapi.io/characters", requestOption)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, [refreshData]);
  return (
    <div className="charactersList">
      {Characters.map((character) => {
        return (
          <CardCharacters
            name={character.name}
            key={character.name}
            image={character.image}
            house={character.house}
            alive={character.alive}
            hogwartsStaff={character.hogwartsStaff}
            character={character}
            favorite={character.favorite}
            id={character.id}
            refreshData={refreshData}
            setRefreshData={setRefreshData}
            gender={character.gender}
            eyeColour={character.eyeColour}
            hairColour={character.hairColour}
            dateOfBirth={character.dateOfBirth}
          />
        )
      })}
    </div>
  )

};
CharactersList.defaultProps = {
  characters: Array(10).fill(''),
}
export default CharactersList;