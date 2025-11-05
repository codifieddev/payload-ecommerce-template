"use client";

import React from "react";
import TextBlockRenderer from "../Heading/component";
import ButtonBlockRenderer from "../Button/component";

interface LayoutBlockProps {
  block: {
    layoutType: string;
    columnRatio?: string;
    customColumnRatio?: string;
    maxWidth: string;
    customMaxWidth?: string;
    alignment: string;
    verticalAlignment: string;
    gap: string;
    responsiveBehavior: string;
    backgroundColor: string;
    customBackgroundColor?: string;
    backgroundImage?: {
      enable: boolean;
      image?: any;
      size?: string;
      position?: string;
      attachment?: string;
      overlay?: boolean;
      overlayColor?: string;
    };
    gradient?: {
      enable: boolean;
      type?: string;
      direction?: string;
      colorStops?: string;
    };
    padding: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
    margin: {
      top: string;
      bottom: string;
    };
    border?: {
      enable: boolean;
      width?: string;
      style?: string;
      color?: string;
    };
    borderRadius: string;
    shadow: string;
    minHeight?: string;
    customMinHeight?: string;
    animation?: {
      enable: boolean;
      type?: string;
      duration?: string;
    };
    customId?: string;
    className?: string;
    columns: Array<{
      columnName?: string;
      content: Array<{
        blockType: string;
        [key: string]: any;
      }>;
    }>;
  };
}

