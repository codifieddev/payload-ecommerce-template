import React from "react";

interface TextBlockProps {
  block: {
    textType: string;
    content: string;
    textAlign: string;
    textColor: string;
    customTextColor?: string;
    fontSize: string;
    customFontSize?: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing: string;
    textTransform: string;
    fontFamily: string;
    backgroundColor: string;
    customBackgroundColor?: string;
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
    maxWidth: string;
    className?: string;
    link?: {
      enable: boolean;
      url?: string;
      newTab?: boolean;
      rel?: string;
      linkStyle?: string;
      linkColor?: string;
      customLinkColor?: string;
    };
  };
}

export const TextBlockRenderer: React.FC<TextBlockProps> = ({ block }) => {
  // Map values to CSS classes/values
  const getTextColor = () => {
    if (block.textColor === "custom" && block.customTextColor) {
      return block.customTextColor;
    }
    const colorMap: Record<string, string> = {
      default: "inherit",
      primary: "var(--color-primary, #0066cc)",
      secondary: "var(--color-secondary, #6366f1)",
      accent: "var(--color-accent, #ec4899)",
      muted: "var(--color-muted, #6b7280)",
    };
    return colorMap[block.textColor] || "inherit";
  };

  const getFontSize = () => {
    if (block.fontSize === "custom" && block.customFontSize) {
      return block.customFontSize;
    }
    const sizeMap: Record<string, string> = {
      xs: "0.75rem",
      sm: "0.875rem",
      default: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    };
    return sizeMap[block.fontSize] || "1rem";
  };

  const getFontWeight = () => {
    const weightMap: Record<string, string> = {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    };
    return weightMap[block.fontWeight] || "400";
  };

  const getLineHeight = () => {
    const lineHeightMap: Record<string, string> = {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
      loose: "2",
    };
    return lineHeightMap[block.lineHeight] || "1.5";
  };

  const getLetterSpacing = () => {
    const spacingMap: Record<string, string> = {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    };
    return spacingMap[block.letterSpacing] || "0";
  };

  const getFontFamily = () => {
    const fontMap: Record<string, string> = {
      default: "inherit",
      sans: 'var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
      serif: 'var(--font-serif, Georgia, Cambria, "Times New Roman", serif)',
      mono: 'var(--font-mono, ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace)',
    };
    return fontMap[block.fontFamily] || "inherit";
  };

  const getBackgroundColor = () => {
    if (block.backgroundColor === "custom" && block.customBackgroundColor) {
      return block.customBackgroundColor;
    }
    const bgColorMap: Record<string, string> = {
      transparent: "transparent",
      light: "var(--bg-light, #f9fafb)",
      dark: "var(--bg-dark, #1f2937)",
      primary: "var(--bg-primary, #eff6ff)",
      secondary: "var(--bg-secondary, #f5f3ff)",
    };
    return bgColorMap[block.backgroundColor] || "transparent";
  };

  const getPadding = (side: keyof typeof block.padding) => {
    const paddingMap: Record<string, string> = {
      none: "0",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    };
    return paddingMap[block.padding[side]] || "0";
  };

  const getMargin = (side: keyof typeof block.margin) => {
    const marginMap: Record<string, string> = {
      none: "0",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    };
    return marginMap[block.margin[side]] || "0";
  };

  const getMaxWidth = () => {
    const maxWidthMap: Record<string, string> = {
      full: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    };
    return maxWidthMap[block.maxWidth] || "100%";
  };

  const getLinkColor = () => {
    if (!block.link?.enable) return "inherit";

    if (block.link.linkColor === "custom" && block.link.customLinkColor) {
      return block.link.customLinkColor;
    }

    const linkColorMap: Record<string, string> = {
      inherit: "inherit",
      primary: "var(--color-primary, #0066cc)",
      secondary: "var(--color-secondary, #6366f1)",
      accent: "var(--color-accent, #ec4899)",
    };
    return linkColorMap[block.link.linkColor || "inherit"] || "inherit";
  };

  const getLinkTextDecoration = () => {
    if (!block.link?.enable || !block.link.linkStyle) return "none";

    const linkStyleMap: Record<string, string> = {
      default: "none",
      underline: "underline",
      "no-underline": "none",
      "hover-underline": "none",
    };

    return linkStyleMap[block.link.linkStyle] || "none";
  };

  // Base styles for the text element
  const textStyles: React.CSSProperties = {
    color: getTextColor(),
    fontSize: getFontSize(),
    fontWeight: getFontWeight(),
    lineHeight: getLineHeight(),
    letterSpacing: getLetterSpacing(),
    textTransform: block.textTransform as any,
    fontFamily: getFontFamily(),
    textAlign: block.textAlign as any,
    backgroundColor: getBackgroundColor(),
    paddingTop: getPadding("top"),
    paddingBottom: getPadding("bottom"),
    paddingLeft: getPadding("left"),
    paddingRight: getPadding("right"),
    marginTop: getMargin("top"),
    marginBottom: getMargin("bottom"),
    maxWidth: getMaxWidth(),
    marginLeft: block.textAlign === "center" ? "auto" : undefined,
    marginRight: block.textAlign === "center" ? "auto" : undefined,
  };

  // Link wrapper styles
  const linkStyles: React.CSSProperties = {
    color: getLinkColor(),
    textDecoration: getLinkTextDecoration(),
    transition: "all 0.2s ease",
  };

  // Add hover class for hover-underline style
  const linkClassName = block.link?.linkStyle === "hover-underline" ? "text-block-link-hover" : "";

  // Render the appropriate HTML element based on textType
  const renderTextElement = () => {
    const className = block.className || "";
    const content = block.content;

    const elementProps = {
      style: textStyles,
      className,
    };

    switch (block.textType) {
      case "h1":
        return <h1 {...elementProps}>{content}</h1>;
      case "h2":
        return <h2 {...elementProps}>{content}</h2>;
      case "h3":
        return <h3 {...elementProps}>{content}</h3>;
      case "h4":
        return <h4 {...elementProps}>{content}</h4>;
      case "h5":
        return <h5 {...elementProps}>{content}</h5>;
      case "h6":
        return <h6 {...elementProps}>{content}</h6>;
      case "blockquote":
        return (
          <blockquote
            {...elementProps}
            style={{
              ...textStyles,
              borderLeft: "4px solid currentColor",
              paddingLeft: "1rem",
              fontStyle: "italic",
            }}
          >
            {content}
          </blockquote>
        );
      case "code":
        return (
          <pre
            {...elementProps}
            style={{
              ...textStyles,
              backgroundColor:
                textStyles.backgroundColor === "transparent" ? "#f5f5f5" : textStyles.backgroundColor,
              padding: "1rem",
              borderRadius: "0.375rem",
              overflow: "auto",
            }}
          >
            <code>{content}</code>
          </pre>
        );
      case "paragraph":
      default:
        return <p {...elementProps}>{content}</p>;
    }
  };

  // Wrap with link if enabled
  if (block.link?.enable && block.link.url) {
    const rel = block.link.rel !== "none" ? block.link.rel : undefined;
    const target = block.link.newTab ? "_blank" : undefined;

    // Add noopener noreferrer for security when opening in new tab
    const finalRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

    return (
      <>
        <style>{`
          .text-block-link-hover:hover {
            text-decoration: underline;
          }
        `}</style>
        <a href={block.link.url} target={target} rel={finalRel} style={linkStyles} className={linkClassName}>
          {renderTextElement()}
        </a>
      </>
    );
  }

  return renderTextElement();
};

export default TextBlockRenderer;
