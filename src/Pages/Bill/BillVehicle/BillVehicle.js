import React, { useState, useCallback } from 'react';
import './BillVehicle.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

const BillInsurance = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillInsuranceMain'>
            <div className='BillInsuranceHead'>Insurance Details (इन्शुरेंस जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillInsuranceForm'>
                <p className='BillInsuranceFormMain'>INSURANCE TYPE</p>
                <select
                    name="fffinsuranceType" required
                    id="fffinsuranceType"
                    value={userInfo.fffinsuranceType}
                    onChange={handleOnChange}
                >
                    <option value='Local'>Optional</option>
                    <option value='Local'>Addition from Freight</option>
                    <option value='Local'>Included in Freight</option>
                </select>
                <p className='BillInsuranceFormMain'>INSURANCE CHARGE @PERCENT (%)</p>
                <select
                    name="fffinsuranceCharge" required
                    id="fffinsuranceCharge"
                    value={userInfo.fffinsuranceCharge}
                    onChange={handleOnChange}
                >
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
                <p className='BillInsuranceFormMain'>GST %</p>
                <select
                    name="fffGST" required
                    id="fffGST"
                    value={userInfo.fffGST}
                    onChange={handleOnChange}
                >
                    <option value='Local'>0</option>
                    <option value='Local'>5</option>
                    <option value='Local'>12</option>
                    <option value='Local'>18</option>
                    <option value='Local'>28</option>
                </select>
                <p className='BillInsuranceFormMain'>DECLARATION VALUE OF GOODS <small>(IF ANY)</small></p>
                <text type="text"
                    name="fffdeclaration" required
                    id="fffdeclaration"
                    value={userInfo.fffdeclaration}
                    onChange={handleOnChange}
                >
                </text>
            </div>}</p> : null}
        </div>

    )
}

export default BillInsurance