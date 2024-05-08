import colors from 'colors'
import Mongoose from 'mongoose'

import { isDevelopment } from '~/utils'

class MongoDB {
	static async connect() {
		try {
			const mongodbUri = process.env.MONGODB_URI

			if (isDevelopment()) {
				Mongoose.set('debug', (coll, method, query) => {
					console.log(
						`${colors.green('Mongoose: ')}${colors.yellow(coll)}.${colors.cyan(method)}(${JSON.stringify(
							query,
							null,
							2
						)});`
					)
				})
			}
			await Mongoose.connect(mongodbUri)
			console.log(colors.green('Connect to MongoDB successfully!'))
		} catch (err) {
			console.log(colors.red('Connect to MongoDB failure!!!'))
		}
	}
}

export default MongoDB
