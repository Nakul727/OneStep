import React from 'react';

const HabitVisualization = () => {
    return (
        <div className="h-full">
            <div className="flex flex-col items-center justify-center bg-slate-400 p-12 h-full">
                <div><p>Habit Visualizer - ToDo</p></div>
                <div><p>Display a completion graph for daily task completed %</p></div>     
            </div>
        </div>
    );
};

export default HabitVisualization;