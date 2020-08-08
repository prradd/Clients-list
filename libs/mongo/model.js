const mongoose = require('mongoose');
const clientSchema = require('./clinetSchema');

const Clients = mongoose.model('client', clientSchema, 'clients');

const addClient = (clientData, callback) => {
	Clients.create(clientData, callback)
}

const getClients = (conditions = {}, callback) => {
	Clients.find(conditions, callback).sort({ date: -1 })
}

const removeClient = (conditions, callback) => {
	Clients.findOneAndRemove(conditions, callback)
}

const updateClient = (conditions, newData, callback) => {
	Clients.findOneAndUpdate(conditions, newData, callback)
}

module.exports = { addClient, getClients, removeClient, updateClient };
