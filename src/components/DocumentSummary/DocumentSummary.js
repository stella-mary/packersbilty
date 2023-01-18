import React from 'react'
import './DocumentSummary.css'
import bill from '../Images/bill.jpeg';
import lorry from '../Images/lorry.jpeg';
import money from '../Images/money.jpeg';
import packing from '../Images/packing.jpeg';
import payment from '../Images/payment.jpeg';
import PBcard from '../Images/PB-card.jpeg';
import quot from '../Images/quot.jpeg';
import survey from '../Images/survey.jpeg';
import vehicle from '../Images/vehicle.jpeg';


export default function DocumentSummary() {
    return (
        <div className='DocumentSummaryMain'>
            <div className='DocumentSummarySub'>
                <h2 className='title'>Document Summary</h2>
                <p className='borderbottomx'>&#160;</p>

                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={quot} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Quotation<br /><small>Showing total Quotation</small></p>
                        <span className='DocumentSummaryButton'>0</span>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={survey} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Survey List<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={packing} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Packing List<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>

                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={lorry} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Lorry Receipt<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={vehicle} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Vehicle Condition<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={bill} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Bill<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={money} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Money Receipt<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
                <div className='DocumentSummaryHead'>
                    <div className='DocumentSummaryHeadSub'>
                        <p className='imageD'><img src={payment} alt="" width={35}></img></p>
                        <p className='DocumentSummaryListItem'>Payment Voucher<br /><small>Showing Total Document</small></p>
                        <button className='DocumentSummaryButton'>0</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
