import React, { useEffect, useState, useRef } from 'react';
import './QuotationMoveFrom.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// const getDatafromValues = () => {
//     const data = localStorage.getItem("formValues");
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// };

const QuotationMoveFrom = ({ userInfo, handleOnChange }) => {



    // const initialValues = { country: "", city: "", states: "", pincode: "", address: "", floor: "", lift: "" };
    // const [formValues, setFormValues] = useState(getDatafromValues());
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // const navigate = useNavigate();


    // const [country, setCountry] = useState("")
    // const [city, setCity] = useState("")
    // const [states, setStates] = useState("")
    // const [pincode, setPincode] = useState("")
    // const [address, setAddress] = useState("")
    // const [floor, setFloor] = useState("")
    // const [lift, setLift] = useState("")

    const [show, setShow] = useState(true);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value })
    //     // console.log(formValues)
    //     // localStorage.setItem("name", formValues.name)
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value })
    //     // console.log(formValues)
    //     // localStorage.setItem("name", formValues.name)
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    //     let newFormValue = {
    //         id: formValues.length + 1,
    //         country,
    //         city,
    //         states,
    //         pincode,
    //         address,
    //         floor,
    //         lift,
    //     };

    //     localStorage.setItem(
    //         "formValues",
    //         JSON.stringify([...formValues, newFormValue])
    //     );
    //     console.log(JSON.stringify(newFormValue));

    // navigate("/")


    // };


    // useEffect(() => {
    //     console.log(formErrors)
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues)
    //     }
    // }, [formErrors]);

    // const validate = (values) => {
    //     const errors = {}
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.country) {
    //         errors.country = "Country is required!";
    //     }
    //     if (!values.city) {
    //         errors.city = "City is required!";
    //     }
    //     if (!values.states) {
    //         errors.states = "States is required!";
    //     }
    //     if (!values.pincode) {
    //         errors.pincode = "Password is required!";
    //     }
    //     if (!values.address) {
    //         errors.pincode = "Address is required!";
    //     }
    //     if (!values.floor) {
    //         errors.floor = "Floor is required!";
    //     }
    //     if (!values.lift) {
    //         errors.pincode = "Lift is required!";
    //     }
    //     return errors;
    // }


    return (
        <div className='QuotationToMain'>

            <div className='QuotationToHead'>Move From (जहां सामान जाना है)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form>
                    <div className='QuotationToForm'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>COUNTRY (देश)</p>
                                    <input
                                        type="text"
                                        name="quotationCountry"
                                        id="country"
                                        value={userInfo.quotationCountry}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>STATE (राज्य)</p>
                                    <input
                                        type="text"
                                        name="quotationStates"
                                        id="states"
                                        value={userInfo.quotationStates}
                                        onChange={handleOnChange}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>CITY (शहर)</p>
                                    <input
                                        type="text"
                                        name="quotationCity"
                                        id="city"
                                        value={userInfo.quotationCity}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>PINCODE(पिन कोड)</p>
                                    <input
                                        type="text"
                                        name="quotationPincode"
                                        id="pincode"
                                        value={userInfo.quotationPincode}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationDetailsFormMain'>ADDRESS (पता)</p>
                                    <textarea
                                        type="text"
                                        name="quotationAddress"
                                        id="address"
                                        value={userInfo.quotationAddress}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>FLOOR (मंज़िल)</p>
                                    {/* <select
                            type="text"
                            name="quotationFloor" required
                            id="movingType"
                            value={userInfo.quotationFloor}
                            onChange={handleOnChange}
                        >

                            <option value='Local'>Local</option>
                            <option value='Domestic'>Domestic</option>
                            <option value='International'>International</option>
                            <option value='House Hold Goods'>House Hold Goods</option>
                            <option value='Office Shifting'>Office Shifting</option>
                            <option value='Vehicle Shifting'>Vehicle Shifting</option>
                            <option value='Industrial Office Shifting'>Industrial Office Shifting</option>
                        </select> */}
                                    <select
                                        type="text"
                                        name="quotationFloor"
                                        id="floor"
                                        value={userInfo.quotationFloor}
                                        onChange={handleOnChange}
                                    >
                                        <option value="1">Ground Floor</option>
                                        <option value='2'>1st</option>
                                        <option value='3'>2nd</option>
                                        <option value='4'>3rd</option>
                                        <option value='5'>4th</option>
                                        <option value='6'>5th</option>
                                        <option value='7'>6th</option>
                                        <option value='8'>7th</option>
                                        <option value='9'>Above 7th Floor</option>
                                    </select>
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationDetailsFormMain'>IS LIFT AVAILABLE(क्या लिफ्ट है?)</p>
                                    <select
                                        type="text"
                                        name="quotationLift"
                                        id="lift"
                                        value={userInfo.quotationLift}
                                        onChange={handleOnChange}

                                    >
                                        <option value='10'>Yes</option>
                                        <option value='11'>No</option>
                                    </select>
                                    {/* <button type="submit" onClick={() => nextStep()}>Sign In</button> */}
                                </Grid>
                            </Grid>
                        </Box></div></form>}</p> : null
            }

        </div>

    )
}

export default QuotationMoveFrom