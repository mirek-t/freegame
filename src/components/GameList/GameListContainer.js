import React, { useCallback, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import GameList from './GameList';



function GameListContainer(){
    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    })

    const {games, error} = useFetch(filter);

    const onFilterChange = useCallback((e) => {
        e.preventDefault();

        // setFilter({...filter, [e.target.name]: e.target.value})
        setFilter(current => ({
            ...current, [e.target.name]: e.target.value
        }))
    }, []);

    return <GameList games={games} onFilterChange={onFilterChange}/>;
};
export default GameListContainer;