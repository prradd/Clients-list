import {
    GET_ERRORS,
    CLEAR_ERRORS, IClientsState
} from "../actions/types";

const initialState: any = {
    msg: {},
    status: null,
    id: null
}

export default function (state: any = initialState, action: any) {

    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };

        default:
            return state;
    }

}