
import './SurveyList.css'
import { useNavigate } from 'react-router-dom'

export default function SurveyList() {

    const navigate = useNavigate()

    function movetoNewSurveyList() {
        navigate("/NewSurveyList")
    }

    return (
        <div className='SurveyS'>
            <div className='SurveyList'>
                <p className='SurveyListMain'>Add Quotation List</p>
                <p onClick={movetoNewSurveyList} className='SurveyListMain'>Add Survey List</p>
                <p className='SurveyListMain'>Add Packing List</p>
                <p className='SurveyListMain'>Add Lorry Receipt (LR)</p>
                <p className='SurveyListMain'>Add Vehicle Condition</p>
                <p className='SurveyListMain'>Add Bill</p>
                <p className='SurveyListMain'>Add Money Receipt</p>
                <p className='SurveyListMain'>Add Payment Voucher</p>
            </div>
            <div className='SurveyListHead'>
                <p className='SurveyListPara'>ADD NEW SURVEY LIST</p>
                <p className='SurveyListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
