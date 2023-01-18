import React, { useState, useCallback } from 'react';
import './LorryPayment.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function LorryPayment() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryPaymentMain'>
            <div className='LorryPaymentHead'>Payment Details (पैकेज का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryPaymentForm'>
                <p className='LorryPaymentFormMain'>FREIGHT TO BE BILLED (कुल भाड़ा)</p>
                <input type='text'></input>
                <p className='LorryPaymentFormMain'>FREIGHT PAID (प्राप्त भाड़ा)</p>
                <input></input>
                <p className='LorryPaymentFormMain'>FREIGHT TO PAY (बकाया भाड़ा)</p>
                <input></input>
            </div>}</p> : null}
        </div>
    )
}
