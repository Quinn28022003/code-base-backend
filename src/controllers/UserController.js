import { Router } from 'express'

import ServerResponse from '~/common/ServerResponse'

class UserController {
	constructor(app) {
		this.app = app
		this.setupRouter('users')
	}

	setupRouter(resource) {
		const router = Router()
		this.app.use(router)

		router.get('', this.list)
		router.post('/', this.create)
		router.put('/:id', this.update)
		router.delete('/:id', this.delete)
	}

	async list(req, res, next) {
		ServerResponse.success(res, {
			statusCode: 400,
			data: []
		})
	}

	async create(req, res, next) {}

	async update(req, res, next) {}

	async delete(req, res, next) {}
}

export default UserController
