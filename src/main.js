import colors from 'colors'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import 'dotenv/config'

import MongoDB from '~/common/MongoDB'
import UserController from '~/controllers/UserController'
import { isDevelopment } from '~/utils'

const bootstrap = async () => {
	const app = express()
	const port = process.env.PORT

	app.use(cors())
	app.use(compression())
	app.use(express.json())
	app.use(express.static(path.join(path.resolve(), 'public')))

	// Check development env
	if (isDevelopment()) {
		app.use(morgan('dev'))
	}

	// Setup modules
	new UserController(app)

	// Setup MongoDB
	await MongoDB.connect()

	app.listen(port, () => {
		console.log(colors.green(`Server is running on port ${port}!`))
	})
}

bootstrap()
