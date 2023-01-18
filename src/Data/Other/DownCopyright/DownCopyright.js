import React from 'react'
import './Copyright.css'
import { AiFillHeart } from "react-icons/ai";

export default function Copyright() {
    return (
        <div className='Copyright'>
            <div className='CopyrightMain'>
                <p className="Copyrightleft">Copyright &169; 2020-2022 <span className='colorb'>PackersBilty</span></p>
                <p className="Copyrightright">Crafted with <span className='colorr'><AiFillHeart /></span> by <a href="https://www.jsnj.in/">JAI SHREE NATH JI INFOMEDIA(JSN INFOMEDIA)</a></p>
            </div>
        </div>
    )
}

