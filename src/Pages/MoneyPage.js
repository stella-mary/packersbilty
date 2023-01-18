import { useState, useEffect } from 'react'
// import './App.css';
import MoneyList from './Money/MoneyList/MoneyList';
import MoneyDetails from './Money/MoneyDetails/MoneyDetails'
import axios from 'axios';


const MoneyPages = () => {
    const [userInfo, setUserInfo] = useState({
        MoneyNumber: '',
        MoneyName: '',
        MoneyReceiptDate: '',
        MoneyBranch: '',
        MoneyPhone: '',
        MoneyReceiptDoc: '',
        MoneyBillDate: '',
        MoneyMoveFrom: '',
        MoneyMoveTo: '',
        MoneyPayment: '',
        MoneyReceiptAmount: '',
        MoneyPaymentMode: '',
        MoneyRemark: '',

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

        axios.post('http://localhost:6005/money', {
            MoneyNumber: userInfo.MoneyNumber,
            MoneyName: userInfo.MoneyName,
            MoneyReceiptDate: userInfo.MoneyReceiptDate,
            MoneyBranch: userInfo.MoneyBranch,
            MoneyPhone: userInfo.MoneyPhone,
            MoneyReceiptDoc: userInfo.MoneyReceiptDoc,
            MoneyBillDate: userInfo.MoneyBillDate,
            MoneyMoveFrom: userInfo.MoneyMoveFrom,
            MoneyMoveTo: userInfo.MoneyMoveTo,
            MoneyPayment: userInfo.MoneyPayment,
            MoneyReceiptAmount: userInfo.MoneyReceiptAmount,
            MoneyPaymentMode: userInfo.MoneyPaymentMode,
            MoneyRemark: userInfo.MoneyRemark,

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

    const getAllMoney = () => {
        axios.get('http://localhost:6005/money').then((response) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        getAllMoney();
    }, []);



    return (
        <div>
            <MoneyList />
            <MoneyDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div>
    )
}

export default MoneyPages