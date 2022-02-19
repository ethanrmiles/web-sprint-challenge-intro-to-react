// Write your Character component here
import react, {useState, styledComponents} from 'react';

export default function Character (props) {
    const { characters } = props
    console.log('data:', props.characters[0])
    return (
        <>
            <div className='character-wrapper'>
                <div className='character-list'>
                </div>
            </div>
        </>


    )
}