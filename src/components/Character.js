// Write your Character component here
import react, {useState, styledComponents} from 'react';

export default function Character (props) {
    const { characters } = props
    console.log('data:', characters)
    
    return (
        <>
            <div className='character-wrapper'>
                <div className='character-list'>
                    {
                        characters.map(character => {
                            return <h2>{character.name}</h2>
                        })

                    }
                </div>
            </div>
        </>


    )
}