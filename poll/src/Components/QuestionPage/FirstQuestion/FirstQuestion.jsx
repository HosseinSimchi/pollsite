import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './FirstQuestion.css'
import {Header,QuestionPage } from '../../ImportedFiles.js'
import { Container, Button } from 'react-bootstrap';


const FirstQuestion = () => {

    const [isDisabled , setIsDisabled] = useState(true);

    const [firstQuestion, setFirstQuestion] = useState(JSON.parse(localStorage.getItem('firstQuestion')) === null ?  [] :  [JSON.parse(localStorage.getItem('firstQuestion'))[0]])
    const [secondQuestion, setSecondQuestion] = useState(JSON.parse(localStorage.getItem('secondQuestion')) === null ? [] : [JSON.parse(localStorage.getItem('secondQuestion'))[0]])
    const [thirdQuestion, setThirdQuestion] = useState(JSON.parse(localStorage.getItem('thirdQuestion')) === null ? [] : [JSON.parse(localStorage.getItem('thirdQuestion'))[0]])
    const [fourthQuestion, setFourthQuestion] = useState(JSON.parse(localStorage.getItem('fourthQuestion')) === null ? [] : [JSON.parse(localStorage.getItem('fourthQuestion'))[0]])
    const buttonOne = useRef()
    const buttonTwo = useRef()
    const buttonThree = useRef()
    const buttonFour = useRef()

    const [isSelectedOne , setIsSelectedOne] = useState(JSON.parse(localStorage.getItem('firstQuestion')) === null ? false : JSON.parse(localStorage.getItem('firstQuestion'))[0] === undefined ? false : JSON.parse(localStorage.getItem('firstQuestion'))[0].selected);
    const [isSelectedTwo , setIsSelectedTwo] = useState(JSON.parse(localStorage.getItem('secondQuestion')) === null ? false : JSON.parse(localStorage.getItem('firstQuestion'))[0] === undefined ? false : JSON.parse(localStorage.getItem('secondQuestion'))[0].selected);
    const [isSelectedThree , setIsSelectedThree] = useState(JSON.parse(localStorage.getItem('thirdQuestion')) === null ? false : JSON.parse(localStorage.getItem('firstQuestion'))[0] === undefined ? false : JSON.parse(localStorage.getItem('thirdQuestion'))[0].selected);
    const [isSelectedFour , setIsSelectedFour] = useState(JSON.parse(localStorage.getItem('fourthQuestion')) === null ? false : JSON.parse(localStorage.getItem('firstQuestion'))[0] === undefined ? false : JSON.parse(localStorage.getItem('fourthQuestion'))[0].selected);

    useEffect(() => {
        localStorage.setItem("firstQuestion", JSON.stringify(firstQuestion))
        localStorage.setItem("secondQuestion", JSON.stringify(secondQuestion))
        localStorage.setItem("thirdQuestion", JSON.stringify(thirdQuestion))
        localStorage.setItem("fourthQuestion", JSON.stringify(fourthQuestion))

    },[firstQuestion, secondQuestion, thirdQuestion, fourthQuestion])

    const nextQuestion = () => {
        setFirstQuestion([{F : buttonOne.current.innerText, selected: isSelectedOne}])
        setSecondQuestion([{S : buttonTwo.current.innerText, selected: isSelectedTwo}])
        setThirdQuestion([{T : buttonThree.current.innerText, selected:isSelectedThree}])
        setFourthQuestion([{FO : buttonFour.current.innerText, selected:isSelectedFour}])
        setIsDisabled(false)
    }

    return(
        <>
           <Header />
           <Container className="FQuestionContainer">
                
                <h3>Which one is the client side programming language? (You Can choose one or more items)</h3>
                <Button ref={buttonOne} className='button-FQ' onClick={ () => setIsSelectedOne(!isSelectedOne)} variant={isSelectedOne? "success" : "light"}>java</Button>
                <Button ref={buttonTwo} className='button-FQ' onClick={ () => setIsSelectedTwo(!isSelectedTwo)} variant={isSelectedTwo? "success" : "light"}>python</Button>
                <Button ref={buttonThree} className='button-FQ' onClick={ () => setIsSelectedThree(!isSelectedThree)} variant={isSelectedThree? "success" : "light"}>java script</Button>
                <Button ref={buttonFour} className='button-FQ' onClick={ () => setIsSelectedFour(!isSelectedFour)} variant={isSelectedFour? "success" : "light"}>java and java script</Button>
                <br /><br />
                <Button className='button-FQ'  onClick={nextQuestion} variant='info'>SUBMIT ANSWER</Button>
                <Link to={isDisabled ? '#' : "/secondquestion"} className="Link" >
                    <Button className='button-FQ' variant='warning' disabled={isDisabled}>
                                NEXT QUESTION
                    </Button>
                </Link>
                <QuestionPage page="first" />
           </Container>

        </>
    )
}

export default FirstQuestion;