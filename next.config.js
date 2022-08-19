module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://hotel-admin-leoasa1.vercel.app//:path*',
			},
		];
	},
};
