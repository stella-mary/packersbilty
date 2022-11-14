import React from 'react'
// import './App.css';
import Quotation from './Quotation/QuotationList/Quotation';
import QuotationDetails from './Quotation/QuotationDetails/QuotationDetails';
import QuotationMoveFrom from './Quotation/QuotationMove/QuotationMoveFrom';
import QuotationMoveTo from './Quotation/QuotationMoveTo/QuotationMoveTo';
import QuotationPayment from './Quotation/QuotationPayment/QuotationPayment';
import QuotationInsurance from './Quotation/QuotationInsurance/QuotationInsurance';
import QuotationVehicle from './Quotation/QuotationVehicle/QuotationVehicle';
import QuotationOther from './Quotation/QuotationOther/QuotationOther';
import QuotationItem from './Quotation/QuotationItem/QuotationItem';


export default function Pages() {
    return (

        <div className="container">
            <Quotation />
            <QuotationDetails />
            <QuotationMoveFrom />
            <QuotationMoveTo />
            <QuotationPayment />
            <QuotationInsurance />
            <QuotationVehicle />
            <QuotationOther />
            <QuotationItem />
        </div >
    )
}
