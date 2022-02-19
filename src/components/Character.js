// Write your Character component here
import react, {useState, styledComponents} from 'react';

export default function Character (props) {
    const { characters } = props;
    const [showDetails, setShowDetails] = useState(null);
    console.log('data:', characters);
    
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    
    return (
        <>
            <div className='character-wrapper'>
                <div className='character-list'>
                    {
                        characters.map(character => {
                            return <div className='character-card'>
                                <h2>{character.name}</h2>
                                <button onClick={toggleDetails}>Show More</button>
                                <div className='details-container'>
                                {showDetails &&
                                    <ul id='details'>
                                        <li>{character.birth_year}</li>
                                        <li>{character.eye_color}</li>
                                        <li>{character.gender}</li>
                                        <li>{character.hair_color}</li>
                                        <li>{character.height}</li>
                                        <li>{character.mass}</li>
                                    </ul>
                        }
                                </div>
                                </div>
                        })
                    }
                </div>
            </div>
        </>


    )
}