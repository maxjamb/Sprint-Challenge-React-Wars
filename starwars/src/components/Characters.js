import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";



const Characters = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.co/api/people")
        .then(res => {
          console.log(res.data);
          setPeople(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);
  

    return (
    <>
     
      {people ? (
        people.map((character, index) => (
          <Card key={index} character={character} />
        ))
      ) : (
        <h1>"Loading"</h1>
      )} 
    </>
)   }

export default Characters