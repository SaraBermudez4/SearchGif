import { useState } from "react";

const useCounter = (value) => {

    const [counter, setCounter] = useState(value);

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    return {
        counter,
        handleSumar,
        handleRestar,
        handleReset
    }
};

export default useCounter;
