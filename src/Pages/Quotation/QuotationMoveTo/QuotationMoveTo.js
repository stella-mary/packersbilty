import React, { useState, useCallback } from 'react';
import './QuotationMoveTo.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function QuotationTo() {

    const [show, setShow] = useState(false);


    return (
        <div className='QuotationToMain'>
            <div className='QuotationToHead'>Move To (जहां सामान जाना है)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationToForm'>
                <p className='QuotationToFormMain'>COUNTRY (देश)</p>
                <input type='text'></input>
                <p className='QuotationToFormMain'>CITY (शहर)</p>
                <input></input>
                <p className='QuotationToFormMain'>STATE (राज्य)</p>
                <input></input>
                <p className='QuotationToFormMain'>PINCODE(पिन कोड)</p>
                <input></input>
                <p className='QuotationToFormMain'>ADDRESS (पता)</p>
                <textarea></textarea>
                <p className='QuotationMoveFormMain'>FLOOR (मंज़िल)</p>
                <select>
                    <option value='Local'>Ground Floor</option>
                    <option value='Local'>1st</option>
                    <option value='Local'>2nd</option>
                    <option value='Local'>3rd</option>
                    <option value='Local'>4th</option>
                    <option value='Local'>5th</option>
                    <option value='Local'>6th</option>
                    <option value='Local'>7th</option>
                    <option value='Local'>Above 7th Floor</option>
                </select>
                <p className='QuotationMoveFormMain'>IS LIFT AVAILABLE(क्या लिफ्ट है?)</p>
                <select>
                    <option value='Local'>Yes</option>
                    <option value='Local'>No</option>
                </select>
            </div>}</p> : null}
        </div>

    )
}

