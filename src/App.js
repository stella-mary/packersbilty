import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar'
import Subscribe from './components/Subscribe/Subscribe'
import MainItems from './components/MainItems/MainItems'
import NewDesign from './components/NewDesign/NewDesign';
import DocumentSummary from './components/DocumentSummary/DocumentSummary';
import DocumentChat from './components/DocumentChat/DocumentChat';
import PackDate from './components/PackDate/PackDate'
import AnalyticsQuto from './components/AnalyticsQuto/AnalyticsQuto'
import Copyright from './components/Copyright/Copyright'
import Pages from './Pages/Pages'
import Home from './components/Home'
// import Quotation from './Pages/Quotation/QuotationList/Quotation';
// import QuotationDetails from './Pages/Quotation/QuotationDetails/QuotationDetails';
// import QuotationMoveFrom from './Pages/Quotation/QuotationMove/QuotationMoveFrom';
// import QuotationMoveTo from './Pages/Quotation/QuotationMoveTo/QuotationMoveTo';
// import QuotationPayment from './Pages/Quotation/QuotationPayment/QuotationPayment';
// import QuotationInsurance from './Pages/Quotation/QuotationInsurance/QuotationInsurance';
// import QuotationVehicle from './Pages/Quotation/QuotationVehicle/QuotationVehicle';
// import QuotationOther from './Pages/Quotation/QuotationOther/QuotationOther';
// import QuotationItem from './Pages/Quotation/QuotationItem/QuotationItem';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className="container">
          <TopBar />
          <div className='containerSub'>
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={<Home />}
                />
                <Route path="Quotation" element={<Pages />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default App;
