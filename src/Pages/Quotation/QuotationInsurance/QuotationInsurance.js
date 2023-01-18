import React, { useState, useCallback } from 'react';
import './QuotationInsurance.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const QuotationInsurance = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className='QuotationInsuranceMain'>
            <div className='QuotationInsuranceHead'>Insurance Details (इन्शुरेंस जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form>
                    <div className='QuotationInsuranceForm'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <p className='QuotationInsuranceFormMain'>INSURANCE TYPE</p>
                                    <select
                                        type="text"
                                        name="quotationInsuranceType" required
                                        id="insuranceType"
                                        value={userInfo.quotationInsuranceType}
                                        onChange={handleOnChange}
                                    >
                                        <option value='1'>Optional</option>
                                        <option value='2'>Addition from Freight</option>
                                        <option value='3'>Included in Freight</option>
                                    </select>
                                </Grid>
                                {/* <Grid item xs={4}>
                                    <p></p>
                                </Grid>
                                <Grid item xs={4}>
                                    <p></p>
                                </Grid> */}
                                <Grid item xs={8}>
                                    <p className='QuotationInsuranceFormMain'>INSURANCE CHARGE @PERCENT (%)</p>
                                    <select
                                        type="text"
                                        name="quotationInsuranceCharge" required
                                        id="insuranceCharge"
                                        value={userInfo.quotationInsuranceCharge}
                                        onChange={handleOnChange}
                                    >
                                        <option value='4'>0.5%</option>
                                        <option value='5'>1%</option>
                                        <option value='6'>1.5%</option>
                                        <option value='7'>2%</option>
                                        <option value='8'>2.5%</option>
                                        <option value='9'>3%</option>
                                        <option value='10'>3.5%</option>
                                        <option value='11'>4%</option>
                                        <option value='12'>4.5%</option>
                                        <option value='13'>5%</option>
                                        <option value='14'>5.5%</option>
                                        <option value='15'>6%</option>
                                        <option value='16'>6.5%</option>
                                        <option value='17'>7%</option>
                                        <option value='18'>7.5%</option>
                                        <option value='19'>8%</option>
                                        <option value='20'>8.5%</option>
                                        <option value='21'>9%</option>
                                        <option value='22'>9.5%</option>
                                    </select>
                                </Grid>
                                <Grid item xs={4}>
                                    <p className='QuotationInsuranceFormMain'>GST %</p>
                                    <select
                                        type="text"
                                        name="quotationfGST"
                                        id="fGST"
                                        value={userInfo.quotationfGST}
                                        onChange={handleOnChange}
                                    >
                                        <option value='23'>0</option>
                                        <option value='24'>5</option>
                                        <option value='25'>12</option>
                                        <option value='26'>18</option>
                                        <option value='27'>28</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationInsuranceFormMain'>DECLARATION VALUE OF GOODS <small>(IF ANY)</small></p>
                                    <input
                                        type="text"
                                        name="quotationDeclaration"
                                        id="declaration"
                                        value={userInfo.quotationDeclaration}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                            </Grid>
                        </Box></div></form>}</p> : null
            }

        </div >

    )
}

export default QuotationInsurance