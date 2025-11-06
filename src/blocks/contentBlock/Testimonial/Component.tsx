import React from "react";

export const TestimonialBlock: React.FC<any> = (props) => {
  const {
    quote,
    authorName,
    authorTitle,
    authorCompany,
    authorImage,
    rating,
    showQuoteIcon = true,
    layout = "card",
    quoteSize = "lg",
    quoteColor,
    authorNameColor,
    authorTitleColor,
    backgroundColor,
    borderColor,
    imageSize = "md",
    imageShape = "circle",
    textAlign = "left",
    borderRadius = "lg",
    padding = "lg",
    shadow = "md",
    quoteIconColor,
    starColor,
    animation = "fadeIn",
    className,
  } = props;

  const quoteSizeClasses = {
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const imageSizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const imageShapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  const textAlignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const borderRadiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  const animationClasses = {
    none: "",
    fadeIn: "animate-fadeIn",
    slideUp: "animate-slideUp",
    scale: "animate-scale",
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || undefined,
    borderColor: borderColor || "#e5e7eb",
    borderWidth: borderColor ? "1px" : undefined,
    borderStyle: borderColor ? "solid" : undefined,
  };

  const quoteStyle: React.CSSProperties = {
    color: quoteColor || undefined,
  };

  const authorNameStyle: React.CSSProperties = {
    color: authorNameColor || undefined,
  };

  const authorTitleStyle: React.CSSProperties = {
    color: authorTitleColor || "#6b7280",
  };

  const quoteIconStyle: React.CSSProperties = {
    color: quoteIconColor || "#d1d5db",
  };

  const starStyle: React.CSSProperties = {
    color: starColor || "#fbbf24",
  };

  const renderStars = () => {
    if (!rating) return null;
    return (
      <div className="mb-2 flex gap-1" style={starStyle}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    );
  };

  const renderAuthor = () => (
    <div className={`flex items-center gap-3 ${textAlign === "center" ? "justify-center" : ""}`}>
      {authorImage && typeof authorImage === "object" && "url" in authorImage && (
        <img
          src={authorImage.url}
          alt={authorName}
          className={`${imageSizeClasses[imageSize]} ${imageShapeClasses[imageShape]} object-cover`}
        />
      )}
      <div className={textAlign === "center" ? "text-center" : ""}>
        <div className="font-semibold" style={authorNameStyle}>
          {authorName}
        </div>
        {authorTitle && (
          <div className="text-sm" style={authorTitleStyle}>
            {authorTitle}
            {authorCompany && `, ${authorCompany}`}
          </div>
        )}
      </div>
    </div>
  );

  if (layout === "centered") {
    return (
      <div
        className={`flex flex-col items-center text-center ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${animationClasses[animation]} ${className || ""} `}
        style={containerStyle}
      >
        {showQuoteIcon && (
          <div className="mb-4 text-6xl" style={quoteIconStyle}>
            "
          </div>
        )}
        {renderStars()}
        <p className={`${quoteSizeClasses[quoteSize]} mb-6 italic`} style={quoteStyle}>
          {quote}
        </p>
        {renderAuthor()}
      </div>
    );
  }

  if (layout === "inline") {
    return (
      <div
        className={`flex items-start gap-4 ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${animationClasses[animation]} ${className || ""} `}
        style={containerStyle}
      >
        {authorImage && typeof authorImage === "object" && "url" in authorImage && (
          <img
            src={authorImage.url}
            alt={authorName}
            className={`${imageSizeClasses[imageSize]} ${imageShapeClasses[imageShape]} flex-shrink-0 object-cover`}
          />
        )}
        <div className="flex-1">
          {renderStars()}
          {showQuoteIcon && (
            <span className="text-4xl" style={quoteIconStyle}>
              "
            </span>
          )}
          <p className={`${quoteSizeClasses[quoteSize]} mb-3 italic`} style={quoteStyle}>
            {quote}
          </p>
          <div className="font-semibold" style={authorNameStyle}>
            {authorName}
          </div>
          {authorTitle && (
            <div className="text-sm" style={authorTitleStyle}>
              {authorTitle}
              {authorCompany && `, ${authorCompany}`}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: card layout
  return (
    <div
      className={`flex flex-col ${textAlignClasses[textAlign]} ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${animationClasses[animation]} ${className || ""} `}
      style={containerStyle}
    >
      {showQuoteIcon && (
        <div className="mb-2 text-4xl" style={quoteIconStyle}>
          "
        </div>
      )}
      {renderStars()}
      <p className={`${quoteSizeClasses[quoteSize]} mb-4 italic`} style={quoteStyle}>
        {quote}
      </p>
      {renderAuthor()}
    </div>
  );
};
