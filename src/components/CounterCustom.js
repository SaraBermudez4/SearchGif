import React from "react";
import { Button } from "react-bootstrap";
import useCounter from "../hooks/useCounter";

const CounterCustom = () => {

    const { counter, handleRestar, handleSumar, handleReset } = useCounter(0)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button variant="warning" onClick={handleSumar}>Sumar</Button>
            <Button variant="danger" onClick={handleReset}>Reset</Button>
            <Button variant="warning" onClick={handleRestar}>Restar</Button>
        </div>
    );
};

export default CounterCustom;
