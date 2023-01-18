import React, { useState, useEffect, useCallback } from 'react';
import './SurveyItem.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import axios from 'axios';


const SurveyItem = ({ userInfo, handleOnChange, }) => {

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
        <div className='SurveyItemMain'>
            <div className='SurveyItemHead'>Item / Particulars Details (सामान का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='SurveyItemForm'>
                <p className='SurveyItemFormMain'>ITEM / PARTICULARS NAME (सामान का नाम)</p>
                <input
                    type="text"
                    name="SurveyItem"
                    id="SurveyItem"
                    value={userInfo.SurveyItem}
                    onChange={handleOnChange}
                />
                <p className='SurveyItemFormMain'>QUANTITY (संख्या)</p>
                <input
                    type="text"
                    name="SurveyQuantity"
                    id="SurveyQuantity"
                    value={userInfo.SurveyQuantity}
                    onChange={handleOnChange}
                />

                <p className='SurveyItemFormMain'>VALUE (कीमत) (IN RUPEES)</p>
                <input
                    type="text"
                    name="SurveyValue"
                    id="SurveyValue"
                    value={userInfo.SurveyValue}
                    onChange={handleOnChange}
                />

                <p className='SurveyItemFormMain'>REMARK (अन्य विवरण)</p>
                <input
                    type="text"
                    name="SurveyRemark"
                    id="SurveyRemark"
                    value={userInfo.SurveyRemark}
                    onChange={handleOnChange}
                />

                <button className='SurveyItems'>ADD ITEM/PARTICULARS</button>
            </div>}</p> : null}
        </div >

    )
}

export default SurveyItem