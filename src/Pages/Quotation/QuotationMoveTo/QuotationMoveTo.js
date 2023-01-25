import React, { useEffect, useState, useRef } from 'react';
import './QuotationMoveTo.css'
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

const QuotationMoveTo = ({ quotationInfo, handleOnChange, }) => {



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

            <div className='QuotationToHead'>Move To (जहां सामान जाना है)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form>
                    <div className='QuotationToForm'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <p className='QuotationToFormMain'>COUNTRY (देश)</p>
                                    <input
                                        type="text"
                                        name="quotationfCountry" required
                                        id="fcountry"
                                        value={quotationInfo.quotationfCountry}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationToFormMain'>STATE (राज्य)</p>
                                    <input
                                        type="text"
                                        name="quotationfStates"
                                        id="fstates"
                                        value={quotationInfo.quotationfStates}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>

                                    <p className='QuotationToFormMain'>CITY (शहर)</p>
                                    <input
                                        type="text"
                                        name="quotationfCity" required
                                        id="fcity"
                                        value={quotationInfo.quotationfCity}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationToFormMain'>PINCODE(पिन कोड)</p>
                                    <input
                                        type="text"
                                        name="quotationfPincode"
                                        id="fpincode"
                                        value={quotationInfo.quotationfPincode}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationToFormMain'>ADDRESS (पता)</p>
                                    <textarea
                                        type="text"
                                        name="quotationfAddress"
                                        id="faddress"
                                        value={quotationInfo.quotationfAddress}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='QuotationMoveFormMain'>FLOOR (मंज़िल)</p>
                                    <select

                                        name="quotationfFloor"
                                        id="ffloor"
                                        value={quotationInfo.quotationfFloor}
                                        onChange={handleOnChange}
                                    >
                                        <option value='1'>Ground Floor</option>
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
                                    <p className='QuotationMoveFormMain'>IS LIFT AVAILABLE(क्या लिफ्ट है?)</p>
                                    <select

                                        name="quotationfLift"
                                        id="flift"
                                        value={quotationInfo.quotationfLift}
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

export default QuotationMoveTo