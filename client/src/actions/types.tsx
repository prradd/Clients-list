export const GET_CLIENTS = 'GET_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';
export const CLIENTS_LOADING = 'CLIENTS_LOADING';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export interface ITarget {
    target: {
        name: string;
        value: string;
    };
    preventDefault(): void;
}


// Client Interfaces and types

export interface IClientObject {
    userName: string;
    phone?: string;
    mail?: string;
    creationDate?: string;
    actions?: string
}

export interface IClientObjectExist extends IClientObject {
    _id: string;
}

export interface IClientsState {
    clients: Array<IClientObjectExist>;
    loading: boolean;
}

export interface IGetClientsAction {
    readonly type: "GET_CLIENTS";
    payload: IClientsState;
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

export interface ISetClientsLoading {
    readonly type: "CLIENTS_LOADING";
}

export type ClientActions =
    | IGetClientsAction
    | IDeleteClientAction
    | IAddClientAction
    | IEditClientAction
    | ISetClientsLoading


// Auth interfaces and types
export interface IUserObject {
    userName: string;
    mail: string;
    password: string;
}

export interface IAuthObject {
    token: string | null;
    isAuthenticated: boolean | null;
    isLoading: boolean;
    user: IUserObject | null;
}

export interface ISetUserLoading {
    readonly type: "USER_LOADING";
}

export interface ISetUserLoaded {
    readonly type: "USER_LOADED";
    payload: object;
}

export interface ISetLoginSuccess {
    readonly type: "LOGIN_SUCCESS";
    payload: object;
}

export interface ISetRegisterSuccess {
    readonly type: "REGISTER_SUCCESS";
    payload: object;
}

export type AuthActions =
    | ISetUserLoading
    | ISetUserLoaded
    | ISetLoginSuccess
    | ISetRegisterSuccess


// Error interfaces and types

export interface IGetErrorsAction {
    readonly type: "GET_ERRORS";
    payload: object;
}

export interface IClearErrorsAction {
    readonly type: "CLEAR_ERRORS";
}

export type ErrorActions =
    | IGetErrorsAction
    | IClearErrorsAction





