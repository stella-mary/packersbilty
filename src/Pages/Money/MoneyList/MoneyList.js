import './MoneyList.css'
import { useNavigate } from 'react-router-dom'

export default function MoneyList() {

    const navigate = useNavigate()

    function movetoNewMoneyList() {
        navigate("/NewMoneyList")
    }

    return (
        <div className='MoneyS'>
            <div className='MoneyList'>
                <p className='MoneyListMain'>Add Quotation</p>
                <p className='MoneyListMain'>Add Survey List</p>
                <p className='MoneyListMain'>Add Packing List</p>
                <p className='MoneyListMain'>Add Lorry Receipt (LR)</p>
                <p className='MoneyListMain'>Add Vehicle Condition</p>
                <p className='MoneyListMain'>Add Bill</p>
                <p onClick={movetoNewMoneyList} className='MoneyListMain'>Add Money Receipt</p>
                <p className='MoneyListMain'>Add Payment Voucher</p>
            </div>
            <div className='MoneyListHead'>
                <p className='MoneyListPara'>ADD NEW MONEY RECEIPT</p>
                <p className='MoneyListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
