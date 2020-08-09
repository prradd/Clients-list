export {};
const mongoose = require('mongoose');

interface IDBConfig {
	port?: string;
	host: string;
	database: string;
	["admin-db"]?: string;
}

module.exports = (config: IDBConfig) => {
	const connection = mongoose.connection;

	const { MONGO_USER, MONGO_PASS } = process.env;
	const { port, host, 'admin-db': db, database } = config;
	const connString = port
		? `mongodb://${MONGO_USER}:${MONGO_PASS}@${host}:port/${database}?authSource=${db}` // connect to localhost
		: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${host}/${database}`; // connect to Mongodb Atlas

	connection.on('connecting', () => {
		console.info('Connecting to MongoDB on port %d', port);
	});
	connection.on('error', (error: string | symbol) => {
		console.error('Error in MongoDB connection: %O', error);
		mongoose.disconnect();
	});
	connection.on('connected', () => {
		console.info('MongoDB connected! Listen to port %d', port);
	});
	connection.once('open', () => {
		console.info('MongoDB connection opened!');
	});
	connection.on('reconnected', () => {
		console.info('MongoDB reconnected!');
	});
	connection.on('disconnected', () => {
		console.warn('MongoDB disconnected! %s', mongoose.connection.readyState);
	});

	mongoose.connect(connString, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false
	});
	mongoose.Promise = global.Promise;
};
