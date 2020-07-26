import {v1 as uuid} from "uuid";
import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, IClientsState, EDIT_CLIENT, IClientObject} from "../actions/types";


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

       case EDIT_CLIENT:
           const indexOfEdited = state.clients.findIndex((client: IClientObject) => client.id === action.payload.id);
           state.clients[indexOfEdited] = action.payload;
           return{
               ...state,
               clients: [...state.clients]
           };

       default:
           return state;
   }

}