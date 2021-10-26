/* eslint-disable no-console */
export const devLogger = args => {
	if (process.env.NODE_ENV === 'development') {
		console.log('devLogger:', args)
	}
}
