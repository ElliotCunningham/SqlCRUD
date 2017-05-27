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
}

const HttpApiInstance = new HttpApi();
export default HttpApiInstance;