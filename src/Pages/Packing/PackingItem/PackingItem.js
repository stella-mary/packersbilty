import React, { useState, useCallback } from 'react';
import './PackingItem.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


const PackingItem = ({ userInfo, handleOnChange, }) => {


    const [show, setShow] = useState(true);

    return (
        <div className='PackingItemMain'>
            <div className='PackingItemHead'>Item / Particulars Details (सामान का विवरण)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='PackingItemForm'>
                <p className='PackingItemFormMain'>ITEM / PARTICULARS NAME (सामान का नाम)</p>
                <input
                    type="text"
                    name="packingItem" required
                    id="packingItem"
                    value={userInfo.packingItem}
                    onChange={handleOnChange}
                />

                <p className='PackingItemFormMain'>BOX NUMBER (बॉक्स नंबर)</p>
                <input
                    type="text"
                    name="packingBoxNumber" required
                    id="packingBoxNummber"
                    value={userInfo.packingBoxNumber}
                    onChange={handleOnChange}
                />
                <p className='PackingItemFormMain'>QUANTITY (संख्या)</p>
                <input
                    type="text"
                    name="packingQuantity"
                    id="packingQuantity"
                    value={userInfo.packingQuantity}
                    onChange={handleOnChange}
                />
                <p className='PackingItemFormMain'>VALUE (कीमत) (IN RUPEES)</p>
                <input
                    type="text"
                    name="packingValue"
                    id="packingValue"
                    value={userInfo.packingValue}
                    onChange={handleOnChange}
                />
                <p className='PackingItemFormMain'>REMARK (अन्य विवरण)</p>
                <input
                    type="text"
                    name="packingRemark"
                    id="packingRemark"
                    value={userInfo.packingRemark}
                    onChange={handleOnChange}
                />
                <button className='PackingItems'>ADD ITEM/PARTICULARS</button>
            </div>}</p> : null}
        </div >

    )
}

export default PackingItem