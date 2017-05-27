import express from 'express';
import NodeSqlApi from './api/NodeSqlApi';

const app = express.Router({ mergeParams: true });

const onGetDataBaseFunction = (req, res, next) => {
	const dataConnect = req.body.dataConnect;
	NodeSqlApi.getAllDataBaseInServer(dataConnect)
		.then((result) => {
			console.log(result);
			res.status(200);
			res.json(result);
		})
		.catch((err) => {
			console.log('error', err);
			res.status(404);
			res.json(err);
		});
}

const onGetDataInDataBase = (req, res, next) => {
	const dataConnect = req.body.dataConnect;
	const dataBase = req.body.dataBase;

	NodeSqlApi.getDataInDataBase(dataConnect, dataBase)
		.then((result) => {
			res.status(200);
			res.json(result);
		})
		.catch((err) => {
			console.log('error', err);
			res.status(404);
			res.json(err);
		});
}


app.route('/dataBase')
	.all((req, res, next) => {
		console.log('call dataBase');
		next();
	})
	.post(onGetDataBaseFunction);

app.route('/base')
	.all((req, res, next) => {
		console.log('call get base data');
		next();
	})
	.post(onGetDataInDataBase);

export default app;