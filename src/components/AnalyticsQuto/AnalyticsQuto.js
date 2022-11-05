import React from 'react'
import './AnalyticsQuto.css'
import analyticsquto from '../Images/analyticsquto.png';




export default function AnalyticsQuto() {
    return (
        <div className='AnalyticsQutoMain'>
            <div className='AnalyticsQutoSub'>
                <h2 className='title'>30 Days Analytics of Quotation Generate</h2>
                <p className='borderbottomx'>&#160;</p>

                <p className='image'><img src={analyticsquto} alt="" width={800} ></img></p>
            </div>
        </div >

    )
}
