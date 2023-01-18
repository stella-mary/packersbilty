import React, { useState, useCallback } from 'react';
import './BillBilling.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const BillBilling = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillBillingMain'>
            <div className='BillBillingHead'>Bill Details (बिल का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillBillingForm'>
                <p className='BillBillingFormMain'>BILL TO NAME* (बिल प्राप्तकर्ता का नाम)</p>
                <input
                    type="text"
                    name="billName" required
                    id="billName"
                    value={userInfo.billName}
                    onChange={handleOnChange}
                />
                <p className='BillBillingFormMain'>BILL TO PHONE* (बिल प्राप्तकर्ता का फोन)</p>
                <input
                    type="text"
                    name="billPhone" required
                    id="billPhone"
                    value={userInfo.billPhone}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>GSTIN (जीएसटी नंबर)</p>
                <input
                    type="text"
                    name="billGST" required
                    id="billGST"
                    value={userInfo.billGST}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>COUNTRY (देश)</p>
                <input
                    type="text"
                    name="billCountry" required
                    id="billCountry"
                    value={userInfo.billName}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>STATE (राज्य)</p>
                <input
                    type="text"
                    name="billState" required
                    id="billState"
                    value={userInfo.billState}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>CITY (शहर)</p>
                <input
                    type="text"
                    name="billCity" required
                    id="billCity"
                    value={userInfo.billCity}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>PINCODE (पिन कोड)</p>
                <input
                    type="text"
                    name="billPincode" required
                    id="billPincode"
                    value={userInfo.billPincode}
                    onChange={handleOnChange}
                />

                <p className='BillBillingFormMain'>ADDRESS (पता)</p>
                <textarea
                    type="text"
                    name="billAddress" required
                    id="billAddress"
                    value={userInfo.billAddress}
                    onChange={handleOnChange}
                />

            </div>
            }</p> : null}
        </div >

    )
}

export default BillBilling
