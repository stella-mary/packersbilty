import React, { useState, useCallback } from 'react';
import './QuotationOther.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const QuotationOther = ({ quotationInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className='QuotationOtherMain'>
            <div className='QuotationOtherHead'>Other Details (अन्य जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{
                <form>
                    <div className='QuotationOtherForm'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <p className='QuotationOtherFormMain'>IS THERE EASY ACCESS FOR LOAD & UNLOADING AT ORIGIN & DESINATION (क्या लोड और अनलोडिंग आसान है?)</p>
                                    <select
                                        type="text"
                                        name="quotationLoad"
                                        id="load"
                                        value={quotationInfo.quotationLoad}
                                        onChange={handleOnChange}
                                    >
                                        <option value='1'>Yes</option>
                                        <option value='2'>No</option>
                                        <option value='3'>May be</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationOtherFormMain'>SHOULD ANY ITEMS BE GOT DOWN THROUGH BALCONY ETC. (क्या किसी सामान को बालकनी से नीचे उतारना हैं?)<br /><small>eg.Almirah, Bed etc.</small></p>
                                    <textarea
                                        type="text"
                                        name="quotationDown"
                                        id="down"
                                        value={quotationInfo.quotationDown}
                                        onChange={handleOnChange}
                                    >
                                    </textarea>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationOtherFormMain'>ARE THERE ANY RESTRICTIONS FOR LOADING/UNLOADING AT ORIGIN/DESINATION (क्या लोडिंग/अनलोडिंग वाले स्थान पर कोई रोकटोक हैं?)</p>
                                    <select
                                        type="text"
                                        name="quotationfLoad" required
                                        id="fload"
                                        value={quotationInfo.quotationfLoad}
                                        onChange={handleOnChange}
                                    >
                                        <option value='4'>Yes</option>
                                        <option value='5'>No</option>
                                        <option value='6'>May be</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='QuotationOtherFormMain'>DO YOU HAVE ANY SPECIAL NEEDS OR CONCERNS (अन्य जरूरी आवश्यकताएं?)</p>
                                    <textarea
                                        type="text"
                                        name="quotationNeed" required
                                        id="need"
                                        value={quotationInfo.quotationNeed}
                                        onChange={handleOnChange}
                                    >
                                    </textarea>
                                </Grid>
                            </Grid>
                            {/* <button type="submit" onClick={() => nextStep()}>Sign In</button> */}
                        </Box></div></form>}</p> : null
            }
        </div >

    )
}

export default QuotationOther