'use strict'
const crawler = require('crawl-comic-db')
const db = require('json-fragmented-database')
const dir = './data'

module.exports = () => {
	return new Promise((resolve, reject) => {
		db.getLastId({
				dir: dir
			})
			.then(crawl)
			.then(resolve)
			.catch(reject)
	})
}

function crawl(stopId){
	return new Promise((resolve, reject) => {
		console.log(`Crawling until: ${stopId}`)
		crawler({
				verbose: true,
				userId: '311694',
				stopId: stopId,
				cb: (data, done) => {
					console.log('Saving...')
					db.save({
						dir: dir,
						data: [ data ],
						done: done
					})
				}
			})
			.then(resolve)
			.catch(reject)
	})
}

