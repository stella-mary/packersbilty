import React from 'react'
import './PackDate.css'
import date from '../Images/date.png';
import { useNavigate } from 'react-router-dom';


export default function MainItems() {

    const navigate = useNavigate()

    function movetoNextQuotation() {
        navigate("/Quotation")
    }

    return (
        <div className='PackDateMain'>
            <div className='PackDateSub'>
                <h2 className='title'>Upcoming Packing Date</h2>
                <p className='borderbottomx'>&#160;</p>
                <p className='image'><img src={date} alt="" width={200}></img></p>
                <p className='PackDatePara'>Add Data For <b>Upcoming Packing Date</b> Notifications</p>
                <button onClick={movetoNextQuotation} className='PackDateButton'>ADD NEW QUOTATION</button>
            </div>
        </div>
    )
}
