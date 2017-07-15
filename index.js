'use strict'
const crawler = require('crawl-comic-db')
const db = require('json-fragmented-database')

module.exports = () => {
	crawler({
			verbose: true,
			userId: '311694'
		})
		.then(data => {
			db.save({
				dir: './test',
				data: data
			})
		})
		.catch(console.error)
}


module.exports()
