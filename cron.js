'use strict'
const app = require('./index')
const execute = require('execute-shell-promise')

console.log('Executing cron...')

execute('git pull origin master')
	.then('node index')
	.then('git add .')
	.then(`git commit -m "Updated data (${new Date().toString()})"`)
	.then('git push origin master')
	.catch(err => {
		throw new Error(err)
	})
