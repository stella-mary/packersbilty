import './DownLoad.css'
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


export default function DownLoad() {

    return (
        <div className='DownLoadS'>
            <div className='DownLoadHead'>
                <p className='DownLoadPara'>DOWNLOAD DATA</p>
                <p className='DownLoadParaP'>DOWNLOAD YOUR ALL DATA IN CSV/EXCEL FORMAT</p>
            </div>
            <div className='DownLoadSub'>
                <div className='DownLoadSubSub'>
                    <p className='image'><CgToolbox className="DownIcon" /></p>
                    <p className='ListItemL'>Quotation</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL QUOTATION: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><FaBars className="DownIcon" /></p>
                    <p className='ListItemL'>Survey List</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL SURVEY LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><RiRedPacketFill className="DownIcon" /></p>
                    <p className='ListItemL'>Packing List</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL PACKING LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><BiTaxi className="DownIcon" /></p>
                    <p className='ListItemL'>Lorry Receipt</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL LORRY LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><BiTaxi className="DownIcon" /></p>
                    <p className='ListItemL'>Vehicle Condition</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL VEHICLE LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><RiBillLine className="DownIcon" /></p>
                    <p className='ListItemL'>Bill</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL BILL LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><RiBillLine className="DownIcon" /></p>
                    <p className='ListItemL'>Money Receipt</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL MONEY LIST: 0</button>
                </div>
                <div className='DownLoadSubSub'>
                    <p className='image'><MdMoney className="DownIcon" /></p>
                    <p className='ListItemL'>Payment Voucher</p>
                    <p className='ListItemD'>Click Here To DownLoad</p>
                    <button className='DownLoadButton'>TOTAL PAYMENT LIST: 0</button>
                </div>
            </div>
        </div>
    )
}
