// Write your Character component here
import react, {useState} from 'react';
import styled from 'styled-components';
import theme from '../theme';

export default function Character (props) {
    const { characters } = props;
    const [showDetails, setShowDetails] = useState(null);
    console.log(characters)
    
    //Styled Components Here: 
    const StyledDetails = styled.div`
    background-color: white;
    width: 35%;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const StyledUl = styled.ul`
    color: #273453;
    padding: 10px 0;
    `
    const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const StyledLi = styled.li`
    margin: 2% 0;
    list-style-type: none;
    `
    const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    padding: .75% 1%;

    &:hover{
        background-color: #488A6F;
        color: #ffffff;
    }
    `
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }
   
    
    return  <StyledCard className='character-card'>
    <h2>{characters.name}</h2>
    <StyledButton onClick={toggleDetails}>{showDetails?'Hide Details':'Show More'}</StyledButton>
    <StyledDetails className='details-container'>
    {
    showDetails &&
        <StyledUl id='details'>
            <StyledLi>Birth Year: {characters.birth_year}</StyledLi>
            <StyledLi>Eye Color: {characters.eye_color}</StyledLi>
            <StyledLi>Gender: {characters.gender}</StyledLi>
            <StyledLi>Hair Color: {characters.hair_color}</StyledLi>
            <StyledLi>Height: {characters.height}</StyledLi>
            <StyledLi>Mass: {characters.mass}</StyledLi>
        </StyledUl>
     }
    </StyledDetails>
    </StyledCard>
}