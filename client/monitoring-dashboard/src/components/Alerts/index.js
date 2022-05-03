import React, {useState, useEffect} from "react";
import { Alert } from 'antd';
import {getPatientActivities} from '../../service/index';
import {WarningOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { patientState } from '../../atoms';

function Alerts(wardNo){
    const [patient, setPatient] = useRecoilState(patientState);

    function afterClose(index){
        setPatient(patient => [...patient, index])
    }

    const [newData, setNewData] = useState([]);

    async function fetchData() {
        const activities = await getPatientActivities({
            params: {
                ward: wardNo.wardNo
            }
        });
        var temp = {};
        for (let i=0; i<activities.data.length; i++){
            if (activities.data[i].deviceId in temp){
                if (new Date(activities.data[i].dateTime) > new Date(temp[activities.data[i].deviceId].dateTime)){
                    temp[activities.data[i].deviceId] = activities.data[i]
                }
            } else {
                temp[activities.data[i].deviceId] = activities.data[i]
            }
        }
        setNewData(temp)
    };

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 10000 );
        return () => clearInterval(interval); 
    }, [])


    return (
        <>
            {Object.keys(newData).map((keyName, i) => {
                if (newData[keyName].Alert && !patient.includes(newData[keyName].bed) ) {
                    var description = "Patient in bed number " + newData[keyName].bed + " have reached an unhealthy threshod of "
                    if (newData[keyName]['Blood Pressure Status'] === 'unhealthy') {
                        description += newData[keyName]['Blood Pressure'] + " for Blood Pressure "
                    }
                    if (newData[keyName]['Heart Rate Status'] === 'unhealthy') {
                        description += newData[keyName]['Heart Rate'] + " for Heart Rate "
                    }
                    if (newData[keyName]['Oxygen Level Status'] === 'unhealthy') {
                        description += newData[keyName]['Oxygen Level'] + " for Oxygen Level "
                    }
                    return(
                        <div className="alert_wrapper">
                            <Alert
                                key={newData[keyName].bed}
                                visible={false}
                                message={description}
                                type="error"
                                closable
                                onClose={()=>afterClose(newData[keyName].bed)}
                                banner
                                icon={<WarningOutlined />}
                                closeText="Attend"
                            />
                        </div>
                    )
                }
            })}
        </>
    )
}

export default Alerts;