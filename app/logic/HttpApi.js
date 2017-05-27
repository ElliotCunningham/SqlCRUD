import Axios from 'axios';

class HttpApi {
	constructor() {

	}

	getRequest(data, target) {
		return Axios.get(target, data);
	}

	postRequest(data, target) {
		return Axios.get(target, data);
	}

	getAllDataBase(dataConnect) {
		return Axios.post('http://localhost:3000/dataBase', { dataConnect: dataConnect });
	}

	selectADataBase(dataConnect, dataBase) {
		return Axios.post('http://localhost:3000/base', { dataConnect: dataConnect, dataBase: dataBase });
	}
}

const HttpApiInstance = new HttpApi();
export default HttpApiInstance;