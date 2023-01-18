import { useState } from 'react'
// import './App.css';
import BillList from './Bill/BillList/BillList';
import BillDetails from './Bill/BillDetails/BillDetails'
import BillBilling from './Bill/BillBilling/BillBilling'
import BillConsignor from './Bill/BillConsignor/BillConsignor'
import BillConsignee from './Bill/BillConsignee/BillConsignee'
import BillPayment from './Bill/BillPayment/BillPayment'
import BillPackage from './Bill/BillPackage/BillPackage'
import BillInsurance from './Bill/BillInsurance/BillInsurance'
import BillVehicle from './Bill/BillVehicle/BillVehicle'

const BillPage = () => {
    const [userInfo, setUserInfo] = useState({
        billNumber: '',
        billPartyName: '',
        billLRNumber: '',
        billShipment: '',
        billInvoiceDate: '',
        billDeliveryDate: '',
        billMoving: '',
        billMoveFrom: '',
        billMoveTo: '',
        BillVehicle: '',
        billName: '',
        billPhone: '',
        billGST: '',
        billCountry: '',
        billState: '',
        billCity: '',
        blllPincode: '',
        billAddress: '',
        billConsignoreName: '',
        billConsignorePhone: '',
        billGSTIn: '',
        fbillCountry: '',
        fbillState: '',
        fbillCity: '',
        fbillPincode: '',
        fbillAddress: '',
        billConsigeeName: '',
        billConsigeePhone: '',
        ffbillGSTIn: '',
        ffbillCountry: '',
        ffbillState: '',
        ffbillCity: '',
        ffbillPincode: '',
        ffbillAddress: '',

        fffreightCharge: '',
        ffAdvancePaid: '',
        ffpackingCharge: '',
        ffunPackingCharge: '',
        ffloadingCharge: '',
        ffunLoadingCharge: '',
        ffpackingMaterialCharge: '',
        ffstorageCharge: '',
        ffcarTPT: '',
        ffmiscellCharge: '',
        ffotherCharge: '',
        ffstCharge: '',
        ffgreenTax: '',
        ffsurCharge: '',
        ffGSTQuote: '',
        ffGST: '',
        ffSTType: '',
        ffRemark: '',
        ffdiscount: '',
        ffinsuranceType: '',
        ffinsuranceCharge: '',
        fffGST: '',
        ffdeclaration: '',
        fffinsuranceType: '',
        fffinsuranceCharge: '',
        fffGst: '',
        fffdeclaration: '',
        billpackage: '',
        billdescription: '',
        billweight: '',
        billremark: '',


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
            <BillList />
            <BillDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <div className='containerSub'>
                <BillBilling userInfo={userInfo} handleOnChange={handleOnChange} />
                <BillConsignor userInfo={userInfo} handleOnChange={handleOnChange} />
                <BillConsignee userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <div className='containerSub'>
                <BillPayment userInfo={userInfo} handleOnChange={handleOnChange} />
                <BillPackage userInfo={userInfo} handleOnChange={handleOnChange} />
                <BillInsurance userInfo={userInfo} handleOnChange={handleOnChange} />
                <BillVehicle userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <BillVehicle userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div>
    )
}

export default BillPage
