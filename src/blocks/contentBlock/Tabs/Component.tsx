"use client";

import React, { useState } from "react";
import RichText from "@/components/RichText";

const iconMap: Record<string, string> = {
  none: "",
  home: "🏠",
  user: "👤",
  settings: "⚙️",
  star: "⭐",
  heart: "❤️",
};

export const TabsBlock: React.FC<any> = (props) => {
  const {
    tabs = [],
    defaultTab = 0,
    tabsStyle = "underline",
    tabsPosition = "top",
    tabsAlignment = "left",
    activeTabColor,
    inactiveTabColor,
    tabBackgroundColor,
    contentBackgroundColor,
    contentBorderColor,
    borderRadius = "md",
    padding = "md",
    shadow = "sm",
    animation = "fade",
    className,
  } = props;

  const [activeTab, setActiveTab] = useState(defaultTab);

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

  const tabsAlignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const animationClasses = {
    none: "",
    fade: "animate-fadeIn",
    slide: "animate-slideUp",
  };

  const getTabClasses = (index: number) => {
    const isActive = index === activeTab;
    let classes = "px-4 py-2 cursor-pointer transition-all ";

    if (tabsStyle === "underline") {
      classes += isActive
        ? "border-b-2 font-semibold"
        : "border-b-2 border-transparent hover:border-gray-300";
    } else if (tabsStyle === "pills") {
      classes += `rounded-full ${isActive ? "font-semibold" : "hover:bg-gray-100"}`;
    } else if (tabsStyle === "boxed") {
      classes += `${borderRadiusClasses[borderRadius]} ${isActive ? "font-semibold" : "hover:bg-gray-100"}`;
    }

    return classes;
  };

  const getTabStyle = (index: number) => {
    const isActive = index === activeTab;
    const style: React.CSSProperties = {};

    if (isActive) {
      style.color = activeTabColor || undefined;
      if (tabsStyle === "underline") {
        style.borderColor = activeTabColor || "#3b82f6";
      } else {
        style.backgroundColor = tabBackgroundColor || "#3b82f6";
        style.color = activeTabColor || "#ffffff";
      }
    } else {
      style.color = inactiveTabColor || undefined;
    }

    return style;
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: contentBackgroundColor || undefined,
    borderColor: contentBorderColor || "#e5e7eb",
    borderWidth: contentBorderColor ? "1px" : undefined,
    borderStyle: contentBorderColor ? "solid" : undefined,
  };

  const layoutClasses =
    tabsPosition === "top" ? "flex-col" : tabsPosition === "left" ? "flex-row" : "flex-row-reverse";

  const tabsContainerClasses =
    tabsPosition === "top"
      ? `flex ${tabsAlignmentClasses[tabsAlignment]} border-b border-gray-200`
      : "flex flex-col border-r border-gray-200";

  return (
    <div className={`flex ${layoutClasses} ${className || ""}`}>
      {/* Tabs Header */}
      <div className={tabsContainerClasses}>
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={getTabClasses(index)}
            style={getTabStyle(index)}
          >
            {tab.icon && tab.icon !== "none" && <span className="mr-2">{iconMap[tab.icon]}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className={` ${paddingClasses[padding]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${animationClasses[animation]} flex-1`}
        style={contentStyle}
      >
        {tabs[activeTab] && <RichText data={tabs[activeTab].content} />}
      </div>
    </div>
  );
};
