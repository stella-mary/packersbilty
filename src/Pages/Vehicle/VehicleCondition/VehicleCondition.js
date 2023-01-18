import React, { useState, useCallback } from 'react';
import './VehicleCondition.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function VehicleCondition() {

    const [show, setShow] = useState(true);

    return (
        <div className='VehicleConditionMain'>
            <div className='VehicleConditionHead'>Vehicle Condition Details (वाहन की स्थिति का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='VehicleConditionForm'>
                <p className='VehicleConditionFormMain'>VEHICLE CONDITION NUMBER</p>
                <input></input>
                <p className='VehicleConditionFormMain'>PARTY NAME* (व्यक्ति नाम - जिसे कोटेशन चाहिए)</p>
                <input></input>
                <p className='VehicleConditionFormMain'>PARTY PHONE (फोन)</p>
                <input></input>
                <p className='VehicleConditionFormMain'>EMAIL (ईमेल)</p>
                <input></input>
                <p className='VehicleConditionFormMain'>DATE (तारीख)</p>
                <input type='date'></input>
                <p className='VehicleConditionFormMain'>MOVE FROM ADDRESS</p>
                <input></input>
                <p className='VehicleConditionFormMain'>MOVE TO ADDRESS</p>
                <input></input>
            </div>}</p> : null}
        </div>
    )
}
