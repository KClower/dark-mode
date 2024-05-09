import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValue) => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue)

    return [storedValue, setValue];
}




