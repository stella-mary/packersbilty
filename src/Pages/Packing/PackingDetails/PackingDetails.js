import React, { useState, useCallback } from 'react';
import './PackingDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

// import Calendar from 'react-calendar';

const PackingDetails = ({ userInfo, handleOnChange, }) => {

    const [show, setShow] = useState(true);


    return (
        <div className='PackingDetailsMain'>
            <div className='PackingDetailsHead'>Packing List Details (सामान का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='PackingDetailsForm'>
                <p className='PackingDetailsFormMain'>NAME (नाम)</p>
                <input
                    type="text"
                    name="packingName" required
                    id="packingName"
                    value={userInfo.packingName}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>PHONE (फोन)</p>
                <input
                    type="text"
                    name="packingPhone" required
                    id="packingPhone"
                    value={userInfo.packingPhone}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>PACKING NUMBER</p>
                <input
                    type="text"
                    name="packingNumber" required
                    id="packingNumber"
                    value={userInfo.packingNumber}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>DATE (तारीख)</p>
                <input
                    type="date"
                    name="packingDate" required
                    id="packingDate"
                    value={userInfo.packingDate}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>MOVE FROM (जहां से सामान जाएगा)</p>
                <input
                    type="text"
                    name="packingMoveFrom" required
                    id="packingMoveFrom"
                    value={userInfo.packingMoveFrom}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>MOVE TO (जहां सामान जाना है)</p>
                <input
                    type="text"
                    name="packingMoveTo" required
                    id="packingMoveTo"
                    value={userInfo.packingMoveTo}
                    onChange={handleOnChange}
                />
                <p className='PackingDetailsFormMain'>VEHICLE NO. (गाड़ी नंबर)</p>
                <input
                    type="text"
                    name="packingVehicle" required
                    id="packingVehicle"
                    value={userInfo.packingVehicle}
                    onChange={handleOnChange}
                />
            </div>}</p> : null}
        </div>
    )
}


export default PackingDetails