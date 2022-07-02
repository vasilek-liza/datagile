import { useEffect } from "react";

export const useSetInterval = (callback, use = true, time = 1000) => {
    useEffect(() => {
        let interval;
        if (use) {
            interval = setInterval(callback, time);
        }
        return () => clearInterval(interval);
    }, []);
}
