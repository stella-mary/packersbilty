import './PackingList.css'
import { useNavigate } from 'react-router-dom'

export default function PackingList() {

    const navigate = useNavigate()

    function movetoNewPackingList() {
        navigate("/NewPackingList")
    }

    return (
        <div className='PackingS'>
            <div className='PackingList'>
                <p className='PackingListMain'>Add Quotation</p>
                <p className='PackingListMain'>Add Survey List</p>
                <p onClick={movetoNewPackingList} className='PackingListMain'>Add Packing List</p>
                <p className='PackingListMain'>Add Lorry Receipt (LR)</p>
                <p className='PackingListMain'>Add Vehicle Condition</p>
                <p className='PackingListMain'>Add Bill</p>
                <p className='PackingListMain'>Add Money Receipt</p>
                <p className='PackingListMain'>Add Payment Voucher</p>
            </div>
            <div className='PackingListHead'>
                <p className='PackingListPara'>ADD NEW PACKING LIST</p>
                <p className='PackingListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
