module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://hotel-admin-phmy4b3c8-leoasa1.vercel.app/:path*',
			},
		];
	},
};
