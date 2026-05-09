"use client";

import { useEffect, useState } from "react";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
];

const messages = [
  "Enty ahla 7aga 7asaletly ❤️",
  "Mesh 3ayez akhsarek 🌍",
  "Kol dahka menek betfar2 ma3aya ✨",
  "Wa3d مني afdal janbek دايمًا 💌",
  "Ana bgd ba7ebek 🥺",
  "Kol sora lena bt7kely 7ekaya ❤️",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const startDate = new Date("2024-01-01");
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-rose-900"></div>

        <div className="text-center z-10 animate-pulse">
          <h1 className="text-7xl font-black text-pink-400 mb-6">
            To The Love Of My Life ❤️
          </h1>

          <p className="text-3xl text-pink-200">
            Loading Our Memories...
          </p>
        </div>
      </div>
    );
  }

  return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden relative text-white">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-bounce opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-rose-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <div className="bg-white/10 border border-white/20 px-6 py-4 rounded-full backdrop-blur-xl text-pink-200 font-bold shadow-xl animate-pulse">
            ❤️ Together Forever ❤️
          </div>

          <div className="bg-white/10 border border-white/20 px-6 py-4 rounded-full backdrop-blur-xl text-pink-200 font-bold shadow-xl">
            🌹 You Mean The World To Me 🌹
          </div>
        </div>
        <div className="text-center mb-16 animate-pulse">
          <div className="bg-white/10 border border-white/20 rounded-full px-8 py-4 inline-block backdrop-blur-xl mb-8 shadow-2xl">
            <p className="text-2xl font-bold text-pink-200">
              ⏳ Been Together For {days} Days ❤️
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-pink-400 mb-6">
            Ana Assef ❤️
          </h1>

          <p className="text-2xl text-pink-200 font-semibold">
            w mesh 3ayez mn el denya 8er forsa منك 🥺
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-[500px] rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(255,0,120,0.4)] mb-20 border border-white/20">
          <img
            src={images[current]}
            alt="memory"
            className="w-full h-full object-cover transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h2 className="text-4xl font-black text-pink-300 mb-2">
              Favorite Memory ❤️
            </h2>

            <p className="text-lg text-gray-200">
              Kol sora lena leha makan fe alby ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-[30px] p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
            >
              <p className="text-2xl text-center font-bold text-pink-200">
                {msg}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/20 rounded-[40px] p-8 md:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(255,0,120,0.2)] mb-16">
          <h2 className="text-5xl font-black text-center text-pink-300 mb-10">
            Message Leek 💌
          </h2>

          <p className="text-center text-xl md:text-2xl leading-[55px] text-gray-200">
            Momken el kalam maykafesh...
            <br />
            Bas wallahy ana بجد ندمان eny كنت السبب fe z3alek.
            <br /><br />

            Enty msh shakhs 3ady fe 7ayaty...
            <br />
            Enty ahla tafseela fe kol yom بعيشه.
            <br />
            Kol dahka menek كانت بتخليني أسعد إنسان.
            <br /><br />

            Ana 3aref eny momken ghalt...
            <br />
            Bas wa3d مني eny اتعلم من أي حاجة زعلتك.
            <br /><br />

            Mesh 3ayez akhsarek...
            <br />
            W mesh متخيل 7ayaty mn gherk.
            <br /><br />

            Law fe forsa wa7da بس...
            <br />
            هفضل أحاول عشان أرجع ضحكتك تاني ❤️
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <button
            onMouseEnter={() => {
              setButtonPosition({
                x: Math.random() * 200 - 100,
                y: Math.random() * 100 - 50,
              });
            }}
            onClick={() => setShowMessage(true)}
            style={{
              transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
            }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 px-14 py-6 rounded-full text-3xl font-black hover:scale-110 transition duration-300 shadow-[0_0_50px_rgba(255,0,120,0.5)]"
          >
            Same7tiny 🌹
          </button>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-[40px] p-10 backdrop-blur-xl mb-20 shadow-2xl">
          <h2 className="text-4xl font-black text-center text-pink-300 mb-8">
            Why I Love You ❤️
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Dahktk 😍",
              "7eneytk 🥺",
              "Ehtmamk ❤️",
              "Tafaseelk ✨",
              "Ro7ek 🌍",
              "Kol 7aga feeky 💌",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-pink-500/10 border border-pink-300/20 rounded-3xl p-6 text-center hover:scale-105 transition duration-300"
              >
                <p className="text-2xl font-bold text-pink-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-pink-300 mb-6 animate-pulse">
            Our Memories ✨
          </h2>

          <p className="text-xl text-gray-300 leading-10 max-w-3xl mx-auto">
            Kol lahza bena leha ma3na...
            <br />
            W kol sora fe el website ده fakrany eny ma3aky كنت أسعد واحد ❤️
          </p>
        </div>

        {showMessage && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
            <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-[40px] p-10 max-w-2xl text-center shadow-2xl animate-bounce">
              <h2 className="text-5xl font-black mb-6">
                Ba7ebek ❤️
              </h2>

              <p className="text-2xl leading-[45px] mb-8">
                Wa3d مني...
                <br />
                eny afdal a7ebek kol yom aktar mn اللي قبله ✨
              </p>

              <button
                onClick={() => setShowMessage(false)}
                className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition"
              >
                ارجعيلي بقا 🥺
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
