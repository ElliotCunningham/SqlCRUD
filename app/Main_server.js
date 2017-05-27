import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import common from './node/common';
import apiRoutes from './node/routes';

const port = 3000;

class MainServer {
	constructor() {
		this.server = false;
		this.init = false;
		this._init();
	}

	_init = () => {
		const app = express();

		app.options('*', cors());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.set('view engine', 'html');
		app.use('/', common);
		app.use('/', apiRoutes);
		app.use(express.static('public'));

		this.server = app.listen(port, () => {
			console.log('server is running @ localhost:', this.server.address().port);
			this.init = true;
		})
	}
}

export default new MainServer();