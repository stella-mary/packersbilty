import './PaymentList.css'
import { useNavigate } from 'react-router-dom'

export default function PaymentList() {

    const navigate = useNavigate()

    function movetoNewPaymentList() {
        navigate("/NewPaymentList")
    }


    return (
        <div className='PaymentS'>
            <div className='PaymentList'>
                <p className='PaymentListMain'>Add Quotation List</p>
                <p className='PaymentListMain'>Add Survey List</p>
                <p className='PaymentListMain'>Add Packing List</p>
                <p className='PaymentListMain'>Add Lorry Receipt (LR)</p>
                <p className='PaymentListMain'>Add Vehicle Condition</p>
                <p className='PaymentListMain'>Add Bill</p>
                <p className='PaymentListMain'>Add Money Receipt</p>
                <p onClick={movetoNewPaymentList} className='PaymentListMain'>Add Payment Voucher</p>
            </div>
            <div className='PaymentListHead'>
                <p className='PaymentListPara'>ADD NEW PAYMENT VOUCHER</p>
                <p className='PaymentListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
