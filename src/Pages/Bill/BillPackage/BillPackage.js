import React, { useState, useCallback } from 'react';
import './BillPackage.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const BillPackage = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillPackageMain'>
            <div className='BillPackageHead'>Package Details (पैकेज का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='BillPackageForm'>
                <p className='BillPackageFormMain'>PACKAGE (पैकेज)</p>
                <input
                    type="text"
                    name="billpackage" required
                    id="billpackage"
                    value={userInfo.billpackage}
                    onChange={handleOnChange}
                />
                <p className='QuotationInsuranceFormMain'>DESCRIPTION (पैकेज का विवरण)</p>
                <input
                    type="text"
                    name="billdescription" required
                    id="billdescription"
                    value={userInfo.billdescription}
                    onChange={handleOnChange}
                />
                <p className='QuotationInsuranceFormMain'>TOTAL WEIGHT (कुल वजन)</p>
                <input
                    type="text"
                    name="billweight" required
                    id="billweight"
                    value={userInfo.billweight}
                    onChange={handleOnChange}
                />
                <select>
                    <option>KG</option>
                    <option>MT</option>
                    <option>LTR</option>
                </select>
                <p className='QuotationInsuranceFormMain'>REMARK (टिप्पणी)</p>
                <textarea

                    name="billremark" required
                    id="billremark"
                    value={userInfo.billremark}
                    onChange={handleOnChange}
                />
            </div>}</p> : null}
        </div>

    )
}

export default BillPackage