import React from 'react'
import './SaveQuotation.css'
import CallIcon from '@mui/icons-material/Call';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SaveQuotation() {
    return (
        <div className='SaveQuotation'>
            <div className='SaveQuotationMain'>
                <div className="SaveQuotationNew">NEW QUOTATION</div>
                <div className="SaveQuotationList">QUOTATION LIST</div>
            </div>
            <div className='SaveQuotationMain1'>
                <div className='SaveQuotationMain2'>
                    <div className="SaveQuotationDate">Date:</div>
                    <div className="SaveQuotationNumber">QUOTATION -#</div>
                </div>
                <div className='SaveQuotationMain2'>
                    <PersonRoundedIcon />
                    <CurrencyRupeeRoundedIcon />

                </div>

                <div className='SaveQuotationMain3'>
                    <ArrowDownwardRoundedIcon /> From
                    <LocationOnRoundedIcon /> To
                    <CallIcon />
                </div>
                <br /><br />
                <hr /><br /><br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>Edit</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Delete</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>View PDF</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Save PDF</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>Customer Signature</Item>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <Item>&#160;</Item>
                        </Grid> */}

                        <Grid item xs={4}>
                            <Item>Generate LR</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Generate Bill</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Generate MR</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>Generate VC</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>Generate PL</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        </div >
    )
}
