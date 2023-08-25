/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				//	ex. https://y.yarn.co/026b65c5-9ada-46b8-b1ec-11135f7efe41_text.gif
				protocol: "https",
				hostname: "y.yarn.co",
				pathname: "/**.gif",
			},
		],
	},
};

module.exports = nextConfig;
