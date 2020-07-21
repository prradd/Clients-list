import {v1 as uuid} from "uuid";
import {GET_CLIENTS, ADD_CLIENTS, DELETE_CLIENT} from "../actions/types";

const initialState = {
    clients: [
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"}
    ]
}

export default function (state = initialState, action: any) {

   switch (action.type) {
       case GET_CLIENTS:
           // console.log(action);
           return{
               ...state
           }

       case DELETE_CLIENT:
           console.log(action);
           return{
               ...state,
               clients: state.clients.filter(client => client.id !== action.payload)
           };

       default:
           // console.log(action);
           return state;
   }

}