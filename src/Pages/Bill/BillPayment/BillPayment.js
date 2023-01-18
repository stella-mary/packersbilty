import React, { useState, useCallback } from 'react';
import './BillPayment.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

const BillPayment = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    return (
        <div className='BillPaymentMain'>
            <div className='BillPaymentHead'>Payment Details (पेमेंट का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form>
                    <div className='BillPaymentForm'>
                        <p className='BillPaymentFormMain'>FREIGHT CHARGE</p>
                        <input
                            type="text"
                            name="fffreightCharge"
                            id="fffreightCharge"
                            value={userInfo.fffreightCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>ADVANCE PAID</p>
                        <input
                            type="text"
                            name="ffAdvancePaid"
                            id="ffAdvancePaid"
                            value={userInfo.ffAdvancePaid}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>PACKING CHARGE</p>
                        <input
                            type="text"
                            name="ffpackingCharge"
                            id="ffpackingCharge"
                            value={userInfo.ffpackingCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>UN PACKING CHARGE</p>
                        <input
                            type="text"
                            name="ffunPackingCharge"
                            id="ffunPackingCharge"
                            value={userInfo.ffunPackingCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>LOADING CHARGE</p>
                        <input
                            type="text"
                            name="ffloadingCharge"
                            id="ffloadingCharge"
                            value={userInfo.ffloadingCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>UN LOADING CHARGE</p>
                        <input
                            type="text"
                            name="ffunLoadingCharge"
                            id="ffunLoadingCharge"
                            value={userInfo.ffunLoadingCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>PACKING MATERIAL CHARGE</p>
                        <input
                            type="text"
                            name="ffpackingMaterialCharge"
                            id="ffpackingMaterialCharge"
                            value={userInfo.ffpackingMaterialCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>STORAGE CHARGE</p>
                        <input
                            type="text"
                            name="ffstorageCharge"
                            id="ffstorageCharge"
                            value={userInfo.ffstorageCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>CAR/BIKE TPT</p>
                        <input
                            type="text"
                            name="ffcarTPT"
                            id="ffcarTPT"
                            value={userInfo.ffcarTPI}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>MISCELLANEOUS CHARGES</p>
                        <input
                            type="text"
                            name="ffMiscellCharge"
                            id="ffMiscellCharge"
                            value={userInfo.ffMiscellCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>OTHER CHARGES</p>
                        <input
                            type="text"
                            name="ffotherCharge"
                            id="ffotherCharge"
                            value={userInfo.ffotherCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>S.T. CHARGE</p>
                        <input
                            type="text"
                            name="ffstCharge"
                            id="ffstCharge"
                            value={userInfo.ffstCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>OCTROI GREEN TAX</p>
                        <input
                            type="text"
                            name="ffgreenTax"
                            id="ffgreenTax"
                            value={userInfo.ffgreenTax}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>SURCHARGE</p>
                        <input
                            type="text"
                            name="ffsurCharge"
                            id="ffsurCharge"
                            value={userInfo.ffsurCharge}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>GST <small>IN QUOTE/BY BILL</small></p>
                        <input
                            type="text"
                            name="ffGSTQuote"
                            id="ffGSTQuote"
                            value={userInfo.ffGSTQuote}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>GST</p>
                        <input
                            type="text"
                            name="ffGST"
                            id="ffGST"
                            value={userInfo.ffGST}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>GST TYPE</p>
                        <input
                            type="text"
                            name="ffGSTType"
                            id="ffGSTType"
                            value={userInfo.ffGSTType}
                            onChange={handleOnChange}
                        />
                        <p className='BillPaymentFormMain'>REMARK (टिप्पणी)</p>
                        <textarea
                            name="ffRemark" required
                            id="ffRemark"
                            value={userInfo.ffRemark}
                            onChange={handleOnChange}
                        >
                        </textarea>
                        <div className='BillPaymentFormSub'>
                            <p className='BillPaymentFormDiscount'>DISCOUNT (डिस्काउंट)</p>
                            <input
                                type="text"
                                name="ffdiscount" required
                                id="ffdiscount"
                                value={userInfo.ffdiscount}
                                onChange={handleOnChange}
                            />
                            <p className='BillPaymentFormDiscount'>Applicable on Sub-Total Amount</p>
                        </div>
                        {/* <button type="submit" onClick={() => nextStep()}>Sign In</button> */}
                    </div></form>}</p> : null
            }

        </div >

    )
}

export default BillPayment
