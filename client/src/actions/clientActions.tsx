export interface IGetClientsAction {
    readonly type: "GET_CLIENTS";
}

export interface IDeleteClientAction {
    readonly type: "DELETE_CLIENT";
    payload: string;
}

export type ClientActions =
    | IGetClientsAction
    | IDeleteClientAction
