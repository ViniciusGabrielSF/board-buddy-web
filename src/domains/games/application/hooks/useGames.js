import { useEffect, useState } from 'react';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { endpoints } from '../constants/endpoints';

export const useGames = () => {
    const [games, setGames] = useState();

    const fetchAllGames = async (name) => {
        try {
            const { data } = await apiClient.get(endpoints.FETCH_ALL);
            setGames(data); 
       } catch (e) {
            console.error(e);
        }
    };

    useEffect(()=>{
        fetchAllGames();
    }, []);

    return {
        games
    }
}