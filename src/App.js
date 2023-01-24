import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import QuotationPage from './Pages/QuotationPage'
import SurveyPage from './Pages/SurveyPage'
import PackingPage from './Pages/PackingPage'
import PaymentPage from './Pages/PaymentPage'
import LorryPage from './Pages/LorryPage'
import BillPage from './Pages/BillPage'
import MoneyPage from './Pages/MoneyPage'
import VehiclePage from './Pages/VehiclePage'
import BillNewData from './NewData/BillNewData'
import QuotationNewData from './NewData/QuotationNewData'
import SurveyNewData from './NewData/SurveyNewData'
import LorryNewData from './NewData/LorryNewData'
import PaymentNewData from './NewData/PaymentNewData'
import PackingNewData from './NewData/PackingNewData'
import VehicleNewData from './NewData/VehicleNewData'
import MoneyNewData from './NewData/BillNewData'
import DownLoad from './Data/Other/DownLoad/DownLoad';

import Home from './components/Home'
import SaveQuotation from './Save/Quotation/SaveQuotation';
import QuotationViewPdf from './Save/QuotationViewPdf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className="container">
          <TopBar />
          {/* <div className='containerSub'> */}
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Quotation" element={<QuotationPage />} />
              <Route path="Survey" element={<SurveyPage />} />
              <Route path="Packing" element={<PackingPage />} />
              <Route path="Lorry" element={<LorryPage />} />
              <Route path="Vehicle" element={<VehiclePage />} />
              <Route path="Bill" element={<BillPage />} />

              <Route path="Money" element={<MoneyPage />} />
              <Route path="Payment" element={<PaymentPage />} />

              <Route path="NewQuotationList" element={<QuotationNewData />} />
              <Route path="NewSurveyList" element={<SurveyNewData />} />

              <Route path="NewPackingList" element={<PackingNewData />} />

              <Route path="NewVehicleList" element={<VehicleNewData />} />
              <Route path="NewBillList" element={<BillNewData />} />
              <Route path="NewMoneyList" element={<MoneyNewData />} />
              <Route path="NewPaymentList" element={<PaymentNewData />} />
              <Route path="DownLoad" element={<DownLoad />} />

              <Route path="SaveQuotation" element={<SaveQuotation />} />

              <Route path="LorryPage" element={<LorryPage />} />
              <Route path="BillPage" element={<BillPage />} />
              <Route path="MoneyPage" element={<MoneyPage />} />
              <Route path="VehiclePage" element={<VehiclePage />} />
              <Route path="PaymentPage" element={<PaymentPage />} />
              <Route path="QuotationPage" element={<QuotationPage />} />
              <Route path="QuotationNewData" element={<QuotationNewData />} />
              <Route path="QuotationViewPdf" element={<QuotationViewPdf />} />

            </Route>
          </Routes>
        </div>
        {/* </div> */}
      </BrowserRouter >
    </div >

  );
}

export default App;
