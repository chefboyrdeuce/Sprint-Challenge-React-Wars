import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          console.log(res);
          setCharacters(res.data.results);
        })
        .catch(err => {
          console.log(`The error was: ${err}`);
        });
    }, []); 
  
  console.log(characters);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {characters.map((char) => {
          return (
            <div>
              <CharacterCard
                key={char.url}
                name={char.name}
                gender={char.gender}
              />
            </div>
          );
        })}
    </div>
  );
}

export default App;
