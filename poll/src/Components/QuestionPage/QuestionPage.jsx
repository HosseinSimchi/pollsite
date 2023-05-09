import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';

import './QuestionPage.css';

const QuestionPage = ({page}) => {
    const [minutes, setMinutes] = useState(JSON.parse(localStorage.getItem('minutes')) === null ? 1 : JSON.parse(localStorage.getItem('minutes')));
    const [second, setSecond] = useState(JSON.parse(localStorage.getItem('seconds')) === null ? 59 : JSON.parse(localStorage.getItem('seconds')))

    useEffect(() => {
        setTimeout(() => {
            if(second === 0 && minutes !== 0) {
                setSecond(59)
                setMinutes(0)
                localStorage.seconds = second
                localStorage.minutes = minutes
            }else if (second !== 0 && minutes === 1){
                setSecond(second-1)
                localStorage.seconds = second
                localStorage.minutes = minutes
            }else if (second !== 0 && minutes === 0){
                setSecond(second-1)
                localStorage.seconds = second
                localStorage.minutes = minutes
            }else alert("Your time is over")
        },1000)
    },[second, minutes])

    return (
        <>
            <Button  className={page === "first" ? "TimeButton" : "button-SQ"} variant={minutes === 0 ? "danger" : "success"} disabled>The remained Time = {minutes}:{second}</Button>
        </>
    )
}

export default QuestionPage;
