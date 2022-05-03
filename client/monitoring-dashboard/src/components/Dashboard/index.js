import React, { useEffect, useState } from "react";
import {columns, nurseInfo} from '../../constants/constants';
import {getPatientActivities} from '../../service/index';
import Alerts from "../Alerts/index";
import AttendingList from "../List/index";
import { Table, Typography, Tabs } from 'antd';
import './style.css';
import RoomMap from "../RoomMap";
import {myStyle} from '../../constants/constants';

function Dashboard() {
    const pathname = window.location.pathname;
    const nurse = pathname.split("/")[2];
    const wardNo = nurseInfo[nurse]['wardNo'];
    const wardType = nurseInfo[nurse]['wardtype'];

    const [data, setData] = useState([]);

    async function fetchData() {
        const activities = await getPatientActivities({
            params: {
                ward: wardNo
            }
        });
        setData(activities.data)
    };

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('fetch')
            fetchData()
        }, 10000 );
        return () => clearInterval(interval); 
    }, [])

    const { Title } = Typography;
    const { TabPane } = Tabs;
    return (
        <div className="dashboard" style={myStyle}>
            <div className="dashboard_alert">
                <Alerts wardNo={wardNo}/>
            </div>
            <div className="dashboard_header">
                <Title strong>
                    Ward {wardNo} Dashboard
                </Title>
            </div>
            <div className="data_wrapper">
                <div className="dashboard_wrapper">
                    <div>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="Dashboard" key="1">
                                <div className="content_wrapper">
                                    <div className="content">
                                        <Table columns={columns} dataSource={data} />
                                    </div>
                                    <div className="dashboard_list">
                                        <AttendingList/>
                                    </div>
                                </div>
                                
                            </TabPane>
                            <TabPane tab="Room Map" key="2">
                                <div className="content_wrapper">
                                    <div className="content">
                                        <RoomMap wardType={wardType} wardNo={wardNo}/>
                                    </div>
                                    <div className="dashboard_list">
                                        <AttendingList/>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}
export default Dashboard;