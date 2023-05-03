import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';

const Countdown = () => {
    const [minutes, setMinutes] = useState(1);
    const [second, setSecond] = useState(59)

    useEffect(() => {
        setSecond(58)
    },[])

    useEffect(() => {
        setTimeout(() => {
            if(second === 0 && minutes !== 0) {
                setSecond(59)
                setMinutes(0)
            }else if (second !== 0 && minutes === 1){
                setSecond(second-1)
            }else if (second !== 0 && minutes === 0){
                setSecond(second-1)
            }else alert("Your time is over")
        },1000)
    },[second, minutes])

    return (
        <>
            <Button variant={minutes === 0 ? "danger" : "success"} disabled>{minutes}</Button>{' : '}
            <Button variant={minutes === 0 ? "danger" : "success"} disabled>{second}</Button>{' '}
        </>
    )
}

export default Countdown;
