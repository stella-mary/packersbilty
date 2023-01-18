import React from 'react'
import './MainItems.css'
import bill from '../Images/bill.jpeg';
import lorry from '../Images/lorry.jpeg';
import money from '../Images/money.jpeg';
import packing from '../Images/packing.jpeg';
import payment from '../Images/payment.jpeg';
import quot from '../Images/quot.jpeg';
import survey from '../Images/survey.jpeg';
import vehicle from '../Images/vehicle.jpeg';
import { useNavigate } from 'react-router-dom';


export default function MainItems() {

    const navigate = useNavigate()

    function movetoNewQuotation() {
        navigate("/Quotation")
    }

    function movetoNewSurvey() {
        navigate("/Survey")
    }

    function movetoNewPacking() {
        navigate("/Packing")
    }

    function movetoNewLorry() {
        navigate("/Lorry")
    }

    function movetoNewVehicle() {
        navigate("/Vehicle")
    }

    function movetoNewBill() {
        navigate("/Bill")
    }

    function movetoNewMoney() {
        navigate("/Money")
    }

    function movetoNewPayment() {
        navigate("/Payment")
    }

    return (
        <div className='MainItemsMain'>
            <div className='MainItemsSub'>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={quot} alt="" width={50}></img></p>
                    <p className='ListItem'>Quotation</p>
                    <button onClick={movetoNewQuotation} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={survey} alt="" width={50}></img></p>
                    <p className='ListItem'>Survey List</p>
                    <button onClick={movetoNewSurvey} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={packing} alt="" width={50}></img></p>
                    <p className='ListItem'>Packing List</p>
                    <button onClick={movetoNewPacking} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={lorry} alt="" width={50}></img></p>
                    <p className='ListItem'>Lorry Receipt</p>
                    <button onClick={movetoNewLorry} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={vehicle} alt="" width={50}></img></p>
                    <p className='ListItem'>Vehicle Condition</p>
                    <button onClick={movetoNewVehicle} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={bill} alt="" width={50}></img></p>
                    <p className='ListItem'>Bill</p>
                    <button onClick={movetoNewBill} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={money} alt="" width={50}></img></p>
                    <p className='ListItem'>Money Receipt</p>
                    <button onClick={movetoNewMoney} className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={payment} alt="" width={50}></img></p>
                    <p className='ListItem'>Payment Voucher</p>
                    <button onClick={movetoNewPayment} className='MainItemsButton'>Add New</button>
                </div>
            </div>
        </div >



    )
}
