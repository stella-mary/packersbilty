import React, { useState, useCallback } from 'react';
import './LorryDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function LorryDetails() {

    const [show, setShow] = useState(true);


    return (
        <div className='LorryDetailsMain'>
            <div className='LorryDetailsHead'>LR (Lorry Receipt) Details (बिल्टी का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryDetailsForm'>
                <p className='LorryDetailsFormMain'>LR NUMBER (बिल्टी नंबर)</p>
                <input type='text'></input>
                <p className='LorryDetailsFormMain'>LR DATE (बिल्टी तारीख)</p>
                <input></input>
                <p className='LorryDetailsFormMain'>PICKUP FROM (जहां से सामान उठाना है)</p>
                <input></input>
                <p className='LorryDetailsFormMain'>DELIVERED TO (जहां सामान भेजना है)</p>
                <input></input>
                <p className='LorryDetailsFormMain'>VEHICLE NO. (गाड़ी नंबर)</p>
                <input></input>
                <p className='LorryDetailsFormMain'>RISK TYPE (किसका रिस्क है?)</p>
                <option>AT OWNER'S RISK</option>
                <option>AT CARRIER'S RISK</option>

            </div>}</p> : null}
        </div>
    )
}
