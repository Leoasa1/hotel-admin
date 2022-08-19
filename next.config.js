module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://hotel-admin-5i9ziia16-leoasa1.vercel.app/:path*',
			},
		];
	},
};
