import React, { useState, useCallback } from 'react';
import './VehicleDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function VehicleDetails() {

    const [show, setShow] = useState(true);

    return (
        <div className='VehicleDetailsMain'>
            <div className='VehicleDetailsHead'>Vehicle Details (वाहन का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='VehicleDetailsForm'>
                <p className='VehicleDetailsFormMain'>VEHICLE TYPE eg.Car/Bike/Other</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>VEHICLE BRAND NAME eg.Tata/Tiago</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>VEHICLE'S VALUE (INR)</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>INSURANCE POLICY NO.</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>INSURANCE COMPANY NAME</p>
                <input type='date'></input>
                <p className='VehicleDetailsFormMain'>VEHICLE REG. NO. eg.HR-16R-1240</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>MANUFACTURING YEAR eg.2020</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>COLOUR eg.White</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>VEHICLE KILOMETER(KM) Check Vehicle's Meter</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>CHASSIS NO.</p>
                <input></input>
                <p className='VehicleDetailsFormMain'>ENGINE NO.</p>
                <input></input>
            </div>}</p> : null
            }
        </div >
    )
}
