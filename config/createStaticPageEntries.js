const fs = require('node:fs');
const path = require('node:path');

module.exports = function createStaticPageEntries() {
	const cwd = process.cwd();
	const dir = path.resolve(cwd, './src/assets/pages');
	try {
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		
		const subfolders = entries
			.filter(entry => entry.isDirectory())
			.map(entry => entry.name);
		
		const list = subfolders.reduce((acc, sub) => {
			acc[`assets/${sub}`] = path.resolve(cwd, `./src/assets/pages/${sub}/entry.ts`)
			return acc;
		}, {});

		return list;
	} catch (error) {
		console.error('Error reading directory:', error);
		return {};
	}
}
