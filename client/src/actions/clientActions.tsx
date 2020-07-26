export interface IGetClientsAction {
    readonly type: "GET_CLIENTS";
}

export interface IDeleteClientAction {
    readonly type: "DELETE_CLIENT";
    payload: string;
}

export interface IAddClientAction {
    readonly type: "ADD_CLIENT";
    payload: object;
}

export interface IEditClientAction {
    readonly type: "EDIT_CLIENT";
    payload: object;
}

export type ClientActions =
    | IGetClientsAction
    | IDeleteClientAction
    | IAddClientAction
    | IEditClientAction
