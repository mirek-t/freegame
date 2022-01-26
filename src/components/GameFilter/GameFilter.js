import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

function GameFilter({onFilterChange}) {
    return (
        <Box sx={{minWidth: 120, marginTop: 5}}>
            <FormControl>
                <InputLabel id="platform">Platform:</InputLabel>
                <Select
                    labelId="platform"
                    id="demo-simple-select"
                    value={PLATFORMS[0].value}
                    label="platform"
                    onChange={onFilterChange}
                    name="platform"
                >
                    {PLATFORMS.map(platform => (
                        <MenuItem value={platform.value} key={platform.value}>
                            {platform.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="genre">Genre:</InputLabel>
                <Select
                    labelId="genre"
                    id="demo-simple-select"
                    value={GENRES[0].value}
                    label="genre"
                    onChange={onFilterChange}
                    name="genre"
                >
                    {GENRES.map(genre => (
                        <MenuItem value={genre.value} key={genre.value}>
                            {genre.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="tags">Tags:</InputLabel>
                <Select
                    labelId="tags"
                    id="demo-simple-select"
                    value={TAGS[0].value}
                    label="tags"
                    onChange={onFilterChange}
                    name="tags"
                >
                    {TAGS.map(tag => (
                        <MenuItem value={tag.value} key={tag.value}>
                            {tag.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>

                <InputLabel id="sortBy">Sort by:</InputLabel>
                <Select
                    labelId="sortBy"
                    id="demo-simple-select"
                    value={SORT_BY[0].value}
                    label="sortBy"
                    onChange={onFilterChange}
                    name="sortBy"
                >
                    {SORT_BY.map(sortBy => (
                        <MenuItem value={sortBy.value} key={sortBy.value}>
                            {sortBy.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default GameFilter;