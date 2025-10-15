"use client";

import { useLazyLoad } from "@/hooks/useLazyLoad";

interface LazyIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  threshold?: number;
  rootMargin?: string;
  placeholderText?: string;
  [key: string]: unknown;
}

export const LazyIframe = ({
  src,
  title,
  width = "100%",
  height = "400",
  className = "",
  allowFullScreen = false,
  loading = "lazy",
  threshold = 0.1,
  rootMargin = "100px",
  placeholderText = "Loading content...",
  ...rest
}: LazyIframeProps) => {
  const { elementRef, isIntersecting } = useLazyLoad({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  // Placeholder component while not intersecting
  if (!isIntersecting) {
    return (
      <div
        ref={(el) => {
          if (el && elementRef) {
            (elementRef as React.MutableRefObject<HTMLElement | null>).current = el;
          }
        }}
        className={`bg-gray-200 dark:bg-slate-700 animate-pulse flex items-center justify-center ${className}`}
        style={{
          width,
          height,
        }}
      >
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {placeholderText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div ref={(el) => {
      if (el && elementRef) {
        (elementRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }
    }}>
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300`}
        allowFullScreen={allowFullScreen}
        loading={loading}
        {...rest}
      />
    </div>
  );
};

export default LazyIframe;