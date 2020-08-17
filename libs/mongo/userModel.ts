export {};
import {IUserObject} from "../../types";
const mongoose = require('mongoose');
const clientSchema = require('./userSchema');
const bcrypt = require('bcryptjs');

const Users = mongoose.model('user', clientSchema, 'users');

const isExistUser = (mail: string, callback: any) => {
	Users.findOne({mail}, callback);
}

const findUser = (_id: string, res: any) => {
	Users.findById({_id})
		.select('-pass')
		.then((user: any) => res.json(user));
}

// Create salt & hash
const hashUserPass = (pass: string, callback: any) => {
	bcrypt.genSalt(10, (err: any, salt: string) => {
		if (err) throw err;
		bcrypt.hash(pass, salt, callback);
	})
}

const compareHashed = (pass: string, hashedPass: string, callback: any) => {
	bcrypt.compare(pass, hashedPass, callback);
}

const addUser = (userData: IUserObject, callback: any) => {
	Users.create(userData, callback)
}

module.exports = { isExistUser, hashUserPass, compareHashed, findUser, addUser };
