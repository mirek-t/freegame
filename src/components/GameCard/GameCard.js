import React from 'react';
import { Link } from 'react-router-dom';

function GameCard( {content: {id, title, thumbnail, short_description, genre}} ){
   
    const link = `/games/${id}`

    return (
        <Link to={link}>
            <img src={thumbnail} alt={`${title} logo`} />
            <h2>{title}</h2>
            <p>{short_description}</p>
            <p>{genre}</p>
        </Link>
    );
};

export default GameCard;