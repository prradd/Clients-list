export {};
import {IClientObject, IClientObjectExist} from "../../types";
const mongoose = require('mongoose');
const clientSchema = require('./clinetSchema');

const Clients = mongoose.model('client', clientSchema, 'clients');

const addClient = (clientData: IClientObject, callback: any) => {
	Clients.create(clientData, callback)
}

const getClients = (conditions = {}, callback: any) => {
	Clients.find(conditions, callback).sort({ date: -1 })
}

const removeClient = (conditions: Object, callback: any) => {
	Clients.findOneAndRemove(conditions, callback)
}

const updateClient = (conditions: Object, newData: IClientObjectExist, callback: any) => {
	Clients.findOneAndUpdate(conditions, newData, {"new": true}, callback)
}

module.exports = { addClient, getClients, removeClient, updateClient };
