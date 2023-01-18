import React, { useState, useCallback } from 'react';
import './MoneyDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

const MoneyDetails = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);


    return (
        <div className='MoneyDetailsMain'>
            <div className='MoneyDetailsHead'>Money List Details (सामान का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='MoneyDetailsForm'>
                <p className='MoneyDetailsFormMain'>RECEIPT NUMBER* (बिल नंबर)</p>
                <input
                    type="text"
                    name="MoneyNumber" required
                    id="MoneyNumber"
                    value={userInfo.MoneyNumber}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>RECEIPT DATE (तारीख)</p>
                <input
                    type="date"
                    name="MoneyReceiptDate" required
                    id="MoneyReceiptDate"
                    value={userInfo.MoneyReceiptDate}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>BRANCH (ब्रांच)</p>
                <input
                    type="text"
                    name="MoneyBranch" required
                    id="MoneyBranch"
                    value={userInfo.MoneyBranch}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>NAME* (नाम)</p>
                <input
                    type="text"
                    name="MoneyName" required
                    id="MoneyName"
                    value={userInfo.MoneyName}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>PHONE* (फोन)</p>
                <input
                    type="text"
                    name="MoneyPhone" required
                    id="MoneyPhone"
                    value={userInfo.MoneyPhone}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>RECEIPT AGAINST DOC (डॉकयुमेंट के साथ रसीद)</p>
                <input
                    type="text"
                    name="MoneyAgainstDoc" required
                    id="MoneyAgainstDoc"
                    value={userInfo.MoneyAgainstDoc}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>BILL/QUOTATION DATE (तारीख)</p>
                <input
                    type="date"
                    name="MoneyBillDate" required
                    id="MoneyBillDate"
                    value={userInfo.MoneyBillDate}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>MOVE FROM (जहां से सामान जाएगा)</p>
                <input
                    type="text"
                    name="MoneyMoveFrom" required
                    id="MoneyMoveFrom"
                    value={userInfo.MoneyMoveFrom}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>MOVE TO (जहां सामान जाना है)</p>
                <input
                    type="text"
                    name="MoneyMoveTo" required
                    id="MoneyMoveTo"
                    value={userInfo.MoneyMoveTo}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>PAYMENT TYPE (पेमेंट का प्रकार)</p>
                <select
                    type="text"
                    name="MoneyPayment" required
                    id="MoneyPayment"
                    value={userInfo.MoneyPayment}
                    onChange={handleOnChange}
                >
                    <option>Advance</option>
                    <option>Part</option>
                    <option>Final Payment</option>
                </select>
                <p className='MoneyDetailsFormMain'>RECEIPT AMOUNT* (रसीद की रकम)</p>
                <input
                    type="text"
                    name="MoneyReceiptAmount" required
                    id="MoneyReceiptAmount"
                    value={userInfo.MoneyReceiptAmount}
                    onChange={handleOnChange}
                />

                <p className='MoneyDetailsFormMain'>PAYMENT MODE (भुगतान का प्रकार)</p>
                <select
                    type="text"
                    name="MoneyPaymentMode" required
                    id="MoneyPaymentMode"
                    value={userInfo.MoneyPaymentMode}
                    onChange={handleOnChange}
                >

                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>Draft</option>
                    <option>Net Banking</option>
                    <option>UPI</option>
                    <option>Digital Wallet</option>
                </select>
                <text type='text' placeholder="Number"></text>
                <p className='MoneyDetailsFormMain'>REMARK (टिप्पणी)</p>
                <textarea
                    name="MoneyRemark" required
                    id="MoneyRemark"
                    value={userInfo.MoneyRemark}
                    onChange={handleOnChange}
                />

            </div>}</p> : null}
        </div>
    )
}

export default MoneyDetails