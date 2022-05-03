import {Tag} from 'antd';

export const myStyle={
  backgroundImage:"url(/backgroundImg.jpg)",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  filter: 'grayscale(50%)'
};

export const data = [
    {
      deviceId: "SBS09", 
      dateTime: "2022-03-19 00:20:37", 
      ward: "B1-3.2", 
      bed: "4", 
      Heart_Rate: 94, 
      Heart_Rate_Status: 'healthy',
      Blood_Pressure: 93, 
      Blood_Pressure_Status: 'healthy',
      Oxygen_Level: 96 ,
      Oxygen_Level_Status: 'healthy',
      Alert: false
    },
    {
      deviceId: "SBS10", 
      dateTime: "2022-03-19 00:20:37", 
      ward: "B1-3.2", 
      bed: "5", 
      Heart_Rate: 150, 
      Heart_Rate_Status: 'unhealthy',
      Blood_Pressure: 93, 
      Blood_Pressure_Status: 'healthy',
      Oxygen_Level: 30 ,
      Oxygen_Level_Status: 'unhealthy',
      Alert: true
    },
    {
      deviceId: "SBS011", 
      dateTime: "2022-03-19 00:20:37", 
      ward: "B1-3.2", 
      bed: "6", 
      Heart_Rate: 93, 
      Heart_Rate_Status: 'healthy',
      Blood_Pressure: 77, 
      Blood_Pressure_Status: 'healthy',
      Oxygen_Level: 76 ,
      Oxygen_Level_Status: 'healthy',
      Alert: false
    },
    {
      deviceId: "SBS012", 
      dateTime: "2022-03-19 00:20:37", 
      ward: "B1-3.2", 
      bed: "7", 
      Heart_Rate: 94, 
      Heart_Rate_Status: 'healthy',
      Blood_Pressure: 93, 
      Blood_Pressure_Status: 'healthy',
      Oxygen_Level: 96 ,
      Oxygen_Level_Status: 'healthy',
      Alert: false
    },
    {
      deviceId: "SBS013", 
      dateTime: "2022-03-19 00:20:37", 
      ward: "B1-3.2", 
      bed: "1", 
      Heart_Rate: 115, 
      Heart_Rate_Status: 'unhealthy',
      Blood_Pressure: 93, 
      Blood_Pressure_Status: 'healthy',
      Oxygen_Level: 96 ,
      Oxygen_Level_Status: 'healthy',
      Alert: true
    },
    {
        deviceId: "SBS09", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "2", 
        Heart_Rate: 94, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS10", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "3", 
        Heart_Rate: 150, 
        Heart_Rate_Status: 'unhealthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 30 ,
        Oxygen_Level_Status: 'unhealthy',
        Alert: true
      },
      {
        deviceId: "SBS011", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "8", 
        Heart_Rate: 93, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 77, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 76 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS012", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "9", 
        Heart_Rate: 94, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS013", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "10", 
        Heart_Rate: 115, 
        Heart_Rate_Status: 'unhealthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: true
      },
      {
        deviceId: "SBS09", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "11", 
        Heart_Rate: 94, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS10", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "12", 
        Heart_Rate: 150, 
        Heart_Rate_Status: 'unhealthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 30 ,
        Oxygen_Level_Status: 'unhealthy',
        Alert: true
      },
      {
        deviceId: "SBS011", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "13", 
        Heart_Rate: 93, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 77, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 76 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS012", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "14", 
        Heart_Rate: 94, 
        Heart_Rate_Status: 'healthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: false
      },
      {
        deviceId: "SBS013", 
        dateTime: "2022-03-19 00:20:37", 
        ward: "B1-3.2", 
        bed: "15", 
        Heart_Rate: 115, 
        Heart_Rate_Status: 'unhealthy',
        Blood_Pressure: 93, 
        Blood_Pressure_Status: 'healthy',
        Oxygen_Level: 96 ,
        Oxygen_Level_Status: 'healthy',
        Alert: true
      },
];

