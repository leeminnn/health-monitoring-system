import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-southeast-1_Qbr4HXMG2',
    ClientId: '1ra0ptj77s4cqbam6uspcndtio'
}

export default new CognitoUserPool(poolData);