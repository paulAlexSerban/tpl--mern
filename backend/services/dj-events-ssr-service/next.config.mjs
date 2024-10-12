const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost';
const PORT = process.env.NEXT_PUBLIC_PORT || '3000';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        remotePatterns:[
            {
                protocol: 'http',
                hostname: HOSTNAME,
                port: PORT,
                pathname: '/dss/images/**',
              },
        ]
    }
};

export default nextConfig;
