
import React from "react";
import styled from "styled-components";

const Card = styled.div`
background: white;
color: black;
// width: 400px;
// height: 400px;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: space-between;
margin-bottom: 20px;
`;

const CharacterCard = props => {
    return(
        <Card>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
        </Card>
    )
}
export default CharacterCard;