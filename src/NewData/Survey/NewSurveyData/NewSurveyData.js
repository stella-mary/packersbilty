import React from 'react'
import "./NewSurveyData.css";
import NewSurvey from '../../Images/NewSurvey.png';
import { useNavigate } from 'react-router-dom';


export default function NewSurveyList() {

    const navigate = useNavigate()

    function movetobackSurvey() {
        navigate("/Survey")
    }

    return (
        <div className='ContainerSurvey'>
            <div className='ContainerSurveyMain'>
                <h1 class="SurveyTitle">Survey List</h1>
                <p class="SurveyRight">Total Survey List: 0</p>
            </div>
            <p class="SurveyPara">All the changes made in the survey list linked to the quotation will also be changed in the quotation - (कोटेशन से जुड़ी सर्वे लिस्ट में किये गए सभी परिवर्तन कोटेशन में भी बदल जाएंगे)</p>
            <div className='ContainerSurveySub'>
                <p className='imageSurvey'><img src={NewSurvey} alt="" width={250}></img></p>
                <p className='SurveyCenter'>Add New Data</p>
                <p className='SurveyCenterM'>Generate Your First Document & Start Managing Your Business Digitally
                </p>
                <hr />
                <button onClick={movetobackSurvey} className='SurveyButton'>Add New Survey List</button>
            </div>
        </div>
    )
}
