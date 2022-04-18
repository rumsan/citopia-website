const path = require('path');

module.exports = {
	assetPrefix: '.',
	sassOptions: {
		includePaths: [path.join(__dirname, 'css')]
	},
	trailingSlash: true,
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true
	}
};
