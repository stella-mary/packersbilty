import React, { useState, useEffect, useRef } from 'react';
import './DocumentChat.css'
import chat from '../Images/chat.png';
import { AiOutlineMenu } from "react-icons/ai";
import { Line } from '@ant-design/charts';

// export default function DocumentChat() {

const DemoLine: React.FC = () => {
    const data = [
        {
            year: '0',
            value: 'Payment Voucher',
        },
        {
            year: '1',
            value: 'Money Receipt',
        },
        {
            year: '2',
            value: 'Bill',
        },
        {
            year: '3',
            value: 'Vehicle Condition',
        },
        {
            year: '4',
            value: 'LR',
        },
        {
            year: '5',
            value: 'Packing List',
        },
        {
            year: '6',
            value: 'Survey List',
        },
        {
            year: '7',
            value: 'Quotation',
        },
    ];

    const config = {
        data,
        yField: 'value',
        xField: 'year',
        tooltip: {
            customContent: (title, items) => {
                return (
                    <>
                        <h5 style={{ marginTop: 0 }}>{title}</h5>
                        <ul style={{ paddingLeft: 0 }}>
                            {items?.map((item, index) => {
                                const { name, value, color } = item;
                                return (
                                    <li
                                        key={item.year}
                                        className="g2-tooltip-list-item"
                                        data-index={index}
                                        style={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}
                                    >
                                        <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                                        <span
                                            style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                                        >
                                            <span style={{ marginRight: 1 }}>{name}:</span>
                                            <span className="g2-tooltip-list-item-value">{value}</span>
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                );
            },
        },
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                // fill: 'white',
                // // stroke: '#2593fc',
                // lineWidth: 2,
            },
        },
    };


    return (

        <div className='DocumentChatMain' >
            <div className='DocumentChatSub'>
                <h2 className='title'>This Month Documents Chart</h2>
                <p className='borderbottomx'>&#160;</p>
                <p className='right'><AiOutlineMenu /></p>
                <div className='DocumentChatChart'>
                    <Line {...config} />;
                </div>
            </div>
        </div>
    );

}



export default DemoLine;