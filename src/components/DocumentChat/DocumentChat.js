import React from 'react'
import './DocumentChat.css'
import chat from '../Images/chat.png';
import { AiOutlineMenu } from "react-icons/ai";


export default function DocumentChat() {
    return (
        <div className='DocumentChatMain'>
            <div className='DocumentChatSub'>
                <h2 className='title'>This Month Documents Chart</h2>
                <p className='borderbottomx'>&#160;</p>
                <p className='right'><AiOutlineMenu /></p>
                <p className='imageC'><img src={chat} alt="" width={250} height={700}></img></p>
            </div>
        </div >

    )
}
