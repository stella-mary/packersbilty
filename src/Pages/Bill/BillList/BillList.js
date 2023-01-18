import './BillList.css'
import { useNavigate } from 'react-router-dom'

export default function BillList() {

    const navigate = useNavigate()

    function movetoNewBillList() {
        navigate("/NewBillList")
    }

    return (
        <div className='BillS'>
            <div className='BillList'>
                <p className='BillListMain'>Add Quotation</p>
                <p className='BillListMain'>Add Survey List</p>
                <p className='BillListMain'>Add Packing List</p>
                <p className='BillListMain'>Add Lorry Receipt (LR)</p>
                <p className='BillListMain'>Add Vehicle Condition</p>
                <p onClick={movetoNewBillList} className='BillListMain'>Add Bill</p>
                <p className='BillListMain'>Add Money Receipt</p>
                <p className='BillListMain'>Add Payment Voucher</p>
            </div>
            <div className='BillListHead'>
                <p className='BillListPara'>ADD NEW BILL</p>
                <p className='BillListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
