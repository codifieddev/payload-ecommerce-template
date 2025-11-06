import React from "react";

interface BlurbBlockProps {
  icon?: string;
  customIcon?: any;
  title: string;
  description: string;
  url?: string;
  urlNewTab?: boolean;
  iconPosition?: "top" | "left" | "right";
  iconSize?: "sm" | "md" | "lg" | "xl";
  iconColor?: string;
  iconBackgroundColor?: string;
  iconShape?: "none" | "circle" | "square" | "rounded";
  textAlign?: "left" | "center" | "right";
  titleColor?: string;
  titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  descriptionColor?: string;
  backgroundColor?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  borderRadius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  borderColor?: string;
  borderWidth?: string;
  hoverEffect?: "none" | "lift" | "scale" | "glow";
  animation?: "none" | "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "zoomIn";
  className?: string;
}

const iconMap: Record<string, string> = {
  check: "✓",
  star: "★",
  heart: "♥",
  lightning: "⚡",
  shield: "🛡",
  rocket: "🚀",
  globe: "🌐",
  users: "👥",
  chart: "📊",
  settings: "⚙",
  lock: "🔒",
  unlock: "🔓",
};

export const BlurbBlock: React.FC<BlurbBlockProps> = (props) => {
  const {
    icon = "check",
    customIcon,
    title,
    description,
    url,
    urlNewTab,
    iconPosition = "top",
    iconSize = "md",
    iconColor,
    iconBackgroundColor,
    iconShape = "none",
    textAlign = "center",
    titleColor,
    titleSize = "h3",
    descriptionColor,
    backgroundColor,
    padding = "md",
    borderRadius = "none",
    shadow = "none",
    border,
    borderColor,
    borderWidth = "1",
    hoverEffect = "none",
    animation = "none",
    className,
  } = props;

  const paddingClasses = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  };

  const borderRadiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const iconSizeClasses = {
    sm: "w-8 h-8 text-2xl",
    md: "w-12 h-12 text-4xl",
    lg: "w-16 h-16 text-5xl",
    xl: "w-20 h-20 text-6xl",
  };

  const iconShapeClasses = {
    none: "",
    circle: "rounded-full p-3",
    square: "p-3",
    rounded: "rounded-lg p-3",
  };

  const textAlignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const titleSizeClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
  };

  const hoverEffectClasses = {
    none: "",
    lift: "hover:-translate-y-2 transition-transform duration-300",
    scale: "hover:scale-105 transition-transform duration-300",
    glow: "hover:shadow-2xl transition-shadow duration-300",
  };

  const animationClasses = {
    none: "",
    fadeIn: "animate-fadeIn",
    slideUp: "animate-slideUp",
    slideLeft: "animate-slideLeft",
    slideRight: "animate-slideRight",
    zoomIn: "animate-zoomIn",
  };

  const layoutClasses = {
    top: "flex-col",
    left: "flex-row",
    right: "flex-row-reverse",
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || undefined,
    borderColor: border && borderColor ? borderColor : undefined,
    borderWidth: border ? `${borderWidth}px` : undefined,
    borderStyle: border ? "solid" : undefined,
  };

  const iconContainerStyle: React.CSSProperties = {
    backgroundColor: iconBackgroundColor || undefined,
    color: iconColor || undefined,
  };

  const titleStyle: React.CSSProperties = {
    color: titleColor || undefined,
  };

  const descriptionStyle: React.CSSProperties = {
    color: descriptionColor || undefined,
  };

  const content = (
    <div
      className={`flex ${layoutClasses[iconPosition]} ${textAlignClasses[textAlign]} ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} ${animationClasses[animation]} ${className || ""} `}
      style={containerStyle}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center ${iconSizeClasses[iconSize]} ${iconShapeClasses[iconShape]} ${iconPosition === "top" ? "mb-4" : iconPosition === "left" ? "mr-4" : "ml-4"} `}
        style={iconContainerStyle}
      >
        {customIcon && typeof customIcon === "object" && "url" in customIcon ? (
          <img src={customIcon.url} alt={title} className="h-full w-full object-contain" />
        ) : (
          <span>{iconMap[icon] || iconMap.check}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className={`${titleSizeClasses[titleSize]} mb-2`} style={titleStyle}>
          {title}
        </h3>
        <p className="text-base leading-relaxed" style={descriptionStyle}>
          {description}
        </p>
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target={urlNewTab ? "_blank" : undefined}
        rel={urlNewTab ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};
