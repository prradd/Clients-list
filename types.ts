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



