import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {

    const [counter, setCounter] = useState(10);

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(10)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button variant="warning" onClick={handleSumar}>Sumar</Button>
            <Button variant="danger" onClick={handleReset}>Reset</Button>
            <Button variant="warning" onClick={handleRestar}>Restar</Button>
        </div>
    );
};

export default Counter;
