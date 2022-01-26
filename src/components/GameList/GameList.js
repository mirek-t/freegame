import React from 'react';
import GameCard from '../GameCard/GameCard';
import GameFilter from '../GameFilter/GameFilter';

function GameList({games, onFilterChange}){
    return (
        <>
            <GameFilter onFilterChange={onFilterChange}/>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <GameCard content={game} />
                    </li>
                ))}

            </ul>
        
        </>
    );
};
  
export default GameList;