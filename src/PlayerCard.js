import React from 'react';
const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
    var sign = props.sign;
    var image = ""
    if (sign === "rock") {
        image =rock;
    }
    else if (sign === "paper") {
        image = paper;
    }
    else {
        image = scissors
    }

    return(
        <div className="player-card">
            <img alt="hello" src={image}/>
        </div> // if we didnt break props.sign down on line 4 we could just insert the entire thing where sign is
    )
}

export default PlayerCard;