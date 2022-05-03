import React from "react";
import { List, Typography, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { patientState } from '../../atoms';

function AttendingList(){
    const { Title } = Typography;
    const [patient, setPatient] = useRecoilState(patientState);

    function remove(e){
        const newList = patient.filter((item) => item !== e);
        setPatient(newList);
    }

    return(
        <>
            <List
                header={<Title level={5}>Patients who are currently being attended to</Title>}
                itemLayout="horizontal"
                dataSource={patient}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            description={"Bed no. " + item }
                        />
                        <Button key={item} onClick={()=> remove(item)}>Resolved</Button>
                    </List.Item>
                )}
            />
        </>
    )
}

export default AttendingList;