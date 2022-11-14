import React from 'react'
import Subscribe from './Subscribe/Subscribe'
import MainItems from './MainItems/MainItems'
import NewDesign from './NewDesign/NewDesign';
import DocumentSummary from './DocumentSummary/DocumentSummary';
import DocumentChat from './DocumentChat/DocumentChat';
import PackDate from './PackDate/PackDate'
import AnalyticsQuto from './AnalyticsQuto/AnalyticsQuto'
import Copyright from './Copyright/Copyright'


export default function Home() {
    return (
        <div>
            <div className="container">
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
        </div>
    )
}

