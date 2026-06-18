"use client";

import LoveLetter from "../components/LoveLetter";
import Image from "next/image";
import Timeline from "../components/JourneyMap";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen">
        <Image
          src="/photos/cover.jpg"
          alt="Kelvin dan Keshya"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Kelvin ❤️ Keshya
          </h1>

          <p className="text-lg md:text-2xl mb-8">
            Sebuah cerita kecil tentang perjalanan kita
          </p>

          <button
            onClick={() =>
              document.getElementById("story")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-full bg-pink-500 px-8 py-4 text-lg hover:bg-pink-600 transition"
          >
            Mulai Cerita ❤️
          </button>
        </div>
      </main>

      {/* Story Section */}
      <section
        id="story"
        className="min-h-screen bg-white flex flex-col justify-center items-center px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Cerita Kita
        </h2>

        <p className="max-w-2xl text-lg text-gray-700">
          Tidak pernah terpikirkan sebelumnya bahwa seseorang yang awalnya mengejar dan mempertahankan sebuah keyakinan,
          akhirnya mendapatkan hati nya dan kita pun menjalin sebuah hubungan bersama. 3 juni 2026 ..
        </p>
        <MusicPlayer />
      </section>
      <Timeline />
      <LoveLetter />
    </>
  );
}