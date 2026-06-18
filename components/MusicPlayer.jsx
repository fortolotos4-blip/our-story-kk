"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";


export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/romantic.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
        "
      >
        <motion.div
  animate={
    playing
      ? { rotate: 360 }
      : { rotate: 0 }
  }
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    w-10
    h-10
    rounded-full
    bg-white/80
    backdrop-blur-md
    border
    border-red-200
    shadow-lg
    flex
    items-center
    justify-center
    text-lg
  "
>
  {playing ? "🎵" : "🔇"}
</motion.div>
      </button>
    </>
  );
}