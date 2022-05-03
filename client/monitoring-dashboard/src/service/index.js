import axios from "axios";

export async function getPatientActivities({params = {}}) {
    const meta = await axios.get( 'https://0ncit7ly72.execute-api.ap-southeast-1.amazonaws.com/dev1/patient_activities/', {
        params: {
            ...params
        }
    });

    return meta
}