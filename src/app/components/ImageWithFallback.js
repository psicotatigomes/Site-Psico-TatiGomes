"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ImageWithFallback = ({ fallback, alt, src, ...props }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
