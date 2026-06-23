"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const memories = [
  {
    title: "Air Terjun",
    description:
      "Hari dimana kita pergi tanpa planning di hari spesial sayang. (19/05/2026)",
    image: "/photos/photo1.jpg",
  },
  {
    title: "Foto",
    description:
      "Shoot taken by my honey, Keshya 💕",
    image: "/photos/photo2.jpg",
  },
  {
    title: "Pantai",
    description:
      "Salah satu momen kita berdua memantapkan diri untuk saling bersama dan kita pun jadian. (03/06/2026)",
    image: "/photos/photo3.jpg",
  },
  {
    title: "Foto",
    description:
      "Shoot taken by my honey, Keshya 💕",
    image: "/photos/photo4.jpg",
  },
    {
    title: "Gereja",
    description:
      "Tempat beribadah bersama doi di gereja Bethany Nginden. (07/06/2026)",
    image: "/photos/photo5.jpg",
  },
  {
    title: "Foto",
    description:
      "Shoot taken by Claudia",
    image: "/photos/photo6.jpg",
  },
  {
    title: "Food Court",
    description:
      "Tempat Makan dan tempat hiburan bersama doi di BG Food Junction. (23/06/2026)",
    image: "/photos/photo7.jpg",
  },
  {
    title: "Foto",
    description:
      "Shoot taken by my honey, Keshya 💕",
    image: "/photos/photo8.jpg",
  },
];

export default function JourneyMap() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#fffaf7]
        via-[#fff7ed]
        to-[#fef3c7]
      "
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-28">
          🏴 Start Journey
        </h2>

        {memories.map((memory, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
            key={index}
            className={`relative ${
                index === memories.length - 1
                ? "mb-8"
                : "mb-8 md:mb-44"
            }`}
            >
              {/* Checkpoint */}
              <div className="flex justify-center mb-10">
  <motion.div
    whileInView={{
      scale: [0.7, 1.2, 1],
    }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      w-7
      h-7
      rounded-full
      bg-red-500
      border-4
      border-white
      shadow-xl
      z-20
    "
  />
</div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: reverse ? -120 : 120,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                }}
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-12
                md:gap-24
                items-center
                "
              >
                {!reverse ? (
                  <>
                    {/* Catatan */}
                    <div
                      className="
                        bg-white/90
                        backdrop-blur-sm
                        p-8
                        rounded-3xl
                        shadow-xl
                        border-l-4
                        border-red-400
                      "
                    >
                      <h3 className="text-3xl font-bold mb-4">
                        {memory.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {memory.description}
                      </p>
                    </div>

                    {/* Foto */}
                    <div
                      className="
                        group
                        bg-white
                        p-4
                        rounded-3xl
                        shadow-2xl
                        rotate-1
                        hover:rotate-0
                        hover:-translate-y-2
                        transition-all
                        duration-500
                      "
                    >
                      <div className="relative h-[280px] md:h-[450px] overflow-hidden rounded-2xl">
                        <Image
                          src={memory.image}
                          alt={memory.title}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Foto */}
                    <div
                      className="
                        group
                        bg-white
                        p-4
                        rounded-3xl
                        shadow-2xl
                        -rotate-1
                        hover:rotate-0
                        hover:-translate-y-2
                        transition-all
                        duration-500
                      "
                    >
                      <div className="relative h-[280px] md:h-[450px] overflow-hidden rounded-2xl">
                        <Image
                          src={memory.image}
                          alt={memory.title}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />
                      </div>
                    </div>

                    {/* Catatan */}
                    <div
                      className="
                        bg-white/90
                        backdrop-blur-sm
                        p-8
                        rounded-3xl
                        shadow-xl
                        border-r-4
                        border-red-400
                      "
                    >
                      <h3 className="text-3xl font-bold mb-4">
                        {memory.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
              {/* Connector ke memory berikutnya */}
{index < memories.length - 1 && (
  <>
    {/* Desktop */}
    <div
  className="
    hidden
    md:block
    absolute
    left-1/2
    -translate-x-1/2
    top-[420px]
    z-0
  "
>
  <svg
    width="320"
    height="320"
    viewBox="0 0 320 100"
  >
        <motion.path
  d={
    reverse
      ? `
          M160 0
          C160 40 240 40 240 90
          C240 140 160 140 160 180
        `
      : `
          M160 0
          C160 40 80 40 80 90
          C80 140 160 140 160 180
        `
  }
  fill="none"
  stroke="#dc2626"
  strokeWidth="5"
  strokeDasharray="12 12"
  strokeLinecap="round"
  initial={{
      pathLength: 0,
      opacity: 0,
    }}
    whileInView={{
      pathLength: 1,
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 1.5,
      ease: "easeInOut",
    }}
/>
      </svg>
    </div>

    {/* Mobile & Tablet */}
<div className="md:hidden flex justify-center mb-[-25px] mt-2">
  <svg width="80" height="210" viewBox="0 0 80 210">
    <motion.path
      d={
        reverse
          ? "M40 0 C40 50 60 50 60 100 C60 180 40 180 40 210"
          : "M40 0 C40 50 20 50 20 100 C20 180 40 180 40 210"
      }
      fill="none"
      stroke="#dc2626"
      strokeWidth="4"
      strokeDasharray="8 8"
      strokeLinecap="round"
  initial={{
    pathLength: 0,
    opacity: 0,
  }}
  whileInView={{
    pathLength: 1,
    opacity: 1,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.5,
    ease: "easeInOut",
  }}
    />
  </svg>
</div>
  </>
)}
            </div>
          );
        })}
        {/* Final Destination Desktop */}
        <div className="hidden md:flex justify-center mb-4">
  <svg width="120" height="195" viewBox="0 0 120 195">
    <path
      d="
        M60 0
        C60 40 30 40 30 90
        C30 150 60 150 60 195
      "
      fill="none"
      stroke="#dc2626"
      strokeWidth="5"
      strokeDasharray="12 12"
      strokeLinecap="round"
    />
  </svg>
</div>

{/*Final Destination Mobile */}
<div className="md:hidden flex justify-center mb-[-60px]">
  <svg width="80" height="110" viewBox="0 0 80 110">
    <path
      d="
        M40 0
        C40 25 20 25 20 50
        C20 90 40 90 40 110
      "
      fill="none"
      stroke="#dc2626"
      strokeWidth="4"
      strokeDasharray="8 8"
      strokeLinecap="round"
    />
  </svg>
</div>
        {/* Final Destination */}
        <div className="text-center mt-16 md:mt-8">
          <div className="flex justify-center mb-4">
            <div className="w-7 h-7 rounded-full bg-red-500 border-4 border-white shadow-xl" />
          </div>

          <div className="flex justify-center mb-6">
  <svg
    width="90"
    height="90"
    viewBox="0 0 100 100"
  >
    <line
      x1="20"
      y1="20"
      x2="80"
      y2="80"
      stroke="black"
      strokeWidth="12"
      strokeLinecap="round"
    />

    <line
      x1="80"
      y1="20"
      x2="20"
      y2="80"
      stroke="black"
      strokeWidth="12"
      strokeLinecap="round"
    />

    <line
      x1="20"
      y1="20"
      x2="80"
      y2="80"
      stroke="#dc2626"
      strokeWidth="8"
      strokeLinecap="round"
    />

    <line
      x1="80"
      y1="20"
      x2="20"
      y2="80"
      stroke="#dc2626"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
</div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Next Journey ?
          </h3>

          <p className="text-lg text-gray-600">
            Perjalanan kita masih panjang dan penuh cerita baru...
          </p>
        </div>
      </div>
    </section>
  );
}