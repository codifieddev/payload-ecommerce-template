import React from "react";

const iconMap: Record<string, string> = {
  star: "★",
  heart: "♥",
  diamond: "◆",
  circle: "●",
  square: "■",
};

export const DividerBlock: React.FC<any> = (props) => {
  const {
    style = "solid",
    showIcon,
    centerContent = "icon",
    icon = "star",
    text,
    width = "full",
    alignment = "center",
    color = "#e5e7eb",
    thickness = "1",
    marginTop = "md",
    marginBottom = "md",
    gradientStartColor,
    gradientEndColor,
    animation = "none",
    className,
  } = props;

  const widthClasses = {
    full: "w-full",
    "3/4": "w-3/4",
    "1/2": "w-1/2",
    "1/4": "w-1/4",
  };

  const alignmentClasses = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  const marginTopClasses = {
    none: "mt-0",
    sm: "mt-4",
    md: "mt-8",
    lg: "mt-12",
    xl: "mt-16",
  };

  const marginBottomClasses = {
    none: "mb-0",
    sm: "mb-4",
    md: "mb-8",
    lg: "mb-12",
    xl: "mb-16",
  };

  const animationClasses = {
    none: "",
    fadeIn: "animate-fadeIn",
    expand: "animate-expand",
  };

  const borderStyles = {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
    gradient: "solid",
  };

  const dividerStyle: React.CSSProperties = {
    borderTopWidth: `${thickness}px`,
    borderTopStyle: borderStyles[style],
    borderTopColor: style !== "gradient" ? color : undefined,
    backgroundImage:
      style === "gradient" && gradientStartColor && gradientEndColor
        ? `linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor})`
        : undefined,
    height: style === "gradient" ? `${thickness}px` : undefined,
    border: style === "gradient" ? "none" : undefined,
  };

  if (showIcon && (text || icon)) {
    return (
      <div
        className={`flex items-center ${widthClasses[width]} ${alignmentClasses[alignment]} ${marginTopClasses[marginTop]} ${marginBottomClasses[marginBottom]} ${animationClasses[animation]} ${className || ""} `}
      >
        <div className="flex-1" style={dividerStyle}></div>
        <div className="px-4 text-gray-500">{centerContent === "text" ? text : iconMap[icon]}</div>
        <div className="flex-1" style={dividerStyle}></div>
      </div>
    );
  }

  return (
    <div
      className={` ${widthClasses[width]} ${alignmentClasses[alignment]} ${marginTopClasses[marginTop]} ${marginBottomClasses[marginBottom]} ${animationClasses[animation]} ${className || ""} `}
      style={dividerStyle}
    ></div>
  );
};
