'use strict'
const crawler = require('crawl-comic-db')
const db = require('json-fragmented-database')
const dir = './data'

module.exports = () => {
	db.getLastId({
			dir: dir
		})
		.then(crawl)
		.catch(console.error)
}

function crawl(stopId){
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
		.then(() => console.log('Done!'))
		.catch(console.error)
}


module.exports()
