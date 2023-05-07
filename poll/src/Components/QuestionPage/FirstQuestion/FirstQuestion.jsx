import React, {useState, useRef, useEffect} from 'react';

import {Header} from '../../ImportedFiles.js'
import { Container, Button } from 'react-bootstrap';

import './FirstQuestion.css'

const FirstQuestion = () => {

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
    }

    return(
        <>
           <Header />
           <Container className="FQuestionContainer">
                
                <h3>Which one is the client side programming language?</h3>
                <Button ref={buttonOne} onClick={ () => setIsSelectedOne(!isSelectedOne)} variant={isSelectedOne? "success" : "light"}>java</Button>
                <Button ref={buttonTwo} onClick={ () => setIsSelectedTwo(!isSelectedTwo)} variant={isSelectedTwo? "success" : "light"}>python</Button>
                <Button ref={buttonThree} onClick={ () => setIsSelectedThree(!isSelectedThree)} variant={isSelectedThree? "success" : "light"}>java script</Button>
                <Button ref={buttonFour} onClick={ () => setIsSelectedFour(!isSelectedFour)} variant={isSelectedFour? "success" : "light"}>java and java script</Button>
                <br /><br />
                <Button onClick={nextQuestion} variant='info'>NEXT</Button>
           </Container>

        </>
    )
}

export default FirstQuestion;