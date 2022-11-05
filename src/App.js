import './App.css';
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



function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <TopBar />
        <div className='containerSub'>
          <Subscribe />
          <MainItems />
        </div>
        <NewDesign />
        <div className="containerSub">
          <DocumentSummary />
          <DocumentChat />
          <PackDate />
        </div>
        <div className="container">
          <AnalyticsQuto />
        </div>
        <Copyright />
      </div>
    </div >
  );
}

export default App;
