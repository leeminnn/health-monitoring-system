import React, { useState, useEffect } from "react";
import { Col } from 'antd';
import {getPatientActivities} from '../../service/index';
import './style.css';


function RoomMap(wardType){

    const [newData, setNewData] = useState([]);
    const [firstRow, setFirstRow] = useState({});
    const [secondRow, setSecondRow] = useState({});

    async function fetchData() {
        const activities = await getPatientActivities({
            params: {
                ward: wardType.wardNo
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
        for (const obj in temp){
            const updatedValue = {[obj]:temp[obj]}
            if ((temp[obj].bed %2 === 0) && (secondRow[obj] === undefined)){
                setSecondRow(prevState =>({
                    ...prevState,
                    ...updatedValue
                }))
            } else if ((temp[obj].bed %2 !== 0) && (secondRow[obj] === undefined)) {
                setFirstRow(prevState => ({
                    ...prevState,
                    ...updatedValue
                }))
            }
        }
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
        <div className="room_map_wrapper">
            <div className="row">
                {Object.keys(firstRow).map((keyName, i) => {
                    var colour = 'green';
                    if (firstRow[keyName].Alert === true) {
                        var colour = 'red';
                    }
                    return(
                        <div className="bed" style={{backgroundColor:colour}}>
                            <div className="text">{firstRow[keyName]['deviceId']} - Bed No. {firstRow[keyName].bed}</div>
                        </div>
                    )
                })}
            </div>
            <div className="row" style={{marginTop:'100px'}}>
                {Object.keys(secondRow).map((keyName, i) => {
                    
                    var colour = 'green';
                    if (secondRow[keyName].Alert) {
                        var colour = 'red';
                    }
                    return(
                        <div className="bed" style={{backgroundColor:colour, color: 'white'}}>
                            <div className="text">{secondRow[keyName]['deviceId']} - Bed No. {secondRow[keyName].bed}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RoomMap;