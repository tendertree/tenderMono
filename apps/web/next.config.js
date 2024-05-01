/** @type {import('next').NextConfig} */
module.exports = {
    transpilePackages: ["@repo/ui"],
    reactStrictMode: true,
    swcMinify: true,
    /*add for glsl*/
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            loader: 'ts-shader-loader'
        });
        return config
    }
};
