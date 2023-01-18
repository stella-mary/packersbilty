import React, { useState, useCallback } from 'react';
import './LorryMoveTo.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function LorryMoveTo() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryToMain'>
            <div className='LorryToHead'>Move From (जहां से सामान जाएगा)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryToForm'>
                <p className='LorryToFormMain'>CONSIGNOR NAME (भेजने वाले का नाम)</p>
                <input type='text'></input>
                <p className='LorryToFormMain'>CONSIGNOR PHONE (भेजने वाले का फोन)</p>
                <input></input>
                <p className='LorryToFormMain'>GSTIN (जीएसटी नंबर)</p>
                <input></input>
                <p className='LorryToFormMain'>COUNTRY (देश)</p>
                <input></input>
                <p className='LorryToFormMain'>STATE (राज्य)</p>
                <input></input>
                <p className='LorryToFormMain'>CITY (शहर)</p>
                <input></input>
                <p className='LorryToFormMain'>ADDRESS (पता)</p>
                <textarea></textarea>
            </div>
            }</p> : null}
        </div >

    )
}

