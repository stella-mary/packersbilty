import { useState } from 'react'
// import './App.css';
import PaymentList from './Payment/PaymentList/PaymentList';
import PaymentDetails from './Payment/PaymentDetails/PaymentDetails'

const PaymentPage = () => {

    const [userInfo, setUserInfo] = useState({
        PaymentVoucherNumber: '',
        PaymentVoucherDate: '',
        PaymentRecevierName: '',
        PaymentReceiverPhone: '',
        PaymentType: '',
        PaymentVoucherAmount: '',
        PaymentMode: '',
        PaymentAccount: '',
        PaymentRemark: '',

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
        console.log(userInfo)
        // setSteps(steps + 1)
        setUserInfo(userInfo)
        alert("quotationformsubmitted")

    }

    return (
        <div>
            <PaymentList />
            <PaymentDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div >
    )
}

export default PaymentPage