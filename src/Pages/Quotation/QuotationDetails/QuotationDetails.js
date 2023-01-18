import React, { useEffect, useState, useRef } from 'react';
import './QuotationDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// import from 'faker/lib/address';

// import Calendar from 'react-calendar';

// const getDatafromValues = () => {
//     const data = localStorage.getItem("formValues");
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// };

const QuotationDetails = ({ userInfo, handleOnChange, }) => {

    const [entries, setEntries] = useState([]);

    // const initialValues = { phone: "", email: "", quotation: "", partyname: "", movingtype: "", companyparty: "", packingdate: "", deliverydate: "", date: "" };
    // const [formValues, setFormValues] = useState(getDatafromValues());
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const [email, setEmail] = useState("")
    // const [quotation, setQuotation] = useState("")
    // const [movingType, setMovingType] = useState("")
    // const [companyParty, setCompanyParty] = useState("")
    // const [partyName, setPartyName] = useState("")
    // const [phone, setPhone] = useState("")
    // const [date, setDate] = useState("")
    // const [packingDate,  setPackingDate] = useState("")
    // const [deliveryDate, setDeliveryDate] = useState("")

    // const navigate = useNavigate();

    const [show, setShow] = useState(true);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const getAllQuotation = () => {
        axios.get('http://localhost:7005/items').then((response) => {
            console.log(response.data);
            setEntries(response.data);
        });
    };

    useEffect(() => {
        getAllQuotation();
    }, []);





    return (

        <div className='QuotationDetailsMain'>
            <div className='QuotationDetailsHead'>Quotation Details (कोटेशन का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<form className='QuotationDetailsForm'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain '>QUOTATION NUMBER (कोटेशन नंबर)</p>
                            <input
                                type="text"
                                name="quotationNumber"
                                id="quotation"
                                value={userInfo.quotationNumber}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <p></p>
                        </Grid>
                        {/* <p className='error'>{formErrors.quotation}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>MOVING TYPE (मुविंग के प्रकार)</p>

                            <select
                                type="text"
                                name="quotationMovingType" required
                                id="movingType"
                                value={userInfo.quotationMovingType}
                                onChange={handleOnChange}
                            >

                                <option value='Local'>Local</option>
                                <option value='Domestic'>Domestic</option>
                                <option value='International'>International</option>
                                <option value='House Hold Goods'>House Hold Goods</option>
                                <option value='Office Shifting'>Office Shifting</option>
                                <option value='Vehicle Shifting'>Vehicle Shifting</option>
                                <option value='Industrial Office Shifting'>Industrial Office Shifting</option>
                            </select>
                        </Grid>
                        {/* <p className='error'>{formErrors.movingtype}</p> */}
                        <Grid item xs={8}>
                            <p className='QuotationDetailsFormMain'>COMPANY NAME OF PARTY (कंपनी नाम - जिसे कोटेशन चाहिए) (कोटेशन नंबर)</p>

                            <input
                                type="text"
                                name="quotationCompanyParty" required
                                id="companyParty"
                                value={userInfo.quotationCompanyParty}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.companyparty}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>PARTY NAME* (व्यक्ति नाम - जिसे कोटेशन चाहिए)</p>
                            <input
                                type="text"
                                name="quotationPartyName" required
                                id="partyName"
                                value={userInfo.quotationPartyName}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.partyname}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>PARTY PHONE (फोन)</p>
                            <input
                                type="text"
                                name="quotationPartyPhone"
                                id="partyPhone"
                                value={userInfo.quotationPartyPhone}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.phone}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>EMAIL (ईमेल)</p>
                            <input
                                type="text"
                                name="quotationEmail"
                                id="email"
                                value={userInfo.quotationEmail}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.email}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>QUOTATION DATE (तारीख)</p>
                            <input
                                type="date"
                                name="quotationDate"
                                id="date"
                                value={userInfo.quotationDate}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.date}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>PACKING DATE</p>
                            <input
                                type="date"
                                name="quotationPackingDate"
                                id="packingDate"
                                value={userInfo.quotationPackingDate}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.packingdate}</p> */}
                        <Grid item xs={4}>
                            <p className='QuotationDetailsFormMain'>DELIVERY DATE</p>
                            <input
                                type="date"
                                name="quotationDeliveryDate"
                                id="deliveryDate"
                                value={userInfo.quotationDeliveryDate}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        {/* <p className='error'>{formErrors.deliverydate}</p> */}
                        {/* <button type="submit" onClick={() => nextStep()}>Sign In</button> */}

                    </Grid>
                </Box></form>}</p> : null
            }

        </div >

    )
}


export default QuotationDetails;

