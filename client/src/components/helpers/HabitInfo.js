import React, { useEffect, useState } from 'react';
import useHabits from '../../hooks/useHabits';
const HabitInfo = () => {
    const { habits, error } = useHabits();
    const [loadedHabits, setLoadedHabits] = useState(null);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        if (habits) {
            setLoadedHabits(habits);
        }
        if (error) {
            setLoadError(error);
        }
    }, [habits, error]);

    const handleCheckboxChange = (habitId) => {
        setLoadedHabits(
            loadedHabits.map(habit =>
                habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
            )
        );
    };

    if (loadError) {
        return <div>Error: {loadError}</div>;
    }
    if (!loadedHabits) {
        return <div>Loading...</div>;
    }

    return (
        <table className="table-auto bg-slate-300 p-12 w-full">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Habit Name</th>
                    <th className="py-3 px-6 text-left">Start Date</th>
                    <th className="py-3 px-6 text-left">End Date</th>
                    <th className="py-3 px-6 text-center">Completed</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                {loadedHabits.map((habit, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{habit.habit_name}</td>
                        <td className="py-3 px-6 text-left">{new Date(habit.start_date).toLocaleDateString()}</td>
                        <td className="py-3 px-6 text-left">{new Date(habit.end_date).toLocaleDateString()}</td>
                        <td className="py-3 px-6 text-center">
                            <input 
                                type="checkbox" 
                                checked={habit.completed} 
                                onChange={() => handleCheckboxChange(habit.id)} 
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HabitInfo;