import { useState, useEffect } from "react";
export const useWindowResize = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const windowHeightHandler = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", windowHeightHandler);

        return () => {
            window.removeEventListener("resize", windowHeightHandler);
        };
    }, [windowHeight]);
    return {
        windowHeight,
    };
};
