import React, { useState, useCallback } from 'react';
import './LorryInsurance.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function LorryInsurance() {

    const [show, setShow] = useState(true);

    return (
        <div className='LorryInsuranceMain'>
            <div className='LorryInsuranceHead'>Material Insurance (सामान का बीमा)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='LorryInsuranceForm'>
                <p className='LorryInsuranceFormMain'>MATERIAL INSURANCE (क्या सामान का बीमा है?)</p>
                <select>
                    <option>Insured</option>
                    <option>Not Insured</option>
                </select>
                <p className='LorryInsuranceFormMain'>INSURANCE COMPANY (बीमा कंपनी)</p>
                <input></input>
                <p className='LorryInsuranceFormMain'>POLICY NUMBER (बीमा पॉलिसी नंबर)</p>
                <input></input>
                <p className='LorryInsuranceFormMain'>INSURANCE DATE (बीमा तारीख)</p>
                <input type="date"></input>
                <p className='LorryInsuranceFormMain'>INSURED AMOUNT (बीमा राशि)</p>
                <textarea></textarea>
                <p className='LorryInsuranceFormMain'>INSURANCE RISK (बीमा जोखिम)</p>
                <textarea></textarea>
            </div>}</p> : null}
        </div>
    )
}
