import { useState, useEffect } from 'react'
// import './App.css';
import SurveyList from './Survey/SurveyList/SurveyList';
import SurveyDetails from './Survey/SurveyDetails/SurveyDetails'
import SurveyItem from './Survey/SurveyItem/SurveyItem'
import { navigate, useNavigate } from "react-router-dom";
import axios from 'axios';


const SurveyPage = () => {
    const [userInfo, setUserInfo] = useState({
        surveyName: '',
        surveyPhone: '',
        surveyNo: '',
        surveyDate: '',
        surveyMoveFrom: '',
        surveyMoveTo: '',
        surveyVehicle: '',
        surveyItem: '',
        surveyQuantity: '',
        surveyValue: '',
        surveyRemark: '',
    })


    const [steps, setSteps] = useState(1)

    const nextStep = () => {
        setSteps(steps + 1)
    }

    const prevStep = () => {
        setSteps(steps - 1)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleSubmit = () => {
        // console.log(userInfo)
        // // setSteps(steps + 1)
        // setUserInfo(userInfo)
        // alert("quotationformsubmitted")

        // setUserInfo("")

        axios.post('http://localhost:6005/packing', {
            surveyName: userInfo.surveyName,
            surveyPhone: userInfo.surveyPhone,
            surveyNo: userInfo.surveyNo,
            surveyDate: userInfo.surveyDate,
            surveyMoveFrom: userInfo.surveyMoveFrom,
            surveyMoveTo: userInfo.surveyMoveTo,
            surveyVehicle: userInfo.surveyVehicle,
            surveyItem: userInfo.surveyItem,
            surveyQuantity: userInfo.surveyQuantity,
            surveyValue: userInfo.surveyValue,
            surveyRemark: userInfo.surveyRemark,

        }).then((response) => {
            console.log(response)
            // navigate("/Attendence")
        })

        // setFormErrors(validate(register));
        // let newFormValue = {
        //     id: register.length + 1,
        //     name: name,
        //     mobile: mobile,
        //     email: email,
        //     city: city,
        //     collegeName: collegeName,
        //     attendence: attendence,


        // };
        // setRegister([...register, newFormValue])
        // setName("")
        // setMobile("")
        // setEmail("")
        // setCity("")
        // setCollegeName("")
        // setAttendence("")
        setUserInfo("")
    }

    const getAllSurvey = () => {
        axios.get('http://localhost:6005/packing').then((response) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        getAllSurvey();
    }, []);

    return (
        <div>
            <SurveyList />
            <SurveyDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <SurveyItem userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div >
    )
}


export default SurveyPage