import React from 'react'
import "./NewVehicleData.css";
import NewVehicle from '../../Images/NewVehicle.png';
import { useNavigate } from 'react-router-dom';


export default function NewVehicleList() {

    const navigate = useNavigate()

    function movetobackVehicle() {
        navigate("/Vehicle")
    }


    return (
        <div className='ContainerSurvey'>
            <div className='ContainerSurveyMain'>
                <h1 class="SurveyTitle">Vehicle List</h1>
                <p class="SurveyRight">Total Vehicle List: 0</p>
            </div>
            <p class="SurveyPara">All the changes made in the survey list linked to the quotation will also be changed in the quotation - (कोटेशन से जुड़ी सर्वे लिस्ट में किये गए सभी परिवर्तन कोटेशन में भी बदल जाएंगे)</p>
            <div className='ContainerSurveySub'>
                <p className='imageSurvey'><img src={NewVehicle} alt="" width={250}></img></p>
                <p className='SurveyCenter'>Add New Data</p>
                <p className='SurveyCenterM'>Generate Your First Document & Start Managing Your Business Digitally
                </p>
                <hr />
                <button onClick={movetobackVehicle} className='SurveyButton'>Add New Vehicle List</button>
            </div>
        </div>
    )
}
