import React from "react";

export const TextBlock: React.FC<any> = (props) => {
  const {
    text,
    fontSize = "base",
    fontWeight = "normal",
    textAlign = "left",
    textColor,
    backgroundColor,
    lineHeight = "normal",
    letterSpacing = "normal",
    padding = "none",
    margin = "none",
    textTransform = "none",
    textDecoration = "none",
    fontStyle = "normal",
    maxWidth = "full",
    animation = "none",
    className,
  } = props;

  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  const fontWeightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const lineHeightClasses = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  const letterSpacingClasses = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  const marginClasses = {
    none: "m-0",
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8",
  };

  const textTransformClasses = {
    none: "normal-case",
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  const textDecorationClasses = {
    none: "no-underline",
    underline: "underline",
    "line-through": "line-through",
  };

  const fontStyleClasses = {
    normal: "not-italic",
    italic: "italic",
  };

  const maxWidthClasses = {
    full: "max-w-full",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  const animationClasses = {
    none: "",
    fadeIn: "animate-fadeIn",
    slideUp: "animate-slideUp",
    slideLeft: "animate-slideLeft",
    slideRight: "animate-slideRight",
  };

  const style: React.CSSProperties = {
    color: textColor || undefined,
    backgroundColor: backgroundColor || undefined,
  };

  return (
    <div
      className={` ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} ${textAlignClasses[textAlign]} ${lineHeightClasses[lineHeight]} ${letterSpacingClasses[letterSpacing]} ${paddingClasses[padding]} ${marginClasses[margin]} ${textTransformClasses[textTransform]} ${textDecorationClasses[textDecoration]} ${fontStyleClasses[fontStyle]} ${maxWidthClasses[maxWidth]} ${animationClasses[animation]} ${className || ""} `}
      style={style}
    >
      {text}
    </div>
  );
};
