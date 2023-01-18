import './Quotation.css'
import { useNavigate } from 'react-router-dom'

export default function QuotationList() {

    const navigate = useNavigate()

    function movetoNewQuotationList() {
        navigate("/NewQuotationList")
    }

    return (
        <div className='QuotationS'>
            <div className='QuotationList'>
                <p onClick={movetoNewQuotationList} className='QuotationListMain'>Quotation List</p>
                <p className='QuotationListMain'>Add Survey List</p>
                <p className='QuotationListMain'>Add Packing List</p>
                <p className='QuotationListMain'>Add Lorry Receipt (LR)</p>
                <p className='QuotationListMain'>Add Vehicle Condition</p>
                <p className='QuotationListMain'>Add Bill</p>
                <p className='QuotationListMain'>Add Money Receipt</p>
                <p className='QuotationListMain'>Add Payment Voucher</p>
            </div>
            <div className='QuotationListHead'>
                <p className='QuotationListPara'>QUOTATION</p>
                <p className='QuotationListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
