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

import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const QuotationPages = () => {

    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const [quotationInfo, setQuotationInfo] = useState({
        items: [],
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
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setQuotationInfo({ ...quotationInfo, [name]: value })
        // setQuotationInfo({ value: e.target.value });
        console.log(quotationInfo.quotationNumber)

    }

    const getItemDetails = (e) => {
        // e.preventDefault()
        console.log("add items button clicked")
        setItems([...items, items])
        console.log(items)
    }


    const handleSubmit = (e) => {
        // e.preventDefault()
        axios.post('http://localhost:7005/quotation', quotationInfo)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                alert("quotation form submitted")
                navigate("/SaveQuotation")
            })

        setQuotationInfo("")
    }

    // const getAllQuotation = () => {
    //     axios.get('http://localhost:7005/quotation').then((response) => {
    //         console.log(response.data);
    //     });
    // };

    // useEffect(() => {
    //     getAllQuotation();
    // }, []);

    // console.log(quotationInfo)
    // // setSteps(steps + 1)
    // setQuotationInfo(quotationInfo)
    // alert("quotationformsubmitted")

    // setQuotationInfo("")

    // let newUserInfo = {
    //     id: quotationInfo.length + 1,
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

    // setQuotationInfo(getEmptyEntry());

    // localStorage.setItem(
    //     "quotationInfo",
    //     JSON.stringify([...quotationInfo, newUserInfo])
    // );


    function movetoSaveQuotation() {
        navigate("/VehiclePage")
    }


    return (

        <div>
            <Quotation />
            <QuotationDetails quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
            <div className="containerSub">
                <QuotationMoveFrom quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
                <QuotationMoveTo quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
            </div>
            <div className='containerSubSub1'>
                <div className='containerSubSub2'>
                    <QuotationPayment quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
                </div>
                <div className='containerSubSub3'>
                    <QuotationInsurance quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
                    <QuotationVehicle quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
                    <QuotationOther quotationInfo={quotationInfo} handleOnChange={handleOnChange} />
                </div>
            </div>
            <QuotationItem getItemDetails={getItemDetails} />
            <button className="quotationSubmit" type="submit" onClick={() => handleSubmit()}>SAVE QUOTATION <span className='arrow'><ArrowRightAltIcon /></span></button>
        </div >
    )
}



export default QuotationPages