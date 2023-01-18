import React, { useState, useCallback } from 'react';
import './VehicleAccessories.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function VehicleAccessories() {

    const [show, setShow] = useState(true);

    return (
        <div className='VehicleAccessoriesMain'>
            <div className='VehicleAccessoriesHead'>Dent/Scratches Details (डेंट/खरोंच का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='VehicleAccessoriesForm'>
                <p className='VehicleAccessoriesFormMain'>SCRATCHES</p>
                <textarea></textarea>
                <p className='VehicleAccessoriesFormMain'>DENT</p>
                <textarea></textarea>
                <p className='VehicleAccessoriesFormMain'>ANY OTHER VISIBLE OBSERVATION</p>
                <textarea></textarea>
            </div>}</p> : null
            }
        </div >
    )
}
