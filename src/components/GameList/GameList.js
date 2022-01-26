import React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import GameCard from '../GameCard/GameCard';
import GameFilter from '../GameFilter/GameFilter';

function GameList({games, onFilterChange}){
    return (
        <>
            <GameFilter onFilterChange={onFilterChange}/>
            <Box sx={{ flexGrow: 1 , marginLeft: 10, marginTop: 5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {games.map((game) => (
                <Grid spacing={2}  item xs={2} sm={4} md={4} key={game.id} >
                    <GameCard  content={game} />
                </Grid>
                ))}
            </Grid>
            </Box>  
        </>
    );
};
  
export default GameList;