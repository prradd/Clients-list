import {v1 as uuid} from "uuid";
import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT} from "../actions/types";

interface IClientObject {
    id: string;
    userName: string;
    phone?: string;
    mail?: string;
    creationDate?: string;
    actions?: string
}

interface IClientsState {
    clients: Array<IClientObject>;
}

const initialState: IClientsState = {
    clients: [
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון2", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון3", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון4", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון5", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"}
    ]
}

export default function (state: IClientsState = initialState, action: any) {

   switch (action.type) {
       case GET_CLIENTS:
           return{
               ...state
           }

       case DELETE_CLIENT:
           return{
               ...state,
               clients: state.clients.filter(client => client.id !== action.payload)
           };

       case ADD_CLIENT:
           return{
               ...state,
               clients: [action.payload, ...state.clients]
           };

       default:
           return state;
   }

}