export {};
const mongoose = require('mongoose');

module.exports = () => {
	const connection = mongoose.connection;

	const { MONGO_USER, MONGO_PASS } = process.env;
	const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE, MONGO_ADMIN_DB } = process.env;
	// const { port, host, 'admin-db': db, database } = config;
	const connString = MONGO_PORT
		// connect to localhost (mongodb://<user>:<pass>@localhost:27017/clients-list?authSource=admin)
		? `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=${MONGO_ADMIN_DB}`
		// connect to Mongodb Atlas
		// (mongodb+srv://<user>:<pass>@anton-sandbox.xnmfo.mongodb.net/clients-list?retryWrites=true&w=majority)
		: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DATABASE}`;

	console.log(connString);

	connection.on('connecting', () => {
		console.info('Connecting to MongoDB on port %d', MONGO_PORT);
	});
	connection.on('error', (error: string | symbol) => {
		console.error('Error in MongoDB connection: %O', error);
		mongoose.disconnect();
	});
	connection.on('connected', () => {
		console.info('MongoDB connected! Listen to port %d', MONGO_PORT);
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
