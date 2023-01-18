import React, { useState, useCallback } from 'react';
import './LorryCharges.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function LorryCharges() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryChargesMain'>
            <div className='LorryChargesHead'>Demurrage Charge (विलंब शुल्क)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryChargesForm'>
                <p className='LorryChargesFormMain'>DEMURRAGE CHARGE (विलंब शुल्क)</p>
                <input type='text'></input>
                <select>
                    <option>Per Day</option>
                    <option>Per Hour</option>
                </select>
                <p className='LorryChargesFormMain'>DEMURRAGE CHARGE APPLICABLE AFTER (कितने समय बाद शुरू)</p>
                <select>
                    <option>1 Hour</option>
                    <option>2 Hour</option>
                    <option>4 Hour</option>
                    <option>8 Hour</option>
                    <option>12 Hour</option>
                    <option>1 Day</option>
                    <option>2 Day</option>
                    <option>3 Day</option>
                    <option>4 Day</option>
                    <option>More Than 5 Day</option>
                </select>
            </div>}</p> : null}
        </div>
    )
}