export const columns = [
  {
      title: 'Device ID',
      dataIndex: 'deviceId',
      key: 'deviceId',
      width: '13%'
  },
  {
      title: 'Ward',
      dataIndex: 'ward',
      key: 'ward',
      width: '13%'
  },
  {
      title: 'Bed No.',
      dataIndex: 'bed',
      key: 'bed',
      width: '10%'
  },
  {
      title: 'Heart Rate',
      dataIndex: 'Heart Rate',
      key: 'Heart Rate',
      render : (text, record) => (
          <>
              {record['Heart Rate Status'] === 'healthy' ? (
                <>
                  <span style={{marginRight:'5px'}}>{text} </span>
                  <Tag color='green' key={text}>
                      {record['Heart Rate Status'].toUpperCase()}
                  </Tag>
                </>

                  
              ) : (
                <>
                  <span style={{marginRight:'5px'}}><b> {text} </b></span>
                  <Tag color='volcano' key={text}>
                      {record['Heart Rate Status'].toUpperCase()}
                  </Tag>
                </>
              )}
          </>
        )
  },
  {
      title: 'Blood Pressure',
      dataIndex: 'Blood Pressure',
      key: 'Blood Pressure',
      render : (text, record) => (
          <>
              {record['Blood Pressure Status'] === 'healthy' ? (
                <>
                  <span style={{marginRight:'5px'}}>{text} </span>
                  <Tag color='green' key={text}>
                      {record['Blood Pressure Status'].toUpperCase()}
                  </Tag>
                </>
                  
              ) : (
                <>
                  <span style={{marginRight:'5px'}}><b> {text} </b></span>
                  <Tag color='volcano' key={text}>
                      {record['Blood Pressure Status'].toUpperCase()}
                  </Tag>
                </>
                  
              )}
          </>
        )
  },
  {
      title: 'Oxygen Level',
      dataIndex: 'Oxygen Level',
      key: 'Oxygen Level',
      render : (text, record) => (
          <>
              {record['Oxygen Level Status'] === 'healthy' ? (
                <>
                <span style={{marginRight:'5px'}}>{text} </span>
                  <Tag color='green' key={text}>
                      {record['Oxygen Level Status'].toUpperCase()}
                  </Tag>
                </>
                  
              ) : (
                <>
                  <span style={{marginRight:'5px'}}><b> {text} </b></span>
                  <Tag color='volcano' key={text}>
                      {record['Oxygen Level Status'].toUpperCase()}
                  </Tag>
                </>
                  
              )}
          </>
        )
  },
  {
      title: 'Date Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
      width: '15%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.dateTime) - new Date(b.dateTime),

  },
];

export const nurseInfo = {
    'nurse1': {
      wardNo : "A-1",
      wardtype : {
        columnCount :2
      }
    },
    'nurse2': {
      wardNo : "A-2",
      wardtype : {
        columnCount :2
      }
    },
    'nurse3': {
      wardNo : "A-3",
      wardtype : {
        columnCount :2
      }
    },
    'nurse4': {
      wardNo : "A-4",
      wardtype : {
        columnCount :2
      }
    },
    'nurse5': {
      wardNo : "A-5",
      wardtype : {
        columnCount :2
      }
    },
    'nurse6': {
      wardNo : "B1-1",
      wardtype : {
        columnCount :2
      }
    },
    'nurse7': {
      wardNo : "B1-2",
      wardtype : {
        columnCount :2
      }
    },
    'nurse8': {
      wardNo : "B1-3",
      wardtype : {
        columnCount :2
      }
    },
    'nurse9': {
      wardNo : "B1-4",
      wardtype : {
        columnCount :2
      }
    },
    'nurse10': {
      wardNo : "B1-5",
      wardtype : {
        columnCount :2
      }
    },
    'nurse11': {
      wardNo : "B2-1",
      wardtype : {
        columnCount :2
      }
    },
    'nurse12': {
      wardNo : "B2-2",
      wardtype : {
        columnCount :2
      }
    },
    'nurse13': {
      wardNo : "B2-3",
      wardtype : {
        columnCount :2
      }
    },
    'nurse14': {
      wardNo : "B2-4",
      wardtype : {
        columnCount :2
      }
    },
    'nurse15': {
      wardNo : "B2-5",
      wardtype : {
        columnCount :2
      }
    },
    'nurse16': {
      wardNo : "C-1",
      wardtype : {
        columnCount :2
      }
    },
    'nurse17': {
      wardNo : "C-2",
      wardtype : {
        columnCount :2
      }
    },
    'nurse18': {
      wardNo : "C-3",
      wardtype : {
        columnCount :2
      }
    },
    'nurse19': {
      wardNo : "C-4",
      wardtype : {
        columnCount :2
      }
    },
    'nurse20': {
      wardNo : "C-5",
      wardtype : {
        columnCount :2
      }
    },
    'nurse21': {
      wardNo : "C-6",
      wardtype : {
        columnCount :4
      }
    }
}