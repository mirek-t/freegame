import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import GameCard from '../GameCard/GameCard';
import GameFilter from '../GameFilter/GameFilter';

function GameList({games, setFilter}){
    return (
        <>
            <Container maxWidth="md">
            <GameFilter setFilter={setFilter}/>
            <Box sx={{ flexGrow: 1}} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {!games.length ? (
                        <Stack sx={{width: "100%", marginTop: 10}} spacing={2}>
                            <Alert variant="filled" severity="success">
                                No games found
                            </Alert>
                        </Stack>                                             
                    ) : (
                        games.map((game) => (
                        <Grid spacing={2}  item xs={2} sm={4} md={4} key={game.id} >
                            <GameCard  content={game} />
                        </Grid>
                        ))
                        
                    )}
                </Grid>
            </Box>  
            </Container>
        </>
    );
};
  
export default GameList;