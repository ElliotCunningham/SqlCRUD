import express from 'express';

const app = express.Router({ mergeParams: true });

const onGetConnectFunction = (req, res, next) => {
	console.log('connect to client');
	res.statue(200);
	res.json('true');
}

app.route('/connect')
	.all((req, res, next) => {
		console.log('call connect');
	})
	.get(onGetConnectFunction);

export default app;