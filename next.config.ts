
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // { // Removed placehold.co as it's no longer used
      //   protocol: 'https',
      //   hostname: 'placehold.co',
      //   port: '',
      //   pathname: '/**',
      // }
    ],
  },
};

export default nextConfig;
