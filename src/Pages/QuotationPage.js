import { useState, useEffect } from 'react'
// import './App.css';
import Quotation from './Quotation/QuotationList/Quotation';
import QuotationDetails from './Quotation/QuotationDetails/QuotationDetails';
import QuotationMoveFrom from './Quotation/QuotationMove/QuotationMoveFrom';
import QuotationMoveTo from './Quotation/QuotationMoveTo/QuotationMoveTo';
// import FinalStep from './Quotation/FinalStep/FinalStep';
import QuotationPayment from './Quotation/QuotationPayment/QuotationPayment';
import QuotationInsurance from './Quotation/QuotationInsurance/QuotationInsurance';
import QuotationVehicle from './Quotation/QuotationVehicle/QuotationVehicle';
import QuotationOther from './Quotation/QuotationOther/QuotationOther';
import QuotationItem from './Quotation/QuotationItem/QuotationItem';
import axios from 'axios';


const QuotationPages = () => {

    const [userInfo, setUserInfo] = useState({
        quotationNumber: '',
        quotationEmail: '',
        quotationQuotation: '',
        quotationMovingType: '',
        quotationCompanyParty: '',
        quotationPartyName: '',
        quotationPhone: '',
        quotationDate: '',
        quotationPackingDate: '',
        quotationDeliveryDate: '',
        quotationCountry: '',
        quotationStates: '',
        quotationCity: '',
        quotationPincode: '',
        quotationAddress: '',
        quotationFloor: '',
        quotationLift: '',
        quotationfCountry: '',
        quotationfStates: '',
        quotationfCity: '',
        quotationfPincode: '',
        quotationfAddress: '',
        quotationfFloor: '',
        quotationfLift: '',
        quotationfreightCharge: '',
        quotationAdvancePaid: '',
        quotationPackingCharge: '',
        quotationunPackingCharge: '',
        quotationLoadingCharge: '',
        quotationunLoadingCharge: '',
        quotationPackingMaterialCharge: '',
        quotationStorageCharge: '',
        quotationCarTPT: '',
        quotationMiscellCharge: '',
        quotationOtherCharge: '',
        quotationstCharge: '',
        quotationGreenTax: '',
        quotationSurCharge: '',
        quotationGSTQuote: '',
        quotationGST: '',
        quotationGSTType: '',
        quotationRemark: '',
        quotationDiscount: '',
        quotationInsuranceType: '',
        quotationInsuranceCharge: '',
        quotationfGST: '',
        quotationDeclaration: '',
        quotationfInsuranceType: '',
        quotationfInsuranceCharge: '',
        quotationffGst: '',
        quotationfDeclaration: '',
        quotationLoad: '',
        quotationDown: '',
        quotationfLoad: '',
        quotationNeed: '',
        quotationPartName: '',
        quotationQuantity: '',
        quotationfValue: '',
        quotationfRemark: '',
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
        // setUserInfo({ value: e.target.value });
        console.log(userInfo.quotationNumber)

    }



    // const getEmptyEntry = () => {
    //     return {
    //         personName: "",
    //         city: "",
    //         amount: "",
    //         gift: "",
    //         eventId: "",
    //     };
    // };
    // const [entries, setEntries] = useState(getEmptyEntry());

    const handleSubmit = (e) => {
        // e.preventDefault()
        axios.post('http://localhost:7005/quotation', {

            quotationPartName: userInfo.quotationPartName,
            quotationQuantity: userInfo.quotationQuantity,
            quotationfValue: userInfo.quotationfValue,
            quotationRemark: userInfo.quotationRemark,
            quotationEmail: userInfo.quotationEmail,
            quotationQuotation: userInfo.quotationQuotation,
            quotationMovingType: userInfo.quotationMovingType,
            quotationCompanyParty: userInfo.quotationCompanyParty,
            quotationPartyName: userInfo.quotationPartyName,
            quotationPhone: userInfo.quotationPhone,
            quotationDate: userInfo.quotationDate,
            quotationPackingDate: userInfo.quotationPackingDate,
            quotationDeliveryDate: userInfo.quotationDeliveryDate,
            quotationCountry: userInfo.quotationCountry,
            quotationStates: userInfo.quotationStates,
            quotationCity: userInfo.quotationCity,
            quotationPincode: userInfo.quotationPincode,
            quotationAddress: userInfo.quotationAddress,
            quotationFloor: userInfo.quotationFloor,
            quotationLift: userInfo.quotationLift,
            quotationfCountry: userInfo.quotationfCountry,
            quotationfStates: userInfo.quotationfStates,
            quotationfCity: userInfo.quotationfCity,
            quotationfPincode: userInfo.quotationfPincode,
            quotationfAddress: userInfo.quotationfAddress,
            quotationfFloor: userInfo.quotationfFloor,
            quotationfLift: userInfo.quotationfLift,
            quotationfreightCharge: userInfo.quotationfreightCharge,
            quotationAdvancePaid: userInfo.quotationAdvancePaid,
            quotationPackingCharge: userInfo.quotationPackingCharge,
            quotationunPackingCharge: userInfo.quotationunPackingCharge,
            quotationLoadingCharge: userInfo.quotationLoadingCharge,
            quotationunLoadingCharge: userInfo.quotationunLoadingCharge,
            quotationPackingMaterialCharge: userInfo.quotationPackingMaterialCharge,
            quotationStorageCharge: userInfo.quotationStorageCharge,
            quotationCarTPT: userInfo.quotationCarTPT,
            quotationMiscellCharge: userInfo.quotationMiscellCharge,
            quotationOtherCharge: userInfo.quotationOtherCharge,
            quotationstCharge: userInfo.quotationstCharge,
            quotationGreenTax: userInfo.quotationGreenTax,
            quotationSurCharge: userInfo.quotationSurCharge,
            quotationGSTQuote: userInfo.quotationGSTQuote,
            quotationGST: userInfo.quotationGST,
            quotationGSTType: userInfo.quotationGSTType,
            quotationRemark: userInfo.quotationRemark,
            quotationDiscount: userInfo.quotationDiscount,
            quotationInsuranceType: userInfo.quotationInsuranceType,
            quotationInsuranceCharge: userInfo.quotationInsuranceCharge,
            quotationfGST: userInfo.quotationfGST,
            quotationDeclaration: userInfo.quotationDeclaration,
            quotationfInsuranceType: userInfo.quotationfInsuranceType,
            quotationfInsuranceCharge: userInfo.quotationfInsuranceCharge,
            quotationffGst: userInfo.quotationffGst,
            quotationfDeclaration: userInfo.quotationfDeclaration,
            quotationLoad: userInfo.quotationLoad,
            quotationDown: userInfo.quotationDown,
            quotationfLoad: userInfo.quotationfLoad,
            quotationNeed: userInfo.quotationNeed,
            // quotationPartName: userInfo.quotationPartName,
            // quotationQuantity: userInfo.quotationQuantity,
            // quotationfValue: userInfo.quotationfValue,
            // quotationfRemark: userInfo.quotationfRemark,


        }).then((response) => {
            console.log(response)
            // navigate("/Attendence")
            console.log(response.data)
            alert("quotation form submitted")
        })


        setUserInfo("")
    }

    const getAllQuotation = () => {
        axios.get('http://localhost:7005/quotation').then((response) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        getAllQuotation();
    }, []);

    // console.log(userInfo)
    // // setSteps(steps + 1)
    // setUserInfo(userInfo)
    // alert("quotationformsubmitted")

    // setUserInfo("")

    // let newUserInfo = {
    //     id: userInfo.length + 1,
    //     quotionNumber: '',
    //     email: '',
    //     quotation: '',
    //     movingType: '',
    //     companyParty: '',
    //     partyName: '',
    //     phone: '',
    //     date: '',
    //     packingDate: '',
    //     deliveryDate: '',
    //     country: '',
    //     states: '',
    //     city: '',
    //     pincode: '',
    //     address: '',
    //     floor: '',
    //     lift: '',
    //     fcountry: '',
    //     fstates: '',
    //     fcity: '',
    //     fpincode: '',
    //     faddress: '',
    //     ffloor: '',
    //     flift: '',
    //     freightCharge: '',
    //     AdvancePaid: '',
    //     packingCharge: '',
    //     unPackingCharge: '',
    //     loadingCharge: '',
    //     unLoadingCharge: '',
    //     packingMaterialCharge: '',
    //     storageCharge: '',
    //     carTPT: '',
    //     miscellCharge: '',
    //     otherCharge: '',
    //     stCharge: '',
    //     greenTax: '',
    //     surCharge: '',
    //     GSTQuote: '',
    //     GST: '',
    //     GSTType: '',
    //     Remark: '',
    //     discount: '',
    //     insuranceType: '',
    //     insuranceCharge: '',
    //     fGST: '',
    //     declaration: '',
    //     finsuranceType: '',
    //     finsuranceCharge: '',
    //     fGst: '',
    //     fdeclaration: '',
    //     load: '',
    //     down: '',
    //     fload: '',
    //     need: '',
    //     partName: '',
    //     quantity: '',
    //     fvalue: '',
    //     fremark: '',
    // };

    // setUserInfo(getEmptyEntry());

    // localStorage.setItem(
    //     "userInfo",
    //     JSON.stringify([...userInfo, newUserInfo])
    // );




    return (

        <div>
            <Quotation />
            <QuotationDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <div className="containerSub">
                <QuotationMoveFrom userInfo={userInfo} handleOnChange={handleOnChange} />
                <QuotationMoveTo userInfo={userInfo} handleOnChange={handleOnChange} />
            </div>
            <div className='containerSubSub1'>
                <div className='containerSubSub2'>
                    <QuotationPayment userInfo={userInfo} handleOnChange={handleOnChange} />
                </div>
                <div className='containerSubSub3'>
                    <QuotationInsurance userInfo={userInfo} handleOnChange={handleOnChange} />
                    <QuotationVehicle userInfo={userInfo} handleOnChange={handleOnChange} />
                    <QuotationOther userInfo={userInfo} handleOnChange={handleOnChange} />
                </div>
            </div>
            <QuotationItem userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>

        </div >
    )
}



export default QuotationPages