class MainServer {
	constructor() {
		this.init = false;
		this._init();
	}

	_init = () => {
		if (!this.init) {
			console.log('initialisation de app_server');
		} else {
			console.log('app is Already init');
		}
	}
}

export default new MainServer();