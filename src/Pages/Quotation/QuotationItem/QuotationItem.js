import React, { useState, useCallback } from 'react';
import './QuotationItem.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function QuotationItem() {

    const [show, setShow] = useState(false);

    return (
        <div className='QuotationItemMain'>
            <div className='QuotationItemHead'>Item / Particulars Details (सामान का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationItemForm'>
                <p className='QuotationItemFormMain'>ITEM / PARTICULARS NAME (सामान का नाम)</p>
                <input type='text'></input>
                <p className='QuotationItemFormMain'>QUANTITY (संख्या)</p>
                <input></input>
                <p className='QuotationItemFormMain'>VALUE (कीमत) (IN RUPEES)</p>
                <input></input>
                <p className='QuotationItemFormMain'>REMARK (अन्य विवरण)</p>
                <input></input>
                <button>ADD ITEM/PARTICULARS</button>
            </div>}</p> : null}
        </div >

    )
}