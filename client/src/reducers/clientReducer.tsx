import {
    GET_CLIENTS,
    ADD_CLIENT,
    DELETE_CLIENT,
    IClientsState,
    EDIT_CLIENT,
    CLIENTS_LOADING,
    IClientObjectExist
} from "../actions/types";


const initialState: IClientsState = {
    clients: [],
    loading: false
}

export default function (state: IClientsState = initialState, action: any) {

   switch (action.type) {
       case GET_CLIENTS:
           return{
               ...state,
               clients: action.payload,
               loading: false
           }

       case DELETE_CLIENT:
           return{
               ...state,
               clients: state.clients.filter(client => client._id !== action.payload)
           };

       case ADD_CLIENT:
           return{
               ...state,
               clients: [action.payload, ...state.clients],
               loading: false
           };

       case EDIT_CLIENT:
           const indexOfEdited = state.clients.findIndex((client: IClientObjectExist) => client._id === action.payload._id);
           state.clients[indexOfEdited] = action.payload;
           return{
               ...state,
               clients: [...state.clients],
               loading: false
           };

       case CLIENTS_LOADING:
           return {
               ...state,
               loading: true
           };

       default:
           return state;
   }

}