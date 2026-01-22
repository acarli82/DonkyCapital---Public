interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

/**
 * Optimized image component with WebP support and PNG/JPG fallback.
 * - Above the fold images: use priority={true} for preload
 * - Below the fold images: automatically uses lazy loading
 * Uses native <picture> tag for browser compatibility.
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: OptimizedImageProps) {
  // Get file extension and base path
  const lastDotIndex = src.lastIndexOf('.')
  const basePath = src.substring(0, lastDotIndex)
  const extension = src.substring(lastDotIndex + 1).toLowerCase()

  // Common img props
  const imgProps = {
    src,
    alt,
    width,
    height,
    className,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: priority ? 'sync' as const : 'async' as const,
    // @ts-expect-error - fetchpriority is valid HTML but not in React types yet
    fetchpriority: priority ? 'high' : undefined,
  }

  // Skip WebP conversion for SVG
  if (extension === 'svg') {
    return <img {...imgProps} />
  }

  const webpSrc = `${basePath}.webp`

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img {...imgProps} />
    </picture>
  )
}
