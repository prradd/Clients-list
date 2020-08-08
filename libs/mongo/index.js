const mongoose = require('mongoose');

module.exports = config => {
	const connection = mongoose.connection;

	const { MONGO_USER, MONGO_PASS } = process.env;
	const { port, hosts, 'admin-db': db, database, rsName, } = config;
	const connString = db
		? `mongodb://${MONGO_USER}:${MONGO_PASS}@${hosts.map(host => `${host}:${port}`).join(',')}/${database}?authSource=${db}${rsName ? `&replicaSet=${rsName}` : ''}`
		: `mongodb://${hosts.map(host => `${host}:${port}`).join(',')}/${database}`;

	connection.on('connecting', () => {
		console.info('Connecting to MongoDB on port %d', port);
	});
	connection.on('error', error => {
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
		db: {
			readPreference: 'secondaryPreferred'
		},
		autoReconnect: true,
		useNewUrlParser: true,
		useFindAndModify: false
	});
	mongoose.Promise = global.Promise;
};
