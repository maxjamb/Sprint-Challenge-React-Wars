import React from "react";

const Card = (props) => {

    console.log(props)

    return(
    <div>{props.character.name}</div>
    )}

export default Card;