"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

// import bgImages from "../../../public/assets/hero/hero-img.png";
import { fadeInUp } from "./anim";
import { Page } from "@/payload-types";

// ✅ Public demo background + fallback
const bgImages =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1500&q=80";
const fallbackImg =
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437b8?auto=format&fit=crop&w=1500&q=80";

type HeroProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; onClick?: () => void };
  videoUrl?: string;
};

export default function Hero(props: Page["hero"]) {
  const { links, video_backgroundColor, video_description, video_heading, video_subheading, video_url } =
    props;
  const [open, setOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative isolate container mx-auto mt-7 overflow-hidden rounded-2xl shadow-lg">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundColor: video_backgroundColor || "#000000",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center sm:py-28 lg:py-32">
        {/* ▶️ Play Button */}
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 shadow-lg backdrop-blur-md"
        >
          <Play className="h-8 w-8 text-white" />
        </motion.button>

        {/* 🔹 Title */}
        {video_heading && (
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-[60px]"
          >
            {video_heading}
          </motion.h1>
        )}

        {/* 🔹 Subtitle */}
        {video_subheading && (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-2xl text-base font-medium text-white/90 italic"
          >
            {video_subheading}
          </motion.p>
        )}

        {/* 🔹 CTA Button */}
        {links && (
          <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mt-6">
            <Button className="h-auto rounded-full bg-orange-500 px-6 py-3 text-white shadow-md hover:bg-orange-600">
              {"links"}
            </Button>
          </motion.div>
        )}
      </div>

      {/* 🔹 Video Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
        <DialogContent className="relative z-50 max-w-3xl overflow-hidden rounded-xl bg-black p-0">
          <div className="relative aspect-video bg-black">
            {videoError ? (
              <img src={video_backgroundColor!} alt="Fallback" className="h-full w-full object-cover" />
            ) : (
              <>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  playing
                  muted
                  loop
                  onError={() => setVideoError(true)}
                  className="absolute top-0 left-0"
                  oEmbedUrl={video_url}
                />
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
