import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder-image.jpg",
  className,
  width,
  height,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      onError={handleError}
      unoptimized={imgSrc.startsWith("http")}
    />
  );
}
