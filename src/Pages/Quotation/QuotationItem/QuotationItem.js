import React, { useState, useEffect } from 'react';
import './QuotationItem.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import delete from 'delete.png';
import remove from '../Img/remove.png';
import exclamationmark from '../Img/exclamationmark.png'
import { Identity } from '@mui/base';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';


function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}


const QuotationItem = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = useState("")

    const [searchParam] = useSearchParams();
    const itemId = searchParam.get("items");
    const [selectedEntry, setSelectedEntry] = useState("");
    // const [show, setShow] = useState(false);


    const handleClickOpen = (id) => {
        setOpen(true);
        console.log(id)

    };

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setItems({ ...items, [name]: value })
        // setQuotationInfo({ value: e.target.value });
        console.log(items)
    }


    const handleRemove = (itemId) => {

        // console.log(itemId);
        // axios.delete(`http://localhost:7005/items/${itemId}`).then((response) => {
        //     console.log(response);
        //     getAllQuotation()
        //     //   fetchAllEvents();
        //     // navigate("/QuotationItem");
        // });
        setOpen(false);
        setDisplay(<div className='removeItems'>"Removed This Item / Particular"</div>);
        // document.write("Removed This Item / Particular");

    };

    const handleClose = () => {
        setOpen(false)
    }

    const [items, setItems] = useState({
        quotationPartName: "",
        quotationQuantity: "",
        quotationfValue: "",
        quotationfRemark: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([...items, {
            quotationPartName: items.quotationPartName,
            quotationQuantity: items.quotationQuantity,
            quotationfRemark: items.quotationfRemark,
            quotationfValue: items.quotationfValue,
        }])
        console.log(items.quotationPartName)
    };



    // axios.post('http://localhost:7005/items', {

    //     quotationPartName: details.quotationPartName,
    //     quotationQuantity: details.quotationQuantity,
    //     quotationfValue: details.quotationfValue,
    //     quotationfRemark: details.quotationfRemark,
    //     itemId: details.itemId

    // }).then((response) => {
    //     console.log(response)

    // })

    // setItems("")


    // const getAllQuotation = () => {
    //     axios.get('http://localhost:7005/items').then((response) => {
    //         console.log(response.data);
    //         setData(response.data);
    //     });
    // };


    // useEffect(() => {
    //     getAllQuotation();
    // }, []);


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className='QuotationItemMain'>
            <div className='QuotationItemHead'>Item / Particulars Details (सामान का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? (
                <form>
                    {/* <div className='QuotationItemForm'> */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                                <p className='QuotationItemFormMain'>ITEM / PARTICULARS NAME (सामान का नाम)</p>
                                <input
                                    type="text"
                                    name="quotationPartName" required
                                    id="partName"
                                    value={items.quotationPartName}
                                    // value={name}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <p className='QuotationItemFormMain'>QUANTITY (संख्या)</p>

                                <input
                                    type="text"
                                    name="quotationQuantity" id="quantity"
                                    value={items.quotationQuantity}
                                    // value={quantity}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <p className='QuotationItemFormMain'>VALUE (कीमत) (IN RUPEES)</p>

                                <input
                                    type="text"
                                    name="quotationfValue"
                                    id="fvalue"
                                    value={items.quotationfValue}

                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <p className='QuotationItemFormMain'>REMARK (अन्य विवरण)</p>

                                <input
                                    type="text"
                                    name="quotationfRemark"
                                    id="fRemark"
                                    value={items.quotationfRemark}
                                    onChange={handleOnChange}
                                />

                                {/* <button type="submit" onClick={() => nextStep()}>Sign In</button> */}
                            </Grid>
                            <Grid item xs={4}>
                                <p></p>
                            </Grid>
                            <Grid item xs={2}>
                                <p></p>
                            </Grid>
                            <Grid item xs={3}>
                                <p></p>
                            </Grid>
                            <Grid item xs={3}>
                                {/* <button className='QuotationItems' onClick={() => setShow((show) => !show)}>ADD ITEM/PARTICULARS</button> */}
                                {/* <button className='QuotationItems'>ADD ITEM/PARTICULARS</button> */}
                                <button onClick={() => handleSubmit()} className="QuotationItems">ADD ITEM/PARTICULARS</button>
                            </Grid>
                        </Grid>

                        {/* {display ? <div>Removed This Item / Particular</div> : */}
                        <div>
                            {data.map((row) => (
                                <div className="addItems" key={row.id}>

                                    <div className='addItemsTable'>
                                        <p className="addItemsParaTable">.) Item / Particulars : <b>{row.quotationPartName}</b><br /><br />Qty.: <b>{row.quotationQuantity}</b> | Value(Rupees): <b>{row.quotationfValue}</b><br /><br />Remark: <b>{row.quotationfRemark}</b></p>
                                        <div className='buttonRemove'>
                                            <Button onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("set show clicked..");
                                                setSelectedEntry(row.id);
                                                setOpen((open) => !open);
                                            }}
                                            >

                                                <img src={remove} alt="" width={20}></img>
                                            </Button>
                                        </div>
                                    </div>
                                    {row.id === selectedEntry && open ? (
                                        <div>
                                            <Dialog
                                                className='Popup'
                                                open={open}
                                                onClose={handleClose}
                                                PaperComponent={PaperComponent}
                                                aria-labelledby="draggable-dialog-title"
                                            >
                                                <DialogTitle style={{ cursor: 'move' }} className="draggable-dialog-title">
                                                    <img src={exclamationmark} alt="" width={50}></img>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        <span className="big"></span>Are you sure?<br /><br />
                                                        You want to remove {row.quotationPartName}
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => handleRemove(row.id)}>
                                                        Delete
                                                    </Button>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                </DialogActions>
                                            </Dialog>

                                        </div>

                                    ) : null
                                    }
                                </div>

                            ))}

                        </div>
                        {display && <p>{display}</p>}
                    </Box></form >) : null
            }


        </div >

    )
}


export default QuotationItem


