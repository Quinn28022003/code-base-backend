export const isDevelopment = () => {
	const nodeEnv = process.env.NODE_ENV
	return nodeEnv === 'development'
}

export const isProduction = () => {
	const nodeEnv = process.env.NODE_ENV
	return nodeEnv === 'production'
}
