import React,  { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card, Button, Icon, Image, List, Header } from "semantic-ui-react";

const url = "https://swapi.co/api/people/1";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [state, setState] = useState({
    name: "",
    height: "",
    mass: "",
    birth_year: "",
    gender: "",
    error: "Request was unsuccesful"

  })

  useEffect(() => {
    axios.get(url)
    .then((response) => {
        console.log(response.data)
        setState(response.data)
    })
    .catch((error) => 
      // error.response.data.error.message,
      console.log('Network request was unsuccesful'),
      )
    
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>


      <Card style={{width:"200px", height:"100px", background:"white", color:"black", margin:"auto"}} centered>
        
        <Card.Header>{state.name}</Card.Header> 

        <List.Item>
          <List.Item>DOB: {state.birth_year} </List.Item> 
          <List.Item>Gender: {state.gender}  </List.Item>
          <List.Item>Height: {state.height} </List.Item>
          <List.Item>Mass: {state.mass} </List.Item>
        </List.Item> 
      
      </Card>

    </div>
  );
}

export default App;



