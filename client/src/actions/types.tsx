export const GET_CLIENTS = 'GET_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';

export interface ITarget {
    target: {
        name: string;
        value: string;
    };
    preventDefault(): void;
}

export interface IClientObject {
    id: string;
    userName: string;
    phone?: string;
    mail?: string;
    creationDate?: string;
    actions?: string
}

export interface IClientsState {
    clients: Array<IClientObject>;
}