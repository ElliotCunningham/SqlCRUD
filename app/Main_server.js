import express from 'express';
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
		app.set('view engine', 'html');
		app.use('/', apiRoutes);
		app.use(express.static('public'));

		this.server = app.listen(port, () => {
			console.log('server is running @ localhost:', this.server.address().port);
			this.init = true;
		})
	}
}

export default new MainServer();