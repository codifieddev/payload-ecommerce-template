"use client";

import React, { useState } from "react";
import RichText from "@/components/RichText";

export const ToggleBlock: React.FC<any> = (props) => {
  const {
    title,
    content,
    defaultOpen = false,
    titleSize = "lg",
    titleColor,
    contentColor,
    backgroundColor,
    borderColor,
    iconStyle = "plus",
    iconPosition = "right",
    borderRadius = "md",
    padding = "md",
    margin = "sm",
    shadow = "sm",
    hoverEffect = true,
    animation = "none",
    className,
  } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const titleSizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const borderRadiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  const paddingClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  const marginClasses = {
    none: "m-0",
    sm: "mb-2",
    md: "mb-4",
    lg: "mb-6",
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
  };

  const getIcon = () => {
    if (iconStyle === "plus") {
      return isOpen ? "−" : "+";
    } else if (iconStyle === "chevron") {
      return isOpen ? "⌃" : "⌄";
    } else {
      return isOpen ? "↑" : "↓";
    }
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || undefined,
    borderColor: borderColor || "#e5e7eb",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  const titleStyle: React.CSSProperties = {
    color: titleColor || undefined,
  };

  const contentStyle: React.CSSProperties = {
    color: contentColor || undefined,
  };

  return (
    <div
      className={` ${borderRadiusClasses[borderRadius]} ${marginClasses[margin]} ${shadowClasses[shadow]} ${animationClasses[animation]} ${hoverEffect ? "transition-shadow hover:shadow-md" : ""} ${className || ""} `}
      style={containerStyle}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between ${paddingClasses[padding]} ${iconPosition === "left" ? "flex-row-reverse" : ""} transition-colors`}
      >
        <span className={`${titleSizeClasses[titleSize]} font-semibold`} style={titleStyle}>
          {title}
        </span>
        <span className="ml-2 text-xl font-bold">{getIcon()}</span>
      </button>

      {isOpen && (
        <div className={`${paddingClasses[padding]} animate-slideDown pt-0`} style={contentStyle}>
          <RichText data={content} />
        </div>
      )}
    </div>
  );
};
