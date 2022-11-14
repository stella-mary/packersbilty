import React, { useState, useCallback } from 'react';
import './QuotationPayment.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

export default function QuotationPayment() {

    const [show, setShow] = useState(false);

    return (
        <div className='QuotationPaymentMain'>
            <div className='QuotationPaymentHead'>Payment Details (पेमेंट का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationPaymentForm'>
                <p className='QuotationPaymentFormMain'>FREIGHT CHARGE</p>
                <input type='text'></input>
                <p className='QuotationPaymentFormMain'>ADVANCE PAID</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>PACKING CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>UN PACKING CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>LOADING CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>UN LOADING CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>PACKING MATERIAL CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>STORAGE CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>CAR/BIKE TPT</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>MISCELLANEOUS CHARGES</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>OTHER CHARGES</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>S.T. CHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>OCTROI GREEN TAX</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>OCTROI GREEN TAX</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>SURCHARGE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>GST <small>IN QUOTE/BY BILL</small></p>
                <input></input>
                <p className='QuotationPaymentFormMain'>GST</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>GST TYPE</p>
                <input></input>
                <p className='QuotationPaymentFormMain'>REMARK (टिप्पणी)</p>
                <textarea></textarea>
                <p className='QuotationPaymentFormMain'>DISCOUNT (डिस्काउंट)</p>
                <input></input>
                <p className='QuotationPaymentFormMaim'>Applicable on Sub-Total Amount</p>
            </div>}</p> : null}
        </div>
    )
}
