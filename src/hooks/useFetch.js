import axios from "axios";
import { useEffect, useState } from "react"
import { API_HOST, API_KEY } from "./constants";

const localCache = {};

const useFetch = ({platform, genre, tags, sortBy}) => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        if(!localCache[`${platform}${genre}${tags}${sortBy}`]){
            getData(platform, genre, tags, sortBy)
        } else {
            setGames(localCache[`${platform}${genre}${tags}${sortBy}`])
        }
        


    }, [platform, genre, tags, sortBy])

    const getData = (platform, genre, tags, sortBy) => {
        axios.get("/games", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            },
            params: {
                platform, category: genre, tags, "sort-by": sortBy
            }
        })
        .then(response => {           
            if(response.data.status !== 0){
                localCache[`${platform}${genre}${tags}${sortBy}`] = response.data;
                setGames(localCache[`${platform}${genre}${tags}${sortBy}`])
            } else {
                setGames([])
            }
        })
        .catch(error => {
            setError(error);
            setGames([])
        });
    }

    return {
        games, error
    }

}

export default useFetch;