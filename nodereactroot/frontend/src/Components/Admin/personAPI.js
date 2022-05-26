import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";




export const createPerson = async (person) => {
    const {data} = await $host.post('api/person', person)
    return data
}

export const fetchPersons = async ( page, limit= 5) => {
    const {data} = await $authHost.get('api/person/list', {params: {
             page, limit
        }})
    return data
}