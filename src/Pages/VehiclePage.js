import { useState } from 'react'
// import './App.css';
import VehicleList from './Vehicle/VehicleList/VehicleList';
import VehicleCondition from './Vehicle/VehicleCondition/VehicleCondition'
import VehicleDetails from './Vehicle/VehicleDetails/VehicleDetails'
import VehicleDent from './Vehicle/VehicleDent/VehicleDent'
import VehicleAccessories from './Vehicle/VehicleAccessories/VehicleAccessories'


const VehiclePage = () => {
    const [userInfo, setUserInfo] = useState({
        quotionNumber: '',
        email: '',
        quotation: '',
        movingType: '',
        companyParty: '',
        partyName: '',
        phone: '',
        date: '',
        packingDate: '',
        deliveryDate: '',
        country: '',
        states: '',
        city: '',
        pincode: '',
        address: '',
        floor: '',
        lift: '',
        fcountry: '',
        fstates: '',
        fcity: '',
        fpincode: '',
        faddress: '',
        ffloor: '',
        flift: '',
        freightCharge: '',
        AdvancePaid: '',
        packingCharge: '',
        unPackingCharge: '',
        loadingCharge: '',
        unLoadingCharge: '',
        packingMaterialCharge: '',
        storageCharge: '',
        carTPT: '',
        miscellCharge: '',
        otherCharge: '',
        stCharge: '',
        greenTax: '',
        surCharge: '',
        GSTQuote: '',
        GST: '',
        GSTType: '',
        Remark: '',
        discount: '',
        insuranceType: '',
        insuranceCharge: '',
        fGST: '',
        declaration: '',
        finsuranceType: '',
        finsuranceCharge: '',
        fGst: '',
        fdeclaration: '',
        load: '',
        down: '',
        fload: '',
        need: '',
        partName: '',
        quantity: '',
        fvalue: '',
        fremark: '',
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
            <VehicleList />
            <VehicleCondition userInfo={userInfo} handleOnChange={handleOnChange} />
            <div className='containerSub'>
                <VehicleDetails userInfo={userInfo} handleOnChange={handleOnChange} />
                <VehicleDent userInfo={userInfo} handleOnChange={handleOnChange} />
                <VehicleAccessories userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div >
    )
}

export default VehiclePage
