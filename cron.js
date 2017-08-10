'use strict'
console.log('Executing cron...')
const app = require('./index')
const execute = require('execute-shell-promise')

console.log('Required dependencies')

const timestamp = new Date().toString()

execute('git pull origin master')
	.then(res => {
		console.log('Result of: git pull origin master')
		console.log(res)
	})
	.then(app)
	.then(() => execute('git add .'))
	.then(res => {
		console.log('Result of: git add .')
		console.log(res)
	})
	.then(() => execute(`git commit -m "Updated data (${timestamp})"`))
	.then(res => {
		console.log(`git commit -m "Updated data (${timestamp})"`)
		console.log(res)
	})
	.then(() => execute('git push origin master'))
	.then(res => {
		console.log('Result of: git push origin master')
		console.log(res)
	})
	.catch(err => {
		console.log(err)
		throw new Error(err)
	})
