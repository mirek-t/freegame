import axios from "axios";
import { useEffect, useState } from "react"
import { API_HOST, API_KEY } from "./constants";

const useFetchGame = (id) => {
    const [game, setGame] = useState({});
    const [error, setError] = useState("");
    
    useEffect(() => {
            getData(id)
        }, [])

    const getData = (id) => {
        axios.get("/game", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            },
            params: {
                id
            }
        })
        .then(response => setGame(response.data))
        .catch(error => {
            setError(error);
            setGame({})
        });
    }

    return {
        game, error
    }

}

export default useFetchGame;