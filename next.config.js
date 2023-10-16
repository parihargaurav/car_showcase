/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuilderrors: true,
    }
}

module.exports = nextConfig