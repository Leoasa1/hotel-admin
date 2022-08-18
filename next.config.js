module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://hotel-admin-ten.vercel.app/:path*',
			},
		];
	},
};
