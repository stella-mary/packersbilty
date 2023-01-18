import React from 'react'
import './AnalyticsQuto.css'
import analyticsquto from '../Images/analyticsquto.png';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'lightgreen', 'black'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 255, 0)',
                'rgba(0, 64, 0)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 255, 0)',
                'rgba(0, 64, 0)',
            ],
            // borderWidth: -1,

        },
    ],
};


export default function AnalyticsQuto() {
    return (
        <div className='AnalyticsQutoMain'>
            <div className='AnalyticsQutoSub'>
                <h2 className='title'>30 Days Analytics of Quotation Generate</h2>
                <p className='borderbottomx'>&#160;</p>
                <div className='AnalyticsQutoSubSub'>
                    <Pie data={data} />
                </div>
            </div>
        </div >
    )
}
