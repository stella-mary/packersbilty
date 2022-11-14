import React, { useState, useCallback } from 'react';
import './QuotationDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

export default function QuotationDetails() {

    const [show, setShow] = useState(false);


    return (
        <div className='QuotationDetailsMain'>
            <div className='QuotationDetailsHead'>Quotation Details (कोटेशन का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationDetailsForm'>
                <p className='QuotationDetailsFormMain'>QUOTATION NUMBER (कोटेशन नंबर)</p>
                <input type='text'></input>
                <p className='QuotationDetailsFormMain'>MOVING TYPE (मुविंग के प्रकार)</p>
                <select>
                    <option value='Local'>Local</option>
                    <option value='Domestic'>Domestic</option>
                    <option value='International'>International</option>
                    <option value='House Hold Goods'>House Hold Goods</option>
                    <option value='Office Shifting'>Office Shifting</option>
                    <option value='Vehicle Shifting'>Vehicle Shifting</option>
                    <option value='Industrial Office Shifting'>Industrial Office Shifting</option>
                </select>
                <p className='QuotationDetailsFormMain'>COMPANY NAME OF PARTY (कंपनी नाम - जिसे कोटेशन चाहिए) (कोटेशन नंबर)</p>
                <input></input>
                <p className='QuotationDetailsFormMain'>PARTY NAME* (व्यक्ति नाम - जिसे कोटेशन चाहिए)</p>
                <input></input>
                <p className='QuotationDetailsFormMain'>PARTY PHONE (फोन)</p>
                <input></input>
                <p className='QuotationDetailsFormMain'>EMAIL (ईमेल)</p>
                <input></input>
                <p className='QuotationDetailsFormMain'>DATE (तारीख)</p>
                <input type='date' />
                <p className='QuotationDetailsFormMain'>PACKING DATE</p>
                <input type='date' />
                <p className='QuotationDetailsFormMain'>DELIVERY DATE</p>
                <input type='date' />
            </div>}</p> : null}
        </div>





    )
}
