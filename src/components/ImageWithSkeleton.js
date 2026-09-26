import { useState } from "react";

const ImageWithSkeleton = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-gray-300 animate-pulse rounded`} />
      )}
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? "hidden" : ""}`}
          onLoad={handleImageLoad}
          onError={handleError}
        />
      )}
      {error && (
        <div
          className={`${className} bg-gray-400 flex items-center justify-center rounded`}
        >
          <span className="text-white text-sm">Image failed to load</span>
        </div>
      )}
    </>
  );
};

export default ImageWithSkeleton;
