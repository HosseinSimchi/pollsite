import React, {useState} from 'react';

import {Container } from 'react-bootstrap';
import {Header} from '../ImportedFiles.js'

import './Thanks.css'

const Thanks = () => {
    const personalInfo = useState(JSON.parse(localStorage.getItem('data')))
    const firstSelected = useState(JSON.parse(localStorage.getItem('firstQuestion')))
    const secondSelected = useState(JSON.parse(localStorage.getItem('secondQuestion')))
    const thirdSelected = useState(JSON.parse(localStorage.getItem('thirdQuestion')))
    const fourthSelected = useState(JSON.parse(localStorage.getItem('fourthQuestion')))
    const secondQuestion = useState(JSON.parse(localStorage.getItem('textQuestion2')))
    
    return (
        <>  
            <Header />
            <Container className="ThanksPage">
                <h3>Thank You for your submission Mr/Mss {personalInfo[0][0].Name} {personalInfo[0][0].Family}</h3>
                <ul>
                        <h5>Your first response to the first question :</h5>
                        {firstSelected[0][0].selected ? <li>{firstSelected[0][0].F}</li> : null}
                        {secondSelected[0][0].selected ? <li>{secondSelected[0][0].S}</li> : null}
                        {thirdSelected[0][0].selected ? <li>{thirdSelected[0][0].T}</li> : null}
                        {fourthSelected[0][0].selected ? <li>{fourthSelected[0][0].FO}</li> : null}
                        <h5>Your response to the Second question :</h5>
                        <li>{secondQuestion}</li>
                </ul>
            </Container>
        </>
    )
}

export default Thanks;