import { ProvinceStatus } from "./provinceStatus";

export interface CovidStatus { 
    "error": boolean,
    "statusCode": number,
    "message": string,
    "data": {
        "lastChecked": Date,
        "covid19Stats": ProvinceStatus[]
    }
}