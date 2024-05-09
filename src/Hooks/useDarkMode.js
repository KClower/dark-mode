
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage("darkMode", initialValue)
    const body = document.querySelector("body")
    if (storedValue === true) {
        body.classList.add("dark-mode")
    }
    else {
        body.classList.remove("dark-mode")
    }
    return [storedValue, setValue];
}




