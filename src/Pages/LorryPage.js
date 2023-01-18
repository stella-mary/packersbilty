import { useState } from 'react'
// import './App.css';
import LorryList from './Lorry/LorryList/LorryList';
import LorryDetails from './Lorry/LorryDetails/LorryDetails'
import LorryMoveFrom from './Lorry/LorryMoveFrom/LorryyMoveFrom'
import LorryMoveTo from './Lorry/LorryMoveTo/LorryMoveTo'
import LorryPackage from './Lorry/LorryPackage/LorryPackage'
import LorryInsurance from './Lorry/LorryInsurance/LorryInsurance'
import LorryPayment from './Lorry/LorryPayment/LorryPayment'
import LorryCharges from './Lorry/LorryCharges/LorryCharges';


const LorryPage = () => {
    const [userInfo, setUserInfo] = useState({
        LRNumber: '',
        LRDate: '',
        LRPickup: '',
        LRDelivered: '',
        LRVehicleNo: '',
        LRRiskType: '',
        LRFromConsignorName: '',
        LRFromConsignorPhone: '',
        LRFromGSTIN: '',
        LRFromCountry: '',
        LRFromState: '',
        LRFromCity: '',
        LRFromPincode: '',
        LRFromAddress: '',




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
            <LorryList />
            <LorryDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <div className='containerSub'>
                <LorryMoveFrom userInfo={userInfo} handleOnChange={handleOnChange} />
                <LorryMoveTo userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <div className='containerSubSubSub'>
                <LorryPackage userInfo={userInfo} handleOnChange={handleOnChange} />
                <LorryInsurance userInfo={userInfo} handleOnChange={handleOnChange} />
                <LorryPayment userInfo={userInfo} handleOnChange={handleOnChange} />
                <LorryCharges userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div >
    )
}

export default LorryPage