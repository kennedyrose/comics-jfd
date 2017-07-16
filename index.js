'use strict'
const crawler = require('crawl-comic-db')
const db = require('json-fragmented-database')

module.exports = () => {
	crawler({
			verbose: true,
			userId: '311694',
			cb: (data, done) => {
				db.save({
					dir: './test',
					data: [ data ],
					done: done
				})
			}
		})
		.then(() => console.log('Done!'))
		.catch(console.error)
}


module.exports()
