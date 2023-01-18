import React, { useState, useEffect, useCallback } from 'react';
import './SurveyDetails.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import axios from 'axios';

// import Calendar from 'react-calendar';

// const getDatafromValues = () => {
//     const data = localStorage.getItem("userInfo");
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// };


const SurveyDetails = ({ userInfo, handleOnChange, }) => {


    // const getAllSurvey = () => {
    //     axios.get('http://localhost:4005/survey').then((response) => {
    //         console.log(response.data);
    //     });
    // };

    // useEffect(() => {
    //     getAllSurvey();
    // }, []);



    const [show, setShow] = useState(true);


    return (
        <div className='SurveyDetailsMain'>
            <div className='SurveyDetailsHead'>Goods List Details (सामान का विवरण)

                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='SurveyDetailsForm'>
                <p className='SurveyDetailsFormMain'>NAME (नाम)</p>
                <input
                    type="text"
                    name="surveyName"
                    id="surveyName"
                    value={userInfo.surveyName}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>PHONE (फोन)</p>
                <input
                    type="text"
                    name="surveyPhone"
                    id="surveyPhone"
                    value={userInfo.surveyPhone}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>ASSESSMENT/SURVEY NO.</p>
                <input
                    type="text"
                    name="surveyNo"
                    id="surveyNo"
                    value={userInfo.surveyNo}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>DATE (तारीख)</p>
                <input
                    type="date"
                    name="surveyDate"
                    id="surveyDate"
                    value={userInfo.surveyDate}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>MOVE FROM (जहां से सामान जाएगा)</p>
                <input
                    type="text"
                    name="surveyMoveFrom"
                    id="surveyMoveFrom"
                    value={userInfo.surveyMoveFrom}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>MOVE TO (जहां सामान जाना है)</p>
                <input
                    type="text"
                    name="surveyMoveTo"
                    id="surveyMoveTo"
                    value={userInfo.surveyMoveTo}
                    onChange={handleOnChange}
                />
                <p className='SurveyDetailsFormMain'>VEHICLE NO. (गाड़ी नंबर)</p>
                <input
                    type="text"
                    name="surveyVehicle"
                    id="surveyVehicle"
                    value={userInfo.surveyVehicle}
                    onChange={handleOnChange}
                />
            </div>}</p> : null}
        </div>
    )
}

export default SurveyDetails