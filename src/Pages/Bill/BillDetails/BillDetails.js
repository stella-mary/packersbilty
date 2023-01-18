import React, { useState, useCallback } from 'react';
import './BillDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const BillDetails = ({ userInfo, handleOnChange, }) => {


    const [show, setShow] = useState(true);

    return (
        <div className='BillDetailsMain'>
            <div className='BillDetailsHead'>Bill Details (बिल का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillDetailsForm'>
                <p className='BillDetailsFormMain'>INVOICE NUMBER* (बिल नंबर)</p>
                <input
                    type="text"
                    name="billNumber" required
                    id="billNumber"
                    value={userInfo.billNumber}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>COMPANY NAME OF PARTY (कंपनी नाम - जिसे कोटेशन चाहिए)</p>
                <input
                    type="text"
                    name="billPartyName" required
                    id="billPartyName"
                    value={userInfo.billPartyName}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>LR NUMBER (बिल्टी नंबर)</p>
                <input
                    type="text"
                    name="billLRNumber" required
                    id="billLRNumber"
                    value={userInfo.billLRNumber}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>TYPE OF SHIPMENT (शिपमेंट का प्रकार)</p>
                <input
                    type="text"
                    name="billShipment" required
                    id="billShipment"
                    value={userInfo.billShipment}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>INVOICE DATE (बिल की तारीख)</p>
                <input
                    type="date"
                    name="billInvoiceDate" required
                    id="billInvoiceDate"
                    value={userInfo.billInvoiceDate}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>DELIVERY DATE (सामान मिलने की तारीख)</p>
                <input
                    type="date"
                    name="billDeliveryDate" required
                    id="billDeliveryDate"
                    value={userInfo.billDeliveryDate}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>MODE OF MOVING (भेजने का माध्यम)</p>
                <input
                    type="text"
                    name="billMoving" required
                    id="billMoving"
                    value={userInfo.billMoving}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>MOVE FROM (जहां से सामान जाएगा)</p>
                <inputi
                    type="text"
                    name="billMoveFrom" required
                    id="billMoveFrom"
                    value={userInfo.billMoveFrom}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>MOVE TO (जहां सामान जाना है)</p>
                <input
                    type="text"
                    name="billMoveTo" required
                    id="billMoveTo"
                    value={userInfo.billMoveTo}
                    onChange={handleOnChange}
                />
                <p className='BillDetailsFormMain'>VEHICLE NUMBER (गाड़ी नंबर)</p>
                <input
                    type="text"
                    name="billVehicle" required
                    id="billVehicle"
                    value={userInfo.billVehicle}
                    onChange={handleOnChange}
                />
            </div>
            }</p> : null}
        </div >

    )
}

export default BillDetails

