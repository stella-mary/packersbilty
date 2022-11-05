import React from 'react'
import './NewDesign.css'
import { BiNews } from "react-icons/bi";

export default function NewDesign() {
    return (
        <div className="NewDesignMain">
            <div className="NewDesignSub">
                <ul className="NewDesignSubSub">
                    {/* <Link to="/" className="link"> */}
                    <li className="NewDesignTitle">
                        <BiNews className="NewDesignIcon" />
                        <p className="">20+ New Designs<br /><small>Select Quotation Design/Quotation Setting</small></p>
                    </li>
                    {/* </Link> */}
                </ul>
            </div>
        </div>
    )
}

