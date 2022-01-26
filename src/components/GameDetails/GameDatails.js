import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";
import Container from "@mui/material/Container";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Chip,
    ImageList,
    ImageListItem
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function ExpandMoreIcon() {
    return null;
}

function GameDetails() {
    const params = useParams();

    const {game} = useFetchGame(params.id);

    return (
        <Container maxWidth="md">
            <a href={game.game_url} style={{textDecoration: "none"}} target="_blank">
                <Typography variant="h2" component="h2">
                    {game.title} <Chip label={game.status} color="success"/>
                </Typography>

            </a>
            <Box>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Platform" secondary={game.platform} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Publisher" secondary={game.publisher} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Release date" secondary={game.release_date} />
                    </ListItem>
                </List>
            </Box>

            <Box>
              <ButtonGroup style={{marginBottom: 30}} variant="contained" aria-label="outlined primary button group">
                <Button><a href={game.game_url} style={{textDecoration: "none"}} target="_blank">Website</a></Button>
               <Button><Link to="/" style={{textDecoration: "none"}}>Back</Link></Button>
              </ButtonGroup>
            </Box>

            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Short Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {game.short_description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {game.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            {game.screenshots && (
                <Box sx={{width: "100%", height: 450, overflowY: 'scroll'}}>
                    <ImageList variant="masonry" cols={1} gap={8}>
                        {game.screenshots.map((item) => (
                            <ImageListItem key={item.id}>
                                <img
                                    src={`${item.image}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.id}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            )}

        </Container>
    );
}

export default GameDetails;