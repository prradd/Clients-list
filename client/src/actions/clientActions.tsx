import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, GET_CLIENTS, IClientObject, IClientObjectExist} from "./types";
import axios from "axios";

export const getClients = (clientsDispatch: Function) => {
    clientsDispatch({type: "CLIENTS_LOADING"});
    axios
        .get('/api/clients')
        .then(res =>
            clientsDispatch({
                type: GET_CLIENTS,
                payload: res.data
            })
        )
        .catch(err =>
            console.log(err)
        );
}

export const deleteClient = (clientsDispatch: Function, id: string) => {
    axios
        .delete(`/api/clients/${id}`)
        .then(() =>
            clientsDispatch({
                type: DELETE_CLIENT,
                payload: id
            })
        )
        .catch(err =>
            console.log(err)
        );
}

export const addClient = (clientsDispatch: Function, newClient: IClientObject) => {
    axios
        .post('/api/clients', newClient)
        .then(res =>
            clientsDispatch({
                type: ADD_CLIENT,
                payload: res.data
            })
        )
        .catch(err =>
            console.log(err)
        );
}

export const editClient = (clientsDispatch: Function, editedClient: IClientObjectExist) => {
    axios
        .put(`/api/clients/${editedClient._id}`, editedClient)
        .then((res: any) =>
            clientsDispatch({
                type: EDIT_CLIENT,
                payload: res.data
            })
        )
        .catch(err =>
            console.log(err)
        );
}






