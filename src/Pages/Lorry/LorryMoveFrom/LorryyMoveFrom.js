import React, { useState, useCallback } from 'react';
import './LorryMoveFrom.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function LorryMoveFrom() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryMoveMain'>
            <div className='LorryMoveHead'>Move From (जहां से सामान जाएगा)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryMoveForm'>
                <p className='LorryMoveFormMain'>CONSIGNOR NAME (भेजने वाले का नाम)</p>
                <input type='text'></input>
                <p className='LorryMoveFormMain'>CONSIGNOR PHONE (भेजने वाले का फोन)</p>
                <input></input>
                <p className='LorryMoveFormMain'>GSTIN (जीएसटी नंबर)</p>
                <input></input>
                <p className='LorryMoveFormMain'>COUNTRY (देश)</p>
                <input></input>
                <p className='LorryMoveFormMain'>STATE (राज्य)</p>
                <input></input>
                <p className='LorryMoveFormMain'>CITY (शहर)</p>
                <input></input>
                <p className='LorryMoveFormMain'>ADDRESS (पता)</p>
                <textarea></textarea>
            </div>
            }</p> : null}
        </div >

    )
}

