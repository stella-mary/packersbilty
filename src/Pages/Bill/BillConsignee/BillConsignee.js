import React, { useState, useCallback } from 'react';
import './BillConsignee.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const BillConsignee = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillConsigneeMain'>
            <div className='BillConsigneeHead'>Consignee Details (सामान लेने वाले का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillConsigneeForm'>
                <p className='BillConsigneeFormMain'>CONSIGNEE NAME (सामान लेने वाले का नाम)</p>
                <input
                    type="text"
                    name="billConsigneeName" required
                    id="billConsigneeName"
                    value={userInfo.billConsigneeName}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>CONSIGNEE PHONE (भेजने वाले का फोन)</p>
                <input
                    type="text"
                    name="billConsigneePhone" required
                    id="billConsigneePhone"
                    value={userInfo.billConsigneeName}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>GSTIN (जीएसटी नंबर)</p>
                <input
                    type="text"
                    name="ffbillGSTIn" required
                    id="ffbillGSTIn"
                    value={userInfo.ffbillGSTIn}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>COUNTRY (देश)</p>
                <input
                    type="text"
                    name="ffbillCountry" required
                    id="ffbillCountry"
                    value={userInfo.ffbillCountry}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>STATE (राज्य)</p>
                <input
                    type="text"
                    name="ffbillstate" required
                    id="ffbillstate"
                    value={userInfo.ffbillstate}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>CITY (शहर)</p>
                <input
                    type="text"
                    name="ffbillCity" required
                    id="ffbillCity"
                    value={userInfo.ffbillCity}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>PINCODE (राज्य)</p>
                <input
                    type="text"
                    name="ffbillPincode" required
                    id="ffbillPincode"
                    value={userInfo.ffbillPincode}
                    onChange={handleOnChange}
                />
                <p className='BillConsigneeFormMain'>ADDRESS (पता)</p>
                <textarea
                    type="text"
                    name="ffbillAddress" required
                    id="ffbillAddress"
                    value={userInfo.ffbillAddress}
                    onChange={handleOnChange}
                />
            </div>
            }</p> : null}
        </div >

    )
}


export default BillConsignee