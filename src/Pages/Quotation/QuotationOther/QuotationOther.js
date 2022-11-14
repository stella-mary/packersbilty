import React, { useState, useCallback } from 'react';
import './QuotationOther.css'
import { BiCaretRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


export default function QuotationOther() {

    const [show, setShow] = useState(false);

    return (
        <div className='QuotationOtherMain'>
            <div className='QuotationOtherHead'>Other Details (अन्य जानकारी)
                <button className='btn' onClick={() => setShow((show) => !show)}>{show ? <BiCaretDown /> : <BiCaretRight />}</button></div>
            {show ? <p>{<div className='QuotationOtherForm'>
                <p className='QuotationOtherFormMain'>IS THERE EASY ACCESS FOR LOAD & UNLOADING AT ORIGIN & DESINATION (क्या लोड और अनलोडिंग आसान है?)</p>
                <select>
                    <option value='Local'>Yes</option>
                    <option value='Local'>No</option>
                    <option value='Local'>May be</option>
                </select>
                <p className='QuotationOtherFormMain'>SHOULD ANY ITEMS BE GOT DOWN THROUGH BALCONY ETC. (क्या किसी सामान को बालकनी से नीचे उतारना हैं?)<br /><small>eg.Almirah, Bed etc.</small></p>
                <textarea></textarea>
                <p className='QuotationOtherFormMain'>ARE THERE ANY RESTRICTIONS FOR LOADING/UNLOADING AT ORIGIN/DESINATION (क्या लोडिंग/अनलोडिंग वाले स्थान पर कोई रोकटोक हैं?)</p>
                <select>
                    <option value='Local'>Yes</option>
                    <option value='Local'>No</option>
                    <option value='Local'>May be</option>
                </select>
                <p className='QuotationOtherFormMain'>DO YOU HAVE ANY SPECIAL NEEDS OR CONCERNS (अन्य जरूरी आवश्यकताएं?)</p>
                <textarea></textarea>
            </div>}</p> : null}
        </div >

    )
}