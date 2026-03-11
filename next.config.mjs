const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración extra solo para producción (por ejemplo GitHub Pages)
  ...(isProd
    ? {
        output: 'export',
        basePath: '/portafolio',
        assetPrefix: '/portafolio/',
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig