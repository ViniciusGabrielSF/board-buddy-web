import { useEffect, useState } from 'react';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { endpoints } from '../constants/endpoints';

export const useGames = () => {
    const [games, setGames] = useState();

    const fetchAllGames = async () => {
        try {
            const { data } = await apiClient.get(endpoints.FETCH_ALL);
            setGames(data); 
       } catch (e) {
            console.error(e);
        }
    };

    const searchGamesByName = async (name) => {
        try {
            const { data } = await apiClient.get(endpoints.FETCH_BY_NAME.replace("{name}", name));
            setGames(data); 
       } catch (e) {
            console.error(e);
        }
    }; 

    useEffect(()=>{
        fetchAllGames();
    }, []);

    return {
        games,
        searchGamesByName
    }
}