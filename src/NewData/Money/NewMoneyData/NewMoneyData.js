import React from 'react'
import "./NewMoneyData.css";
import NewMoney from '../../Images/NewMoney.png';
import { useNavigate } from 'react-router-dom';


export default function NewSurveyList() {

    const navigate = useNavigate()

    function movetobackMoney() {
        navigate("/Money")
    }



    return (
        <div className='ContainerSurvey'>
            <div className='ContainerSurveyMain'>
                <h1 class="SurveyTitle">Money List</h1>
                <p class="SurveyRight">Total Money List: 0</p>
            </div>
            <p class="SurveyPara">All the changes made in the survey list linked to the quotation will also be changed in the quotation - (कोटेशन से जुड़ी सर्वे लिस्ट में किये गए सभी परिवर्तन कोटेशन में भी बदल जाएंगे)</p>
            <div className='ContainerSurveySub'>
                <p className='imageSurvey'><img src={NewMoney} alt="" width={250}></img></p>
                <p className='SurveyCenter'>Add New Data</p>
                <p className='SurveyCenterM'>Generate Your First Document & Start Managing Your Business Digitally
                </p>
                <hr />
                <button onClick={movetobackMoney} className='SurveyButton'>Add New Money List</button>
            </div>
        </div>
    )
}
