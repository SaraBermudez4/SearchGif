import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        email: '',
    });

    const { nombre, email } = data

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleInputChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value,
        })
    }

    useEffect(() => {
        //Montaje
        console.log(`Hola ${nombre}`);
        return () => {
            console.log(`Adios ${nombre}`);
        }
    }, [nombre]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name='nombre' value={nombre} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" name='email' value={email} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Formulario;
