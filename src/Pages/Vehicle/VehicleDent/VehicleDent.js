import React, { useState, useCallback } from 'react';
import './VehicleDent.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function VehicleDent() {

    const [show, setShow] = useState(true);

    return (
        <div className='VehicleDentMain'>
            <div className='VehicleDentHead'>Dent/Scratches Details (डेंट/खरोंच का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='VehicleDentForm'>
                <p className='VehicleDentFormMain'>SCRATCHES</p>
                <textarea></textarea>
                <p className='VehicleDentFormMain'>DENT</p>
                <textarea></textarea>
                <p className='VehicleDentFormMain'>ANY OTHER VISIBLE OBSERVATION</p>
                <textarea></textarea>
            </div>}</p> : null
            }
        </div >
    )
}
