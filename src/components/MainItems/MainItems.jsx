import React from 'react'
import './MainItems.css'
import bill from '../Images/bill.jpeg';
import lorry from '../Images/lorry.jpeg';
import money from '../Images/money.jpeg';
import packing from '../Images/packing.jpeg';
import payment from '../Images/payment.jpeg';
import PBcard from '../Images/PB-card.jpeg';
import quot from '../Images/quot.jpeg';
import survey from '../Images/survey.jpeg';
import vehicle from '../Images/vehicle.jpeg';


export default function MainItems() {
    return (
        <div className='MainItemsMain'>
            <div className='MainItemsSub'>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={quot} alt="" width={50}></img></p>
                    <p className='ListItem'>Quotation</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={survey} alt="" width={50}></img></p>
                    <p className='ListItem'>Survey List</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={packing} alt="" width={50}></img></p>
                    <p className='ListItem'>Packing List</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={lorry} alt="" width={50}></img></p>
                    <p className='ListItem'>Lorry Receipt</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={vehicle} alt="" width={50}></img></p>
                    <p className='ListItem'>Vehicle Condition</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={bill} alt="" width={50}></img></p>
                    <p className='ListItem'>Bill</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={money} alt="" width={50}></img></p>
                    <p className='ListItem'>Money Receipt</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
                <div className='MainItemsSubSub'>
                    <p className='image'><img src={payment} alt="" width={50}></img></p>
                    <p className='ListItem'>Payment Voucher</p>
                    <button className='MainItemsButton'>Add New</button>
                </div>
            </div>
        </div>



    )
}
