import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const useHabits = (newHabit) => {
    const [habits, setHabits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const token = localStorage.getItem('jwt');
                const decoded = jwtDecode(token);
                const userId = decoded.id;

                const backendApi = process.env.REACT_APP_BACKEND;
                const response = await fetch(`${backendApi}/api/habits/get_habits/${userId}`);

                if (!response.ok) {
                    throw new Error('Error fetching habits');
                }

                const data = await response.json();

                if (data.status === 'error') {
                    setError(data.message);
                } else {
                    setHabits(data.habits);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHabits();
    }, [newHabit]);

    return { habits, error };
};

export default useHabits;