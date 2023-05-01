import React,{useEffect, useState} from 'react';

import './Form.css';
import {Button, Form, Container} from 'react-bootstrap';

const FormInfo = () => {
    
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    const submitHandler = () => {
        setData([...data, {Name:name, Family:family, Email:email}])
    }

    return (
        <>
            <Container className="FromContainer">
                <Form className='Form'>

                    <Form.Group className="mb-3 BoxName">
                        <Form.Label>Name </Form.Label>
                        <Form.Control onChange={event => setName(event.target.value)} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3 BoxName" >
                        <Form.Label>Family </Form.Label>
                        <Form.Control onChange={event => setFamily(event.target.value)} type="text" placeholder="Enter your Family" />
                    </Form.Group>
                    <Form.Group className="mb-3 BoxName" >
                        <Form.Label>Email </Form.Label>
                        <Form.Control onChange={event => setEmail(event.target.value)} type="text" placeholder="Enter your Email" />
                    </Form.Group>

                    <Button onClick = {submitHandler} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default FormInfo;