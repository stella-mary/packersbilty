import React, { useState, useCallback } from 'react';
import './QuotationPayment.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const QuotationPayment = ({ quotationInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className='QuotationPaymentMain'>
            <div className='QuotationPaymentHead'>Payment Details (पेमेंट का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form className='QuotationPaymentForm'>
                    <Box className='QuotationBox'>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>

                                <p className='QuotationPaymentFormMain'>FREIGHT CHARGE</p>
                                <input
                                    type="text"
                                    name="quotationfreightCharge"
                                    id="freightCharge"
                                    value={quotationInfo.quotationfreightCharge}
                                    onChange={handleOnChange}
                                    placeholder={0}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>ADVANCE PAID</p>
                                <input
                                    type="text"
                                    name="quotationAdvancePaid"
                                    id="AdvancePaid"
                                    value={quotationInfo.quotationAdvancePaid}
                                    onChange={handleOnChange}
                                    placeholder={0}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p></p>

                            </Grid>
                            <Grid item xs={6}>

                                <p className='QuotationPaymentFormMain'>PACKING CHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="Included in Freight"
                                    >
                                        <option value='1'>Included in Freight</option>
                                        <option value='2'>Additional from Freight</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <p className='QuotationPaymentFormMain'>UN PACKING CHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationunPackingCharge"
                                        id="unPackingCharge"
                                        value={quotationInfo.quotationunPackingCharge}
                                        onChange={handleOnChange}
                                    >
                                        <option value='3'>Included in Freight</option>
                                        <option value='4'>Additional from Freight</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <p className='QuotationPaymentFormMain'>LOADING CHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationLoadingCharge"
                                        id="loadingCharge"
                                        value={quotationInfo.quotationLoadingCharge}
                                        onChange={handleOnChange}
                                    >
                                        <option value='5'>Included in Freight</option>
                                        <option value='6'>Additional from Freight</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <p className='QuotationPaymentFormMain'>UN LOADING CHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationunLoadingCharge"
                                        id="unLoadingCharge"
                                        value={quotationInfo.quotationunLoadingCharge}
                                        onChange={handleOnChange}
                                    >
                                        <option value='7'>Included in Freight</option>
                                        <option value='8'>Additional from Freight</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <p className='QuotationPaymentFormMain'>PACKING MATERIAL CHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationPackingMaterialCharge"
                                        id="packingMaterialCharge"
                                        value={quotationInfo.quotationPackingMaterialCharge}
                                        onChange={handleOnChange}
                                    >
                                        <option value='9'>Included in Freight</option>
                                        <option value='10'>Additional from Freight</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <p></p>
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>STORAGE CHARGE</p>
                                <input
                                    type="text"
                                    name="quotationStorageCharge"
                                    id="storageCharge"
                                    value={quotationInfo.quotationStorageCharge}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>CAR/BIKE TPT</p>
                                <input
                                    type="text"
                                    name="quotationcarTPT"
                                    id="carTPT"
                                    value={quotationInfo.quotationcarTPI}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>MISCELLANEOUS CHARGES</p>
                                <input
                                    type="text"
                                    name="quotationMiscellCharge"
                                    id="MiscellCharge"
                                    value={quotationInfo.quotationMiscellCharge}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>OTHER CHARGES</p>
                                <input
                                    type="text"
                                    name="quotationOtherCharge"
                                    id="otherCharge"
                                    value={quotationInfo.quotationOtherCharge}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>S.T. CHARGE</p>
                                <input
                                    type="text"
                                    name="quotationstCharge"
                                    id="stCharge"
                                    value={quotationInfo.quotationstCharge}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p className='QuotationPaymentFormMain'>OCTROI GREEN TAX</p>
                                <input
                                    type="text"
                                    name="quotationGreenTax"
                                    id="greenTax"
                                    value={quotationInfo.quotationGreenTax}
                                    onChange={handleOnChange}
                                    placeholder="0"
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <p className='QuotationPaymentFormMain'>SURCHARGE</p>
                                <div className='QuotationPaymentPacking'>
                                    <select
                                        type="text"
                                        name="quotationsurCharge"
                                        id="surCharge"
                                        value={quotationInfo.quotationsurCharge}
                                        onChange={handleOnChange}
                                        placeholder="Not Applicable"
                                    >
                                        <option value='11'>Not Applicable</option>
                                        <option value='12'>Applicable</option>
                                        <option value='13'>Extra</option>
                                    </select>
                                    <select
                                        type="text"
                                        name="quotationPackingCharge"
                                        id="fpackingCharge"
                                        value={quotationInfo.quotationPackingCharge}
                                        onChange={handleOnChange}
                                        placeholder="0"
                                    >
                                        <option value='14'>1%</option>
                                        <option value='15'>2%</option>
                                        <option value='16'>3%</option>
                                        <option value='17'>4%</option>
                                        <option value='18'>5%</option>
                                        <option value='19'>6%</option>
                                        <option value='20'>7%</option>
                                        <option value='21'>8%</option>
                                        <option value='22'>9%</option>
                                        <option value='23'>10%</option>
                                        <option value='24'>11%</option>
                                        <option value='25'>12%</option>
                                        <option value='26'>13%</option>
                                        <option value='27'>14%</option>
                                        <option value='28'>15%</option>
                                        <option value='29'>16%</option>
                                        <option value='30'>17%</option>
                                        <option value='31'>18%</option>
                                        <option value='32'>19%</option>
                                        <option value='33'>20%</option>
                                    </select>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <p className='QuotationPaymentFormMain'>GST <small>IN QUOTE/BY BILL</small></p>
                                <select
                                    type="text"
                                    name="quotationGSTQuote"
                                    id="GSTQuote"
                                    value={quotationInfo.quotationGSTQuote}
                                    onChange={handleOnChange}
                                    placeholder="Not Applicable"
                                >
                                    <option value='34'>In Quotation</option>
                                    <option value='35'>By Bill</option>
                                    <option value='36'>Without GST Quotation</option>
                                    <option value='37'>GST Exempted</option>
                                </select>
                            </Grid>
                            <Grid item xs={2}>
                                <p className='QuotationPaymentFormMain'>GST</p>
                                <select
                                    type="text"
                                    name="quotationGST"
                                    id="GST"
                                    value={quotationInfo.quotationGST}
                                    onChange={handleOnChange}
                                >
                                    <option value='38'>0</option>
                                    <option value='39'>5</option>
                                    <option value='40'>12</option>
                                    <option value='41'>18</option>
                                    <option value='41'>28</option>
                                </select>
                            </Grid>
                            <Grid item xs={2}>
                                <p className='QuotationPaymentFormMain'>GST TYPE</p>
                                <select
                                    type="text"
                                    name="quotationGSTType"
                                    id="GSTType"
                                    value={quotationInfo.quotationGSTType}
                                    onChange={handleOnChange}
                                >
                                    <option value='42'>CGST/SGST</option>
                                    <option value='43'>IGST</option>

                                </select>
                            </Grid>
                            <Grid item xs={8}>
                                <p className='QuotationPaymentFormMain'>REMARK (टिप्पणी)</p>
                                <textarea
                                    name="quotationRemark" required
                                    id="fRemark"
                                    value={quotationInfo.quotationfRemark}
                                    onChange={handleOnChange}
                                >
                                </textarea>
                            </Grid>
                            <Grid item xs={4}>
                                <div className='QuotationPaymentFormSub'>
                                    <p className='QuotationPaymentFormDiscount'>DISCOUNT (डिस्काउंट)</p>
                                    <input
                                        type="text"
                                        name="quotationDiscount" required
                                        id="discount"
                                        value={quotationInfo.quotationDiscount}
                                        onChange={handleOnChange}
                                    />
                                    <p className='QuotationPaymentFormDiscount'>Applicable on Sub-Total Amount</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Box></form>}</p> : null
            }

        </div >

    )
}

export default QuotationPayment
