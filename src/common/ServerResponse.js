import StatusCode from 'http-status-codes'

class ServerResponse {
	static success(
		res,
		{ statusCode, message, data } = {
			statusCode: StatusCode.OK,
			message: StatusCode.getStatusText(StatusCode.OK),
			data: null
		}
	) {
		res.status(statusCode).json({
			message: StatusCode.getStatusText(statusCode),
			data
		})
	}

	static error(
		res,
		{ statusCode, message, error } = {
			statusCode: StatusCode.BAD_REQUEST,
			message: StatusCode.getStatusText(StatusCode.BAD_REQUEST),
			error: null
		}
	) {
		res.status(statusCode).json({
			message: StatusCode.getStatusText(statusCode),
			error
		})
	}
}

export default ServerResponse
