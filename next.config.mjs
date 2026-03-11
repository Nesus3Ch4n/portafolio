/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // ← AGREGAR: Habilita exportación estática
  basePath: '/portafolio', // ← AGREGAR: Nombre de tu repositorio
  assetPrefix: '/portafolio/', // ← AGREGAR: Prefijo para assets
  trailingSlash: true, // ← AGREGAR: Opcional, mejora rutas
}

export default nextConfig