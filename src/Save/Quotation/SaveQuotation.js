import React from 'react'
import './SaveQuotation.css'
import CallIcon from '@mui/icons-material/Call';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { useNavigate } from 'react-router-dom';

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
    cursor: 'pointer',
}));





export default function SaveQuotation() {

    const navigate = useNavigate()

    function movetoSaveLorryPage() {
        navigate("/LorryPage")
    }
    function movetoSaveBillPage() {
        navigate("/BillPage")
    }

    function movetoSaveMoneyPage() {
        navigate("/MoneyPage")
    }

    function movetoSaveVehiclePage() {
        navigate("/VehiclePage")
    }

    function movetoSavePaymentPage() {
        navigate("/PaymentPage")
    }
    function movetoSaveQuotationPage() {
        navigate("/QuotationPage")
    }

    function movetoSaveQuotationList() {
        navigate("/QuotationNewData")
    }

    function movetoSaveQuotationViewPDF() {
        navigate("/QuotationViewPdf")
    }

    return (
        <div className='SaveQuotation'>
            <div className='SaveQuotationMain'>
                <div className="SaveQuotationNew" onClick={movetoSaveQuotationPage}>NEW QUOTATION</div>
                <div className="SaveQuotationList" onClick={movetoSaveQuotationList}>QUOTATION LIST</div>
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
                            <Item><BorderColorIcon /> Edit</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><DeleteIcon /> Delete</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item onClick={movetoSaveQuotationViewPDF}><PictureAsPdfOutlinedIcon />  View PDF</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><PictureAsPdfOutlinedIcon /> Save PDF</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item><ModeEditOutlineIcon /> Customer Signature</Item>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <Item>&#160;</Item>
                        </Grid> */}

                        <Grid item xs={4}>
                            <Item onClick={movetoSaveLorryPage}><EventNoteOutlinedIcon /> <span class="saveMiddle">Generate LR</span></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item onClick={movetoSaveBillPage}><DescriptionOutlinedIcon /> Generate Bill</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item onClick={movetoSaveMoneyPage}><TextSnippetOutlinedIcon /> Generate MR</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item onClick={movetoSaveVehiclePage}><NoteAltOutlinedIcon /> Generate VC</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item onClick={movetoSavePaymentPage}><NoteAltOutlinedIcon /> Generate PL</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div >

        </div >
    )
}
