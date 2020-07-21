import {GET_CLIENTS, ADD_CLIENTS, DELETE_CLIENT} from "./types";

export const getClients = () => {
    return {
        type: GET_CLIENTS
    }
};

export const deleteClient = (id: string) => {
    return {
        type: DELETE_CLIENT,
        payload: id
    }
};