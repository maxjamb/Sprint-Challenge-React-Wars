import React from "react";
import Card from "./Card";
import App from "../App";


const Characters = (props) => {

return(
    props.people.map((character, index) => <Card key={index} character={character}/>)
)}

export default Characters;