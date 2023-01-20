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
            </Route>
            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Survey" element={<SurveyPage />} />
            </Route>
            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Packing" element={<PackingPage />} />
            </Route>
            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Lorry" element={<LorryPage />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Vehicle" element={<VehiclePage />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Bill" element={<BillPage />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Money" element={<MoneyPage />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="Payment" element={<PaymentPage />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewQuotationList" element={<QuotationNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewSurveyList" element={<SurveyNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewPackingList" element={<PackingNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewLorryList" element={<LorryNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewVehicleList" element={<VehicleNewData />} />
              <Route path="NewBillList" element={<BillNewData />} />
            </Route>


            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewMoneyList" element={<MoneyNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="NewPaymentList" element={<PaymentNewData />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="DownLoad" element={<DownLoad />} />
            </Route>

            <Route path="/">
              <Route
                index
                element={<Home />}
              />
              <Route path="/SaveQuotation" element={<SaveQuotation />} />
            </Route>

          </Routes>
        </div>
        {/* </div> */}
      </BrowserRouter >
    </div >

  );
}

export default App;
