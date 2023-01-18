import React, { useState, useCallback } from 'react';
import './LorryPackage.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function LorryPackage() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryPackageMain'>
            <div className='LorryPackageHead'>Package Details (पैकेज का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryPackageForm'>
                <p className='LorryPackageFormMain'>PACKAGE (पैकेज)</p>
                <input></input>
                <p className='LorryPackageFormMain'>DESCRIPTION (पैकेज का विवरण)</p>
                <input></input>
                <p className='LorryPackageFormMain'>TOTAL WEIGHT (कुल वजन)</p>
                <select>
                    <option>KG</option>
                    <option>MT</option>
                    <option>LTR</option>
                    <option>CBM</option>
                    <option>CFT</option>
                </select>
                <p className='LorryPackageFormMain'>RECEIVE PACKAGE CONDITION (प्रपात माल की स्थिति)</p>
                <input></input>
                <p className='LorryPackageFormMain'>REMARK (अन्य विवरण)</p>
                <textarea></textarea>
            </div>}</p> : null}
        </div>
    )
}
