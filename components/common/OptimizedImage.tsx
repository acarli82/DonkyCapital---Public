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

  // Skip WebP conversion for SVG
  if (extension === 'svg') {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
      />
    )
  }

  const webpSrc = `${basePath}.webp`

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
