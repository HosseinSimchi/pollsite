import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import { Container, Button, Form } from 'react-bootstrap';

import { Header, QuestionPage } from '../../ImportedFiles';
import './SecondQuestion.css'

const SecondQuestion = () => {
    const [isDisabled, setIsDisabled] = useState(true)

    const [text, setText] = useState(localStorage.getItem('textQuestion2') === undefined ? "" : JSON.parse(localStorage.getItem('textQuestion2')));

    const submitHandler = () => {
        localStorage.setItem('textQuestion2', JSON.stringify(text));
        setIsDisabled(false)
    }

    return(
        <>
            <Header />
            <Container className="SQuestionContainer">
                <h3>what is the React JS?</h3>
                <Form className='Form'>
                    <Form.Group className="mb-3 BoxName" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Explain Your Answer</Form.Label>
                        <Form.Control onChange={(event) => setText(event.target.value)} value={text} as="textarea" rows={5} />
                    </Form.Group>
                    
                    <Button variant='info' onClick={submitHandler} className="button-SQ">SUBMIT ANSWER</Button>
                    
                    <br /><br />
                    <Link to={isDisabled? "#" : "/thanks"} className='Link'>
                        <Button variant='warning' className="button-SQ" disabled={isDisabled}>FINISH</Button>
                    </Link>
                    <br />
                    <Link to="/firstquestion" className='Link'>
                        <Button variant='warning' className="button-SQ">PREVIOUS QUESTION</Button>
                    </Link>
                    <br />
                    <QuestionPage page="second" />
                </Form>
            </Container>

        </>
    )
}

export default SecondQuestion;