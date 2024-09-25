/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ]
	},
	 typescript: {
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
