// "use client";
// import { useEffect, useState } from "react";
// import { X, Play } from "lucide-react";

// import { CMSLink } from "@/components/Link";
// import { Media } from "@/components/Media";
// import RichText from "@/components/RichText";
// import { useHeaderTheme } from "@/providers/HeaderTheme";

// import type { Page } from "@/payload-types";

// export const VideoModalHero = (props: Page["hero"]) => {
//     console.log(props)
//    const {backgroundType, links, reversed, richText, video_backgroundColor, video_description, video_heading, video_subheading, video_url} = props
//   const { setHeaderTheme } = useHeaderTheme();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setHeaderTheme("dark");
//   }, [setHeaderTheme]);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isModalOpen]);

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div 
//         className="relative -mt-[10.4rem] flex items-center justify-center text-white overflow-hidden" 
//         data-theme="dark"
//       >
//         {/* Background with overlay */}
//         <div className="absolute inset-0 bg-black/50 z-0" />

//         {/* Content */}
//         <div className="relative z-10 container py-32 md:py-40 lg:py-48 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             {richText && (
//               <RichText 
//                 className="mb-8 [&_h1]:text-5xl md:[&_h1]:text-6xl lg:[&_h1]:text-7xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:leading-tight [&_p]:text-lg md:[&_p]:text-xl [&_p]:text-gray-200" 
//                 data={richText} 
//                 enableGutter={false} 
//               />
//             )}

//             {/* Play Button */}
//             <div className="mb-10">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
//                 aria-label="Play video"
//               >
//                 <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
//                 <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 relative z-10" />
//               </button>
//             </div>

//             {/* Links */}
//             {Array.isArray(links) && links.length > 0 && (
//               <ul className="flex flex-wrap gap-4 justify-center">
//                 {links.map(({ link }, i) => (
//                   <li key={i}>
//                     <CMSLink {...link} />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Decorative gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
//       </div>

//       {/* Video Modal */}
//       {isModalOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
//           onClick={handleModalClose}
//         >
//           {/* Close button */}
//           <button
//             onClick={handleModalClose}
//             className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group z-50"
//             aria-label="Close video"
//           >
//             <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
//           </button>

//           {/* Video container */}
//           <div 
//             className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Replace with actual video source */}
//             {media && typeof media === "object" && media.url && (
//               <video
//                 className="w-full h-full"
//                 controls
//                 autoPlay
//                 src={media.url}
//               >
//                 Your browser does not support the video tag.
//               </video>
//             )}
            
//             {/* Fallback if no video URL */}
//             {(!media || typeof media !== "object" || !media.url) && (
//               <div className="flex items-center justify-center h-full text-white text-lg">
//                 <p>Video source not available</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

"use client";
import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";

import { CMSLink } from "@/components/Link";
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import { useHeaderTheme } from "@/providers/HeaderTheme";

import type { Page } from "@/payload-types";

export const VideoModalHero = (props: Page["hero"]) => {
  const {
    links,
    video_backgroundColor,
    video_description,
    video_heading,
    video_subheading,
    video_url,
  } = props;

  console.log(video_url)

  const { setHeaderTheme } = useHeaderTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setHeaderTheme("dark");
  }, [setHeaderTheme]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative -mt-[10.4rem] flex items-center justify-center text-white overflow-hidden"
        data-theme="dark"
        style={{
          backgroundColor: video_backgroundColor || "#000000",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 container py-32 md:py-40 lg:py-48 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Heading, Subheading, Description */}
            {video_heading && (
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {video_heading}
              </h1>
            )}

            {video_subheading && (
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                {video_subheading}
              </h2>
            )}

            {video_description && (
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                {video_description}
              </p>
            )}

            {/* Play Button */}
            {video_url && (
              <div className="mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  aria-label="Play video"
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 relative z-10" />
                </button>
              </div>
            )}

            {/* Links */}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-wrap gap-4 justify-center">
                {links.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Decorative gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
          onClick={handleModalClose}
        >
          {/* Close Button */}
          <button
            onClick={handleModalClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group z-50"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Video Container */}
          <div
            className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {video_url ? (
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={video_url}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center h-full text-white text-lg">
                <p>Video source not available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
