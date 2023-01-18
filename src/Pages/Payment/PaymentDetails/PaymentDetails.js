import React, { useState, useCallback } from 'react';
import './PaymentDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const PaymentDetails = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='PaymentDetailsMain'>
            <div className='PaymentDetailsHead'>Payment Voucher Details (भुगतान वाउचर का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='PaymentDetailsForm'>
                <p className='PaymentDetailsFormMain'>VOUCHER NUMBER* (वाउचर नंबर)</p>
                <input
                    type="text"
                    name="PaymentVoucherNumber" required
                    id="PaymentVoucherNumber"
                    value={userInfo.PaymentVoucherNumber}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>VOUCHER DATE (तारीख)</p>
                <input
                    type="text"
                    name="PaymentVoucherDate" required
                    id="PaymentVoucherDate"
                    value={userInfo.PaymentVoucherDate}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>RECEIVER NAME* (नाम) - (PAID TO NAME)</p>
                <input
                    type="text"
                    name="PaymentRecevierName"
                    id="PaymentRecevierName"
                    value={userInfo.PaymentReceiverName}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>RECEIVER PHONE* (फोन) - (PAID TO PHONE)</p>
                <input
                    type="text"
                    name="PaymentReceiverPhone" required
                    id="PaymentReceiverPhone"
                    value={userInfo.PaymentReceiverPhone}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>PAYMENT TYPE (पेमेंट का प्रकार)</p>
                <input
                    type="text"
                    name="PaymentType" required
                    id="PaymentType"
                    value={userInfo.PaymentType}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>VOUCHER AMOUNT* (वाउचर की रकम)</p>
                <input
                    type="text"
                    name="PaymentVoucherAmount"
                    id="PaymentVoucherAmount"
                    value={userInfo.PaymentVoucherAmount}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>PAYMENT MODE (भुगतान का प्रकार)</p>
                <input
                    type="text"
                    name="PaymentMode" required
                    id="PaymentMode"
                    value={userInfo.PaymentMode}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>PAY FOR (के लिए भुगतान) (ON ACCOUNT OF)</p>
                <input
                    type="text"
                    name="PaymentAccount" required
                    id="PaymentAccount"
                    value={userInfo.PaymentAccount}
                    onChange={handleOnChange}
                />
                <p className='PaymentDetailsFormMain'>(Ex: Driver, Plumber, Material)</p>
                <p className='PaymentDetailsFormMain'>REMARK (टिप्पणी)</p>
                <textarea
                    name="PaymentRemark" required
                    id="PaymentRemark"
                    value={userInfo.PaymentRemark}
                    onChange={handleOnChange}
                />
            </div>}</p> : null}
        </div>
    )
}

export default PaymentDetails