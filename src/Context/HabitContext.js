import { createContext, useState } from "react";

export const HabitContext = createContext();

export function HabitProvider({children}){
    const [habits, setHabits] = useState([]);

    return(<HabitContext.Provider value={{habits, setHabits}}>
        {children}
    </HabitContext.Provider>)
}