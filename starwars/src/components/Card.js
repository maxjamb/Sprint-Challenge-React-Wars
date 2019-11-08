import React from "react";
import styled from 'styled-components';


export const StyleCard = styled.div`
    background: hsl(198, 62%, 35%);
    border: 2px solid white;
    color: white;
    width: 400px;
    padding:20px;
    margin: 10px auto;
    border-radius: 1rem;
    .attributes{
        display: flex;
        justify-content: center;
    }
`;


const Card = (props) => {

    console.log(props)

    return(
        <>
    <StyleCard>        
        <h1>Name: {props.character.name}</h1>
        <div className="attributes">
        <div className="left">
            <h4>Height: {props.character.height}</h4>
            <h4>Mass: {props.character.mass}</h4>
            <h4>Hair Color: {props.character.hair_color}</h4>
        </div>
        <div className="right">
            <h4>Eye Color: {props.character.eye_color}</h4>
            <h4>Birth Year: {props.character.birth_year}</h4>
            <h4>Skin Color: {props.character.skin_color}</h4>
        </div>
        </div>
    </StyleCard>
    </>
    )}

export default Card;