export const LayoutBlockRenderer: React.FC<LayoutBlockProps> = ({ block }) => {
  console.log(block);
  // Get background color
  const getBackgroundColor = () => {
    if (block.backgroundColor === "custom" && block.customBackgroundColor) {
      return block.customBackgroundColor;
    }

    const colorMap: Record<string, string> = {
      transparent: "transparent",
      white: "#ffffff",
      "light-gray": "#f9fafb",
      gray: "#e5e7eb",
      "dark-gray": "#374151",
      black: "#000000",
      primary: "var(--bg-primary, #eff6ff)",
      secondary: "var(--bg-secondary, #f5f3ff)",
      accent: "var(--bg-accent, #fdf2f8)",
    };

    return colorMap[block.backgroundColor] || "transparent";
  };

  // Get background image styles
  const getBackgroundImageStyles = (): React.CSSProperties => {
    if (!block.backgroundImage?.enable || !block.backgroundImage.image) {
      return {};
    }

    const imageUrl =
      typeof block.backgroundImage.image === "string"
        ? block.backgroundImage.image
        : block.backgroundImage.image.url;

    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: block.backgroundImage.size || "cover",
      backgroundPosition: block.backgroundImage.position || "center",
      backgroundAttachment: block.backgroundImage.attachment || "scroll",
      backgroundRepeat: "no-repeat",
    };
  };

  // Get gradient styles
  const getGradientStyles = (): React.CSSProperties => {
    if (!block.gradient?.enable || !block.gradient.colorStops) {
      return {};
    }

    const colors = block.gradient.colorStops;
    const type = block.gradient.type || "linear";
    const direction = block.gradient.direction || "to-right";

    const directionMap: Record<string, string> = {
      "to-right": "to right",
      "to-left": "to left",
      "to-bottom": "to bottom",
      "to-top": "to top",
      "to-bottom-right": "to bottom right",
    };

    if (type === "linear") {
      return {
        backgroundImage: `linear-gradient(${directionMap[direction]}, ${colors})`,
      };
    } else {
      return {
        backgroundImage: `radial-gradient(circle, ${colors})`,
      };
    }
  };

  // Get spacing values
  const getSpacing = (value: string) => {
    const spacingMap: Record<string, string> = {
      none: "0",
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
      "2xl": "4rem",
      "3xl": "6rem",
    };
    return spacingMap[value] || "0";
  };

  // Get max width
  const getMaxWidth = () => {
    if (block.maxWidth === "custom" && block.customMaxWidth) {
      return block.customMaxWidth;
    }

    const maxWidthMap: Record<string, string> = {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1792px",
      full: "100%",
    };

    return maxWidthMap[block.maxWidth] || "1536px";
  };

  // Get grid template columns based on layout type and ratio
  const getGridTemplateColumns = () => {
    if (block.columnRatio === "custom" && block.customColumnRatio) {
      return block.customColumnRatio;
    }

    const layoutType = block.layoutType;
    const ratio = block.columnRatio || "equal";

    // Single column layouts
    if (layoutType === "single-column") {
      return "1fr";
    }

    // Multi-column layouts with ratios
    const ratioMap: Record<string, Record<string, string>> = {
      "two-columns": {
        equal: "1fr 1fr",
        "1-2": "1fr 2fr",
        "2-1": "2fr 1fr",
        "1-3": "1fr 3fr",
        "3-1": "3fr 1fr",
      },
      "three-columns": {
        equal: "1fr 1fr 1fr",
        "1-2-1": "1fr 2fr 1fr",
      },
      "four-columns": {
        equal: "1fr 1fr 1fr 1fr",
      },
      "sidebar-left": {
        equal: "300px 1fr",
        "1-2": "1fr 2fr",
        "1-3": "1fr 3fr",
      },
      "sidebar-right": {
        equal: "1fr 300px",
        "2-1": "2fr 1fr",
        "3-1": "3fr 1fr",
      },
      "split-screen": {
        equal: "1fr 1fr",
      },
      "card-grid": {
        equal: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      masonry: {
        equal: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    };

    return ratioMap[layoutType]?.[ratio] || "1fr";
  };

  // Get vertical alignment
  const getAlignItems = () => {
    const alignMap: Record<string, string> = {
      top: "flex-start",
      center: "center",
      bottom: "flex-end",
      stretch: "stretch",
    };
    return alignMap[block.verticalAlignment] || "flex-start";
  };

  // Get border radius
  const getBorderRadius = () => {
    const radiusMap: Record<string, string> = {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
    };
    return radiusMap[block.borderRadius] || "0";
  };

  // Get box shadow
  const getBoxShadow = () => {
    const shadowMap: Record<string, string> = {
      none: "none",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    };
    return shadowMap[block.shadow] || "none";
  };

  // Get border styles
  const getBorderStyles = (): React.CSSProperties => {
    if (!block.border?.enable) return {};

    return {
      border: `${block.border.width || "1"}px ${block.border.style || "solid"} ${block.border.color || "#e5e5e5"}`,
    };
  };

  // Get min height
  const getMinHeight = () => {
    if (block.minHeight === "custom" && block.customMinHeight) {
      return block.customMinHeight;
    }

    const minHeightMap: Record<string, string> = {
      none: "auto",
      "300": "300px",
      "400": "400px",
      "500": "500px",
      "50vh": "50vh",
      "75vh": "75vh",
      "100vh": "100vh",
    };

    return minHeightMap[block.minHeight || "none"] || "auto";
  };

  // Get animation class
  const getAnimationClass = () => {
    if (!block.animation?.enable) return "";

    const animationMap: Record<string, string> = {
      "fade-in": "layout-fade-in",
      "fade-in-up": "layout-fade-in-up",
      "slide-up": "layout-slide-up",
      "zoom-in": "layout-zoom-in",
    };

    return animationMap[block.animation.type || "fade-in"] || "";
  };

  // Get animation duration
  const getAnimationDuration = () => {
    const durationMap: Record<string, string> = {
      fast: "300ms",
      normal: "500ms",
      slow: "700ms",
    };
    return durationMap[block.animation?.duration || "normal"] || "500ms";
  };

  // Container styles
  const containerStyles: React.CSSProperties = {
    width: "100%",
    maxWidth: getMaxWidth(),
    marginLeft: block.alignment === "center" ? "auto" : block.alignment === "right" ? "auto" : "0",
    marginRight: block.alignment === "center" ? "auto" : block.alignment === "left" ? "auto" : "0",
    marginTop: getSpacing(block.margin.top),
    marginBottom: getSpacing(block.margin.bottom),
    position: "relative",
  };

  // Inner container styles
  const innerStyles: React.CSSProperties = {
    backgroundColor: getBackgroundColor(),
    ...getBackgroundImageStyles(),
    ...getGradientStyles(),
    ...getBorderStyles(),
    paddingTop: getSpacing(block.padding.top),
    paddingBottom: getSpacing(block.padding.bottom),
    paddingLeft: getSpacing(block.padding.left),
    paddingRight: getSpacing(block.padding.right),
    borderRadius: getBorderRadius(),
    boxShadow: getBoxShadow(),
    minHeight: getMinHeight(),
    position: "relative",
    overflow: "hidden",
  };

  // Grid styles
  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: getGridTemplateColumns(),
    gap: getSpacing(block.gap),
    alignItems: getAlignItems(),
    width: "100%",
  };

  // Responsive styles
  const responsiveClass = `layout-responsive-${block.responsiveBehavior}`;

  // Render block content
  const renderBlockContent = (blockData: any) => {
    switch (blockData.blockType) {
      case "textBlock":
        return <TextBlockRenderer key={blockData.id} block={blockData} />;
      case "buttonBlock":
        return <ButtonBlockRenderer key={blockData.id} block={blockData} />;
      default:
        return null;
    }
  };

  const animationClass = getAnimationClass();
  const animationDuration = getAnimationDuration();

  return (
    <>
      <style>{`
        /* Responsive behavior */
        @media (max-width: 768px) {
          .layout-responsive-stack .layout-grid {
            grid-template-columns: 1fr !important;
          }
          .layout-responsive-reverse .layout-grid {
            grid-template-columns: 1fr !important;
            direction: rtl;
          }
          .layout-responsive-reverse .layout-grid > * {
            direction: ltr;
          }
          .layout-responsive-hide-mobile {
            display: none !important;
          }
        }

        /* Animations */
        .layout-fade-in {
          animation: layoutFadeIn ${animationDuration} ease-out;
        }
        .layout-fade-in-up {
          animation: layoutFadeInUp ${animationDuration} ease-out;
        }
        .layout-slide-up {
          animation: layoutSlideUp ${animationDuration} ease-out;
        }
        .layout-zoom-in {
          animation: layoutZoomIn ${animationDuration} ease-out;
        }

        @keyframes layoutFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes layoutFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes layoutSlideUp {
          from { transform: translateY(30px); }
          to { transform: translateY(0); }
        }

        @keyframes layoutZoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        id={block.customId}
        className={`${block.className || ""} ${responsiveClass} ${animationClass}`.trim()}
        style={containerStyles}
      >
        <div style={innerStyles}>
          {/* Background overlay */}
          {block.backgroundImage?.enable && block.backgroundImage.overlay && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: block.backgroundImage.overlayColor || "rgba(0,0,0,0.5)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Content grid */}
          <div className="layout-grid" style={gridStyles}>
            {block.columns.map((column, index) => (
              <div key={index} className="layout-column">
                {column.content.map((blockData) => renderBlockContent(blockData))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutBlockRenderer;
