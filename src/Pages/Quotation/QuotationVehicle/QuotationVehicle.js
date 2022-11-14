import React, { useState, useCallback } from 'react';
import './QuotationVehicle.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

export default function QuotationVehicle() {

    const [show, setShow] = useState(false);

    return (
        <div className='QuotationVehicleMain'>
            <div className='QuotationVehicleHead'>Vehicle Insurance Details (गाड़ी इन्शुरेंस जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationVehicleForm'>
                <p className='QuotationVehicleFormMain'>INSURANCE TYPE</p>
                <input type='text'></input>
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
                <p className='QuotationVehicleFormMain'>DECLARATION VALUE OF VEHICLE <small>(IF ANY)</small></p>
                <input></input>
            </div>}</p> : null}
        </div>

    )
}