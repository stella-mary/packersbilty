import React from 'react'
import { BiIntersect } from "react-icons/bi";
import './Subscribe.css'

export default function AddDocument() {
    return (
        <div className='SubscribeMain'>
            <div className='SubscribeSub'>
                <div className='SubscribeSubSub'>
                    <h2 className='title'>Santhiya</h2>
                    <p className="title2">PBID: <b>PB10222806466</b> <BiIntersect /></p>
                    <p className='borderbottom'>&#160;</p>
                    <h3 className='title1'>Subscribe Now</h3>
                    <p className="title2">Subscribe for enjoy all the features</p>
                    <button className='subButton'>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}
