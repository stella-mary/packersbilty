import './LorryList.css'
import { useNavigate } from 'react-router-dom'

export default function LorryList() {

    const navigate = useNavigate()

    function movetoNewLorryList() {
        navigate("/NewLorryList")
    }

    return (
        <div className='LorryS'>
            <div className='LorryList'>
                <p className='LorryListMain'>Add Quotation List</p>
                <p className='LorryListMain'>Add Survey List</p>
                <p className='LorryListMain'>Add Packing List</p>
                <p onClick={movetoNewLorryList} className='LorryListMain'>Add Lorry Receipt (LR)</p>
                <p className='LorryListMain'>Add Vehicle Condition</p>
                <p className='LorryListMain'>Add Bill</p>
                <p className='LorryListMain'>Add Money Receipt</p>
                <p className='LorryListMain'>Add Payment Voucher</p>
            </div>
            <div className='LorryListHead'>
                <p className='LorryListPara'>ADD NEW LR</p>
                <p className='LorryListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
