import React,{useEffect, useState} from 'react';

import './Form.css';

import {Container,Button, Form} from 'react-bootstrap';
import { BasicModal} from '../ImportedFiles';

const FormInfo = () => {
    
    const [isModalActive, setIsModalActive] = useState(false);
    const [data, setData] = useState([])
    const [name, setName] = useState(localStorage.getItem('name') || '')
    const [family, setFamily] = useState(localStorage.getItem('family') || '')
    const [email, setEmail] = useState(localStorage.getItem('email') || '')

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    const submitHandler = () => {
        setData([...data, {Name:name, Family:family, Email:email}])
        setIsModalActive(true)
    }
    
    return (
        <>
            <Container className="FromContainer">
                {isModalActive? <BasicModal /> : (
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
                )}
            </Container>
        </>
    )
}

export default FormInfo;