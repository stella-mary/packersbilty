import React, { useState, useCallback } from 'react';
import './QuotationInsurance.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

export default function QuotationInsurance() {

    const [show, setShow] = useState(false);

    return (
        <div className='QuotationInsuranceMain'>
            <div className='QuotationInsuranceHead'>Insurance Details (इन्शुरेंस जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationInsuranceForm'>
                <p className='QuotationInsuranceFormMain'>INSURANCE TYPE</p>
                <select>
                    <option value='Local'>Optional</option>
                    <option value='Local'>Addition from Freight</option>
                    <option value='Local'>Included in Freight</option>
                </select>
                <p className='QuotationInsuranceFormMain'>INSURANCE CHARGE @PERCENT (%)</p>
                <select>
                    <option value='Local'>0.5%</option>
                    <option value='Local'>1%</option>
                    <option value='Local'>1.5%</option>
                    <option value='Local'>2%</option>
                    <option value='Local'>2.5%</option>
                    <option value='Local'>3%</option>
                    <option value='Local'>3.5%</option>
                    <option value='Local'>4%</option>
                    <option value='Local'>4.5%</option>
                    <option value='Local'>5%</option>
                    <option value='Local'>5.5%</option>
                    <option value='Local'>6%</option>
                    <option value='Local'>6.5%</option>
                    <option value='Local'>7%</option>
                    <option value='Local'>7.5%</option>
                    <option value='Local'>8%</option>
                    <option value='Local'>8.5%</option>
                    <option value='Local'>9%</option>
                    <option value='Local'>9.5%</option>
                </select>
                <p className='QuotationInsuranceFormMain'>GST %</p>
                <select>
                    <option value='Local'>0</option>
                    <option value='Local'>5</option>
                    <option value='Local'>12</option>
                    <option value='Local'>18</option>
                    <option value='Local'>28</option>
                </select>
                <p className='QuotationInsuranceFormMain'>DECLARATION VALUE OF GOODS <small>(IF ANY)</small></p>
                <input></input>
            </div>}</p> : null}
        </div>

    )
}