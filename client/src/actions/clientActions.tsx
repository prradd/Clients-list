import {GET_CLIENTS, ADD_CLIENTS, DELETE_CLIENT} from "./types";

export const getClients = () => (dispatch: Function) => {
    dispatch({
        type: GET_CLIENTS
    })
};

export const deleteClient = (id: string) => (dispatch: Function) => {
    dispatch({
        type: DELETE_CLIENT,
        payload: id
    })
};