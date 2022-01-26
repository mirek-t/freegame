import React from 'react';
import { GENRES, PLATFORMS, SORT_BY, TAGS } from './constants';

function GameFilter({onFilterChange}){
   return (
        <form onChange={onFilterChange}>
            <label htmlFor="platform">Platform:</label>
            <select name="platform" id="platform">
                {PLATFORMS.map(platform => (
                    <option value={platform.value} key={platform.value}>
                        {platform.display}
                    </option>
                ))}
            </select>

            <label htmlFor="genre">Genre:</label>
            <select name="genre" id="genre">
                {GENRES.map(genre => (
                    <option value={genre.value} key={genre.value}>
                        {genre.display}
                    </option>
                ))}
            </select>

            <label htmlFor="tag">Tags:</label>
            <select name="tag" id="tag">
                {TAGS.map(tag => (
                    <option value={tag.value} key={tag.value}>
                        {tag.display}
                    </option>
                ))}
            </select>

            <label htmlFor="sortBy">Sort by:</label>
            <select name="sortBy" id="sortBy">
                {SORT_BY.map(sortBy => (
                    <option value={sortBy.value} key={sortBy.value}>
                        {sortBy.display}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default GameFilter; 