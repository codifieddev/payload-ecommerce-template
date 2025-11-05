import React from "react";

interface ButtonBlockProps {
  block: {
    label: string;
    link: {
      type: string;
      url?: string;
      page?: any;
      email?: string;
      phone?: string;
      anchor?: string;
      newTab?: boolean;
      rel?: string;
    };
    icon?: {
      enable: boolean;
      iconName?: string;
      position?: string;
      iconSize?: string;
    };
    variant: string;
    customColors?: {
      backgroundColor?: string;
      textColor?: string;
      hoverBackgroundColor?: string;
      hoverTextColor?: string;
      borderColor?: string;
    };
    size: string;
    fullWidth?: boolean;
    alignment?: string;
    borderRadius: string;
    shadow: string;
    fontWeight: string;
    textTransform: string;
    animation?: string;
    disabled?: boolean;
    ariaLabel?: string;
    padding?: {
      horizontal: string;
      vertical: string;
    };
    margin?: {
      top: string;
      bottom: string;
    };
    className?: string;
  };
}

export const ButtonBlockRenderer: React.FC<ButtonBlockProps> = ({ block }) => {
  // Generate the href based on link type
  const getHref = () => {
    switch (block.link.type) {
      case "external":
        return block.link.url || "#";
      case "internal":
        // Assuming page has a slug property
        return block.link.page?.slug ? `/${block.link.page.slug}` : "#";
      case "email":
        return `mailto:${block.link.email}`;
      case "phone":
        return `tel:${block.link.phone}`;
      case "anchor":
        return block.link.anchor || "#";
      default:
        return "#";
    }
  };

  // Get button variant styles
  const getVariantStyles = (): React.CSSProperties => {
    if (block.variant === "custom" && block.customColors) {
      return {
        backgroundColor: block.customColors.backgroundColor || "#0066cc",
        color: block.customColors.textColor || "#ffffff",
        borderColor: block.customColors.borderColor || "transparent",
        border: "1px solid",
      };
    }

    const variantMap: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: "var(--btn-primary-bg, #0066cc)",
        color: "var(--btn-primary-text, #ffffff)",
        border: "none",
      },
      secondary: {
        backgroundColor: "var(--btn-secondary-bg, #6366f1)",
        color: "var(--btn-secondary-text, #ffffff)",
        border: "none",
      },
      outline: {
        backgroundColor: "transparent",
        color: "var(--btn-outline-text, #0066cc)",
        border: "2px solid currentColor",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--btn-ghost-text, #374151)",
        border: "none",
      },
      link: {
        backgroundColor: "transparent",
        color: "var(--btn-link-text, #0066cc)",
        border: "none",
        textDecoration: "underline",
      },
      destructive: {
        backgroundColor: "var(--btn-destructive-bg, #ef4444)",
        color: "var(--btn-destructive-text, #ffffff)",
        border: "none",
      },
      success: {
        backgroundColor: "var(--btn-success-bg, #10b981)",
        color: "var(--btn-success-text, #ffffff)",
        border: "none",
      },
    };

    return variantMap[block.variant] || variantMap.primary;
  };

  // Get button size styles
  const getSizeStyles = (): React.CSSProperties => {
    const sizeMap: Record<string, React.CSSProperties> = {
      xs: { fontSize: "0.75rem", padding: "0.375rem 0.75rem" },
      sm: { fontSize: "0.875rem", padding: "0.5rem 1rem" },
      md: { fontSize: "1rem", padding: "0.625rem 1.25rem" },
      lg: { fontSize: "1.125rem", padding: "0.75rem 1.5rem" },
      xl: { fontSize: "1.25rem", padding: "1rem 2rem" },
    };
    return sizeMap[block.size] || sizeMap.md;
  };

  // Get custom padding if specified
  const getCustomPadding = (): React.CSSProperties => {
    if (!block.padding) return {};

    const horizontalMap: Record<string, string> = {
      default: "",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    };

    const verticalMap: Record<string, string> = {
      default: "",
      sm: "0.375rem",
      md: "0.625rem",
      lg: "0.875rem",
      xl: "1.25rem",
    };

    const horizontal = horizontalMap[block.padding.horizontal];
    const vertical = verticalMap[block.padding.vertical];

    if (horizontal && vertical) {
      return { padding: `${vertical} ${horizontal}` };
    }
    return {};
  };

  // Get border radius
  const getBorderRadius = () => {
    const radiusMap: Record<string, string> = {
      none: "0",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      full: "9999px",
    };
    return radiusMap[block.borderRadius] || "0.375rem";
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

  // Get font weight
  const getFontWeight = () => {
    const weightMap: Record<string, string> = {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    };
    return weightMap[block.fontWeight] || "500";
  };

  // Get margins
  const getMargin = () => {
    if (!block.margin) return {};

    const marginMap: Record<string, string> = {
      none: "0",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    };

    return {
      marginTop: marginMap[block.margin.top] || "0",
      marginBottom: marginMap[block.margin.bottom] || "0",
    };
  };

  // Get icon size
  const getIconSize = () => {
    const iconSizeMap: Record<string, string> = {
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
    };
    return iconSizeMap[block.icon?.iconSize || "md"] || "1.25rem";
  };

  // Get animation class
  const getAnimationClass = () => {
    const animationMap: Record<string, string> = {
      "scale-up": "btn-hover-scale-up",
      "scale-down": "btn-hover-scale-down",
      lift: "btn-hover-lift",
      "slide-right": "btn-hover-slide-right",
      pulse: "btn-hover-pulse",
      bounce: "btn-hover-bounce",
    };
    return block.animation && block.animation !== "none" ? animationMap[block.animation] || "" : "";
  };

  // Combine all styles
  const buttonStyles: React.CSSProperties = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...getCustomPadding(),
    ...getMargin(),
    borderRadius: getBorderRadius(),
    boxShadow: getBoxShadow(),
    fontWeight: getFontWeight(),
    textTransform: block.textTransform as any,
    width: block.fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: block.disabled ? "not-allowed" : "pointer",
    opacity: block.disabled ? 0.6 : 1,
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  // Wrapper styles for alignment
  const wrapperStyles: React.CSSProperties = {
    display: "flex",
    justifyContent:
      block.alignment === "center" ? "center" : block.alignment === "right" ? "flex-end" : "flex-start",
    width: "100%",
  };

  // Render icon if enabled
  const renderIcon = () => {
    if (!block.icon?.enable || !block.icon.iconName) return null;

    return (
      <span className={`button-icon ${block.icon.iconName}`} style={{ fontSize: getIconSize() }}>
        {/* You can replace this with your icon library component */}
        <i className={block.icon.iconName} />
      </span>
    );
  };

  const target = block.link.newTab ? "_blank" : undefined;
  const rel = block.link.rel !== "none" ? block.link.rel : undefined;
  const finalRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

  const animationClass = getAnimationClass();
  const className = `${block.className || ""} ${animationClass}`.trim();

  return (
    <>
      <style>{`
        .btn-hover-scale-up:hover:not(:disabled) { transform: scale(1.05); }
        .btn-hover-scale-down:hover:not(:disabled) { transform: scale(0.95); }
        .btn-hover-lift:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .btn-hover-slide-right:hover:not(:disabled) { transform: translateX(4px); }
        .btn-hover-pulse:hover:not(:disabled) { animation: pulse 0.5s ease; }
        .btn-hover-bounce:hover:not(:disabled) { animation: bounce 0.5s ease; }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        ${
          block.variant === "custom" && block.customColors
            ? `
          .button-custom:hover:not(:disabled) {
            background-color: ${block.customColors.hoverBackgroundColor || block.customColors.backgroundColor} !important;
            color: ${block.customColors.hoverTextColor || block.customColors.textColor} !important;
          }
        `
            : ""
        }
      `}</style>

      <div style={wrapperStyles}>
        <a
          href={getHref()}
          target={target}
          rel={finalRel}
          style={buttonStyles}
          className={`${className} ${block.variant === "custom" ? "button-custom" : ""}`}
          aria-label={block.ariaLabel || block.label}
          aria-disabled={block.disabled}
          onClick={(e) => block.disabled && e.preventDefault()}
        >
          {block.icon?.enable && block.icon.position === "left" && renderIcon()}
          <span>{block.label}</span>
          {block.icon?.enable && block.icon.position === "right" && renderIcon()}
        </a>
      </div>
    </>
  );
};

export default ButtonBlockRenderer;
