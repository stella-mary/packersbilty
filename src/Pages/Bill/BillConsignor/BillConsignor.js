import React, { useState, useCallback } from 'react';
import './BillConsignor.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const BillConsignor = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillConsignorMain'>
            <div className='BillConsignorHead'>Consignor Details (सामान भेजने वाले का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillConsignorForm'>
                <p className='BillConsignorFormMain'>CONSIGNOR NAME (भेजने वाले का नाम)</p>
                <input
                    type="text"
                    name="billConsignoreName" required
                    id="billConsignoreName"
                    value={userInfo.billConsignoreName}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>CONSIGNOR PHONE (भेजने वाले का फोन)</p>
                <input
                    type="text"
                    name="billConsignorePhone" required
                    id="billConsignorePhone"
                    value={userInfo.billConsignorePhone}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>GSTIN (जीएसटी नंबर)</p>
                <input
                    type="text"
                    name="billGSTIn" required
                    id="billGSTIn"
                    value={userInfo.billGSTIn}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>COUNTRY (देश)</p>
                <input
                    type="text"
                    name="fbillCountry" required
                    id="fbillCountry"
                    value={userInfo.fbillCountry}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>STATE (राज्य)</p>
                <input
                    type="text"
                    name="fbillState" required
                    id="fbillState"
                    value={userInfo.fbillState}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>CITY (शहर)</p>
                <input
                    type="text"
                    name="fbillCity" required
                    id="fbillCity"
                    value={userInfo.fbillCity}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>PINCODE (पिन कोड)</p>
                <input
                    type="text"
                    name="fbillPincode" required
                    id="fbillPincode"
                    value={userInfo.fbillPincode}
                    onChange={handleOnChange}
                />
                <p className='BillConsignorFormMain'>ADDRESS (पता)</p>
                <textarea
                    type="text"
                    name="fbillAddress" required
                    id="fbillAddress"
                    value={userInfo.fbillAddress}
                    onChange={handleOnChange}
                />
            </div>
            }</p> : null}
        </div >

    )

}

export default BillConsignor
