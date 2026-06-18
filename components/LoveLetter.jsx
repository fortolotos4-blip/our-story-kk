"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [dear, setDear] = useState("Keshya");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [generated, setGenerated] = useState(false);

  const letterRef = useRef(null);

  const theme =
  dear === "Keshya"
    ? ""
    : "";

  const downloadImage = async () => {
    if (!letterRef.current) return;

    const canvas = await html2canvas(letterRef.current, {
    scale: 3,
    backgroundColor: "#fffaf7",
    });

    const link = document.createElement("a");

    link.download = "love-letter.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  return (
    <section
  className="
    py-24
    px-4
    md:px-6
    bg-gradient-to-b
    from-[#fdfbf7]
    via-[#f9f3e8]
    to-[#efe4c7]
  "
>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-12">
          Surat Spesial
        </h2>

        {/* Envelope */}
        {!opened && (
          <motion.div
            className="text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpened(true)}
          >
            <div className="text-8xl">✉️</div>

            <p className="mt-4 text-xl font-medium">
              Tekan untuk membuka..
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {opened && !generated && (
            <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
            }}
            className="
                bg-white/80
                backdrop-blur-xl
                rounded-[32px]
                p-6
                md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                border
            "
            style={{
                borderColor: "#e7d7b7",
            }}
            >
              <div className="mb-6">
                <p className="font-semibold mb-3">
                  Dear :
                </p>

                <label className="mr-6">
                  <input
                    type="radio"
                    checked={dear === "Keshya"}
                    onChange={() => setDear("Keshya")}
                    className="mr-2"
                  />
                  Keshya
                </label>

                <label>
                  <input
                    type="radio"
                    checked={dear === "Kelvin"}
                    onChange={() => setDear("Kelvin")}
                    className="mr-2"
                  />
                  Kelvin
                </label>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">
                  Message :
                </p>

                <textarea
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  rows={8}
                  placeholder="Write your message..."
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    resize-none
                  "
                />
              </div>

              <div>
                <p className="font-semibold mb-2">
                  From :
                </p>

                <input
                  value={from}
                  onChange={(e) =>
                    setFrom(e.target.value)
                  }
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                  "
                />
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setGenerated(true)}
                  className="
                    px-8
                    py-3
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    rounded-full
                    transition
                  "
                >
                  Buat Surat ❤️
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview */}
        <AnimatePresence>
          {generated && (
  <motion.div
    ref={letterRef}
    initial={{
      scale: 0.8,
      opacity: 0,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    style={{
      background: "linear-gradient(180deg, #fffaf7 0%, #fff5f5 100%)",
      border: "2px solid #f9a8d4",
    }}
    className="
      relative
      rounded-3xl
      p-10
      shadow-2xl
      overflow-hidden
    "
  >
    {/* Dekorasi */}
    <div className="absolute top-6 right-6 text-4xl opacity-20">
      🌹
    </div>

    <div className="absolute bottom-6 left-6 text-4xl opacity-20">
      ❤️
    </div>

    {/* Header */}
    <br />
    <br />
    <p
    style={{ color: "#6b7280" }}
    className="text-right mb-8"
    >
    {new Date().toLocaleDateString("id-ID")}
    </p>

    <div
    style={{
        width: "96px",
        height: "4px",
        backgroundColor: "#f9a8d4",
        margin: "0 auto 2rem auto",
        borderRadius: "9999px",
    }}
    />

    {/* Isi Surat */}
    <h3 className="text-3xl font-bold mb-8">
      Dear {dear},
    </h3>

    <p className="whitespace-pre-line text-lg leading-9 min-h-[200px]">
      {message}
    </p>

    {/* Tanda Tangan */}
    <div className="mt-16">
      <p>With Love,</p>

      <p className="text-3xl italic font-serif mt-3">
        {from}
      </p>

      <p className="mt-2 text-xl">
        ❤️
      </p>
    </div>
  </motion.div>
)}
        </AnimatePresence>

        {/* Actions */}
        {generated && (
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={downloadImage}
              className="
                px-6
                py-3
                rounded-full
                bg-red-500
                text-white
                hover:bg-red-600
                transition
              "
            >
              📸 Save as Image
            </button>

            <button
              onClick={() => {
                setGenerated(false);
              }}
              className="
                px-6
                py-3
                rounded-full
                bg-gray-500
                text-white
              "
            >
              Edit Letter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}