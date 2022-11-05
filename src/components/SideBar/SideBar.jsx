import React from 'react-dom'
import './SideBar.css'
import PB from '../Images/PB.png';
import { CgToolbox } from "react-icons/cg";
import { RiMacLine } from "react-icons/ri";
import { BiTaxi } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiRedPacketFill } from 'react-icons/ri'
import { TiUserOutline } from 'react-icons/ti'
import { AiOutlineDownload } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { HiPhone } from "react-icons/hi";
import { BsFillPencilFill } from 'react-icons/bs'
import { MdHistoryEdu } from 'react-icons/md'
import { MdBusiness } from 'react-icons/md'
import { FaBars } from "react-icons/fa";
import { RiBillLine } from 'react-icons/ri'
import { MdMoney } from 'react-icons/md'
import { IoBanOutline } from "react-icons/io5";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className='sidebarWrapperTitle'>
                    <h1 className="sidebarTitle"><img src={PB} width={25} alt="image" /><span className='space' />Packers Bilty<span className='space' /><small><IoBanOutline /></small></h1>
                </div>
                <div className='sidebarScroll'>
                    <div className="sidebarMenu">
                        <ul className="sidebarList">
                            {/* <Link to="/" className="link"> */}
                            <li className="sidebarListItemTitle">
                                <RiMacLine className="sidebarIcon" />
                                Dashboard
                            </li>
                            {/* </Link> */}
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">DOCUMENTS</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <CgToolbox className="sidebarIcon" />
                                Quotation
                            </li>
                            <li className="sidebarListItem">
                                <FaBars className="sidebarIcon" />
                                Survey List
                            </li>
                            {/* <Link to="/users" className="link"> */}
                            <li className="sidebarListItem">
                                <RiRedPacketFill className="sidebarIcon" />
                                Packing List
                            </li>
                            {/* </Link> */}
                            {/* <Link to="/products" className="link"> */}
                            <li className="sidebarListItem">
                                <BiTaxi className="sidebarIcon" />
                                Lorry Receipt(LR)
                            </li>
                            {/* </Link> */}
                            <li className="sidebarListItem">
                                <BiTaxi className="sidebarIcon" />
                                Vehicle Condition
                            </li>
                            <li className="sidebarListItem">
                                <RiBillLine className="sidebarIcon" />
                                Bill
                            </li>
                            <li className="sidebarListItem">
                                <MdMoney className="sidebarIcon" />
                                Money Receipt
                            </li>
                            <li className="sidebarListItem">
                                <MdMoney className="sidebarIcon" />
                                Payment Voucher
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">SETTINGS</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <TiUserOutline className="sidebarIcon" />
                                Profile
                            </li>
                            <li className="sidebarListItem">
                                <MdBusiness className="sidebarIcon" />
                                Business Details
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">HELPLINE</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <HiPhone className="sidebarIcon" />
                                +91-827-827-9578
                            </li>
                            <li className="sidebarListItem">
                                <AiOutlineWhatsApp className="sidebarIcon" />
                                Whatapp Support
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">OTHER</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <AiOutlineDownload className="sidebarIcon" />
                                Download Data
                            </li>
                            <li className="sidebarListItem">
                                <BsFillPencilFill className="sidebarIcon" />
                                Subscribe
                            </li>
                            <li className="sidebarListItem">
                                <MdHistoryEdu className="sidebarIcon" />
                                Subscription History
                            </li>
                            <li className="sidebarListItem">
                                <RiLogoutCircleRLine className="sidebarIcon" />
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
}
