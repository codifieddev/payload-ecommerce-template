// components/blocks/StoryBlock.tsx
import React from "react";
import Image from "next/image";
import { EditableText } from "@/components/EditableText";

interface StoryBlockProps {
  heading: string;
  subheading?: string;
  content: any;
  image?: any;
  imagePosition?: "left" | "right";
  fieldPath?: string; // e.g., "layout.0.blocks.0"
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
  radius?: any;
}

export const StoryBlock: React.FC<StoryBlockProps> = ({
  heading,
  subheading,
  content,
  image,
  imagePosition = "right",
  alignment,
  background,
  padding,
  margin,
  fieldPath = "",
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`grid items-center gap-12 md:grid-cols-2 ${imagePosition === "left" ? "md:flex-row-reverse" : ""}`}
        >
          {imagePosition === "left" && image && (
            <div className="relative h-96 overflow-hidden rounded-lg md:h-full">
              <Image src={image.url} alt={image.alt || heading} fill className="object-cover" />
            </div>
          )}

          <div className={`text-${alignment || "left"}`}>
            {subheading && (
              <EditableText
                fieldPath={fieldPath ? `${fieldPath}.subheading` : "subheading"}
                as="p"
                className="text-primary mb-2 font-semibold tracking-wide uppercase"
              >
                {subheading}
              </EditableText>
            )}
            <EditableText
              fieldPath={fieldPath ? `${fieldPath}.heading` : "heading"}
              as="h2"
              className="mb-6 text-4xl font-bold md:text-5xl"
            >
              {heading}
            </EditableText>
            <div className="prose prose-lg max-w-none">
              <RichText content={content} />
            </div>
          </div>

          {imagePosition === "right" && image && (
            <div className="relative h-96 overflow-hidden rounded-lg md:h-full">
              <Image src={image.url} alt={image.alt || heading} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// components/blocks/MissionVisionBlock.tsx
interface MissionVisionBlockProps {
  heading?: string;
  mission: {
    title: string;
    content: any;
    icon?: any;
  };
  vision: {
    title: string;
    content: any;
    icon?: any;
  };
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const MissionVisionBlock: React.FC<MissionVisionBlockProps> = ({
  heading,
  mission,
  vision,
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        {heading && (
          <h2 className={`mb-12 text-4xl font-bold md:text-5xl text-${alignment || "center"}`}>{heading}</h2>
        )}

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Mission */}
          <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            {mission.icon && (
              <div className="mb-6">
                <Image
                  src={mission.icon.url}
                  alt={mission.title}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
            )}
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">{mission.title}</h3>
            <div className="prose max-w-none">
              <RichText content={mission.content} />
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            {vision.icon && (
              <div className="mb-6">
                <Image
                  src={vision.icon.url}
                  alt={vision.title}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
            )}
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">{vision.title}</h3>
            <div className="prose max-w-none">
              <RichText content={vision.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// components/blocks/ValuesBlock.tsx
interface ValuesBlockProps {
  heading: string;
  subheading?: string;
  values: {
    title: string;
    description: string;
    icon?: any;
  }[];
  layout?: "grid-2" | "grid-3" | "grid-4" | "list";
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const ValuesBlock: React.FC<ValuesBlockProps> = ({
  heading,
  subheading,
  values,
  layout = "grid-3",
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  const getGridCols = () => {
    switch (layout) {
      case "grid-2":
        return "md:grid-cols-2";
      case "grid-3":
        return "md:grid-cols-3";
      case "grid-4":
        return "md:grid-cols-2 lg:grid-cols-4";
      case "list":
        return "md:grid-cols-1";
      default:
        return "md:grid-cols-3";
    }
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-${alignment || "center"} mb-12`}>
          {subheading && (
            <p className="text-primary mb-2 font-semibold tracking-wide uppercase">{subheading}</p>
          )}
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>

        <div className={`grid ${getGridCols()} gap-8`}>
          {values.map((value, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              {value.icon && (
                <div className="mb-4">
                  <Image
                    src={value.icon.url}
                    alt={value.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
              )}
              <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
              <p className="leading-relaxed text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// components/blocks/TeamBlock.tsx
interface TeamBlockProps {
  heading: string;
  subheading?: string;
  teamMembers: {
    name: string;
    position: string;
    bio?: string;
    image: any;
    socials?: {
      linkedin?: string;
      twitter?: string;
      email?: string;
    };
  }[];
  layout?: "grid-2" | "grid-3" | "grid-4";
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const TeamBlock: React.FC<TeamBlockProps> = ({
  heading,
  subheading,
  teamMembers,
  layout = "grid-3",
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  const getGridCols = () => {
    switch (layout) {
      case "grid-2":
        return "md:grid-cols-2";
      case "grid-3":
        return "md:grid-cols-3";
      case "grid-4":
        return "md:grid-cols-2 lg:grid-cols-4";
      default:
        return "md:grid-cols-3";
    }
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-${alignment || "center"} mb-12`}>
          {subheading && (
            <p className="text-primary mb-2 font-semibold tracking-wide uppercase">{subheading}</p>
          )}
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>

        <div className={`grid ${getGridCols()} gap-8`}>
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={member.image.url}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
              <p className="text-primary mb-2 font-medium">{member.position}</p>
              {member.bio && <p className="mb-4 text-sm text-gray-600">{member.bio}</p>}
              {member.socials && (
                <div className="flex gap-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary text-gray-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary text-gray-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="hover:text-primary text-gray-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// components/blocks/TimelineBlock.tsx
interface TimelineBlockProps {
  heading: string;
  subheading?: string;
  milestones: {
    year: string;
    title: string;
    description: string;
    image?: any;
  }[];
  style?: "vertical" | "horizontal" | "cards";
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const TimelineBlock: React.FC<TimelineBlockProps> = ({
  heading,
  subheading,
  milestones,
  style = "vertical",
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-${alignment || "center"} mb-12`}>
          {subheading && (
            <p className="text-primary mb-2 font-semibold tracking-wide uppercase">{subheading}</p>
          )}
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>

        {style === "vertical" && (
          <div className="relative">
            <div className="bg-primary/30 absolute top-0 bottom-0 left-8 w-0.5 md:left-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="bg-primary absolute left-8 -ml-2 h-4 w-4 rounded-full border-4 border-white shadow md:left-1/2"></div>
                    <div
                      className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:w-1/2 md:pr-12" : "md:ml-auto md:w-1/2 md:pl-12"}`}
                    >
                      <div className="rounded-lg bg-white p-6 shadow-lg">
                        <span className="text-primary text-lg font-bold">{milestone.year}</span>
                        <h3 className="mt-2 mb-3 text-xl font-bold">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                        {milestone.image && (
                          <div className="relative mt-4 h-48 overflow-hidden rounded-lg">
                            <Image
                              src={milestone.image.url}
                              alt={milestone.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {style === "cards" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <span className="text-primary text-lg font-bold">{milestone.year}</span>
                <h3 className="mt-2 mb-3 text-xl font-bold">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
                {milestone.image && (
                  <div className="relative mt-4 h-48 overflow-hidden rounded-lg">
                    <Image src={milestone.image.url} alt={milestone.title} fill className="object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// components/blocks/StatsBlock.tsx
interface StatsBlockProps {
  heading?: string;
  subheading?: string;
  statistics: {
    number: string;
    label: string;
    icon?: any;
  }[];
  layout?: "grid-2" | "grid-3" | "grid-4" | "inline";
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const StatsBlock: React.FC<StatsBlockProps> = ({
  heading,
  subheading,
  statistics,
  layout = "grid-4",
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  const getGridCols = () => {
    switch (layout) {
      case "grid-2":
        return "md:grid-cols-2";
      case "grid-3":
        return "md:grid-cols-3";
      case "grid-4":
        return "grid-cols-2 lg:grid-cols-4";
      case "inline":
        return "md:flex md:justify-center md:gap-12";
      default:
        return "grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        {heading && (
          <div className={`text-${alignment || "center"} mb-12`}>
            {subheading && (
              <p className="text-primary mb-2 font-semibold tracking-wide uppercase">{subheading}</p>
            )}
            <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
          </div>
        )}

        <div className={`grid ${getGridCols()} gap-8`}>
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && (
                <div className="mb-4 flex justify-center">
                  <Image src={stat.icon.url} alt={stat.label} width={48} height={48} className="h-12 w-12" />
                </div>
              )}
              <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">{stat.number}</div>
              <div className="font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// components/blocks/CultureBlock.tsx
interface CultureBlockProps {
  heading: string;
  subheading?: string;
  content?: any;
  images?: {
    image: any;
    caption?: string;
  }[];
  highlights?: {
    title: string;
    description?: string;
    icon?: any;
  }[];
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const CultureBlock: React.FC<CultureBlockProps> = ({
  heading,
  subheading,
  content,
  images,
  highlights,
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  return (
    <section
      className={`py-${padding?.top || 16} px-${padding?.left || 4}`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-${alignment || "center"} mb-12`}>
          {subheading && (
            <p className="text-primary mb-2 font-semibold tracking-wide uppercase">{subheading}</p>
          )}
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">{heading}</h2>
          {content && (
            <div className="prose prose-lg mx-auto max-w-3xl">
              <RichText content={content} />
            </div>
          )}
        </div>

        {images && images.length > 0 && (
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img.image.url}
                  alt={img.caption || `Culture image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {img.caption && (
                  <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-sm text-white">
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                {highlight.icon && (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={highlight.icon.url}
                      alt={highlight.title}
                      width={64}
                      height={64}
                      className="h-16 w-16"
                    />
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold">{highlight.title}</h3>
                {highlight.description && <p className="text-gray-600">{highlight.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// components/blocks/CTABlock.tsx
interface CTABlockProps {
  heading: string;
  subheading?: string;
  content?: string;
  buttons: {
    text: string;
    url: string;
    style?: "primary" | "secondary" | "outline";
    openInNewTab?: boolean;
  }[];
  style?: "centered" | "left" | "split";
  backgroundImage?: any;
  alignment?: string;
  background?: any;
  padding?: any;
  margin?: any;
}

export const CTABlock: React.FC<CTABlockProps> = ({
  heading,
  subheading,
  content,
  buttons,
  style = "centered",
  backgroundImage,
  alignment,
  background,
  padding,
  margin,
}) => {
  const getBackgroundStyle = () => {
    if (backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
    if (background?.type === "color") return { backgroundColor: background.color };
    if (background?.type === "gradient") return { background: background.gradient };
    return {};
  };

  const getButtonClass = (btnStyle = "primary") => {
    const base = "px-8 py-3 rounded-lg font-semibold transition-all duration-300";
    switch (btnStyle) {
      case "primary":
        return `${base} bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl`;
      case "secondary":
        return `${base} bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl`;
      case "outline":
        return `${base} border-2 border-primary text-primary hover:bg-primary hover:text-white`;
      default:
        return `${base} bg-primary text-white hover:bg-primary/90`;
    }
  };

  return (
    <section
      className={`py-${padding?.top || 20} px-${padding?.left || 4} relative`}
      style={{ ...getBackgroundStyle(), marginTop: margin?.top, marginBottom: margin?.bottom }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50"></div>}
      <div className={`relative z-10 container mx-auto max-w-7xl ${backgroundImage ? "text-white" : ""}`}>
        <div className={`${style === "centered" ? "mx-auto max-w-3xl text-center" : ""}`}>
          {subheading && <p className="mb-2 font-semibold tracking-wide uppercase">{subheading}</p>}
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">{heading}</h2>
          {content && <p className="mb-8 text-lg opacity-90 md:text-xl">{content}</p>}
          <div className={`flex flex-wrap gap-4 ${style === "centered" ? "justify-center" : ""}`}>
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target={button.openInNewTab ? "_blank" : "_self"}
                rel={button.openInNewTab ? "noopener noreferrer" : ""}
                className={getButtonClass(button.style)}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlockRendererProps {
  blocks: any[];
  fieldPath?: string; // e.g., "layout.0"
}

export const AboutPageRenderer: React.FC<BlockRendererProps> = ({ blocks, fieldPath = "" }) => {
  return (
    <>
      {blocks.map((block, index) => {
        // Build the complete field path for this block
        const blockFieldPath = fieldPath ? `${fieldPath}.blocks.${index}` : `blocks.${index}`;

        // Create a wrapper div that can be used for visual editing
        const blockContent = (() => {
          switch (block.blockType) {
            case "story":
              return <StoryBlock {...block} fieldPath={blockFieldPath} />;
            case "missionVision":
              return <MissionVisionBlock {...block} />;
            case "values":
              return <ValuesBlock {...block} />;
            case "team":
              return <TeamBlock {...block} />;
            case "timeline":
              return <TimelineBlock {...block} />;
            case "stats":
              return <StatsBlock {...block} />;
            case "culture":
              return <CultureBlock {...block} />;
            case "cta":
              return <CTABlock {...block} />;
            default:
              return null;
          }
        })();

        if (!blockContent) return null;

        return (
          <div
            key={index}
            className="visual-editing-block nested-block-wrapper"
            data-block-type={block.blockType}
            data-block-id={block.id}
            data-visual-editing="true"
            style={{ position: "relative" }}
          >
            {blockContent}
          </div>
        );
      })}
    </>
  );
};

interface RichTextProps {
  content: any;
  className?: string;
}

const RichText: React.FC<RichTextProps> = ({ content, className = "" }) => {
  if (!content) return null;

  // If using Payload's Lexical editor
  if (content.root) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: serializeLexical(content) }} />;
  }

  // If using Slate editor (older Payload versions)
  return (
    <div className={className}>{content.map((node: any, index: number) => renderNode(node, index))}</div>
  );
};

// Serialize Lexical JSON to HTML
const serializeLexical = (content: any): string => {
  // This is a simplified version. You might need to adjust based on your Lexical setup
  if (!content?.root?.children) return "";

  return content.root.children.map((node: any) => serializeLexicalNode(node)).join("");
};

const serializeLexicalNode = (node: any): string => {
  if (!node) return "";

  switch (node.type) {
    case "paragraph":
      return `<p>${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</p>`;
    case "heading": {
      const tag = `h${node.tag || "2"}`;
      return `<${tag}>${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</${tag}>`;
    }
    case "text": {
      let text = node.text || "";
      if (node.format & 1) text = `<strong>${text}</strong>`;
      if (node.format & 2) text = `<em>${text}</em>`;
      if (node.format & 8) text = `<code>${text}</code>`;
      return text;
    }
    case "link":
      return `<a href="${node.url}" target="${node.newTab ? "_blank" : "_self"}">${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</a>`;
    case "list": {
      const listTag = node.listType === "number" ? "ol" : "ul";
      return `<${listTag}>${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</${listTag}>`;
    }
    case "listitem":
      return `<li>${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</li>`;
    case "quote":
      return `<blockquote>${node.children?.map((child: any) => serializeLexicalNode(child)).join("") || ""}</blockquote>`;
    default:
      return node.children?.map((child: any) => serializeLexicalNode(child)).join("") || "";
  }
};

const renderNode = (node: any, index: number): React.ReactNode => {
  if (!node) return null;

  if (node.text !== undefined) {
    let text: React.ReactNode = node.text;
    if (node.bold) text = <strong key={index}>{text}</strong>;
    if (node.italic) text = <em key={index}>{text}</em>;
    if (node.underline) text = <u key={index}>{text}</u>;
    if (node.code) text = <code key={index}>{text}</code>;
    return text;
  }

  const children = node.children?.map((child: any, i: number) => renderNode(child, i));

  switch (node.type) {
    case "h1":
      return <h1 key={index}>{children}</h1>;
    case "h2":
      return <h2 key={index}>{children}</h2>;
    case "h3":
      return <h3 key={index}>{children}</h3>;
    case "h4":
      return <h4 key={index}>{children}</h4>;
    case "h5":
      return <h5 key={index}>{children}</h5>;
    case "h6":
      return <h6 key={index}>{children}</h6>;
    case "blockquote":
      return <blockquote key={index}>{children}</blockquote>;
    case "ul":
      return <ul key={index}>{children}</ul>;
    case "ol":
      return <ol key={index}>{children}</ol>;
    case "li":
      return <li key={index}>{children}</li>;
    case "link":
      return (
        <a
          key={index}
          href={node.url}
          target={node.newTab ? "_blank" : "_self"}
          rel={node.newTab ? "noopener noreferrer" : ""}
        >
          {children}
        </a>
      );
    default:
      return <p key={index}>{children}</p>;
  }
};

export default RichText;
