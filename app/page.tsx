"use client";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-rose-900"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-rose-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-7xl font-black text-center text-pink-400 mb-10 animate-pulse">
          Ana Assef  y a8la m lyaa adiny forsa y nour❤️
        </h1>

        <p className="text-center text-2xl leading-[55px] text-gray-200 max-w-4xl mx-auto mb-20">
          Momken el kalam maykafesh…
          <br />
          Bas wallahy ana بجد za3lan eny كنت السبب fe z3alek.
          <br /><br />

          Enty msh wa7da 3adya fe 7ayaty…
          <br />
          Enty ahla 7aga حصلتلي.
          <br />
          Kol dahka menek كانت بتفرق معايا…
          <br />
          W kol moment bena leha ma3na fe alby.
          <br /><br />

          Ana 3aref eny ممكن ghalt…
          <br />
          Bas wa3d مني eny afdal a7awel اصلح كل حاجة زعلتك.
          <br /><br />

          Mesh 3ayez akhsarek…
          <br />
          W mesh متخيل ayamy mn gherk.
          <br /><br />

          Same7iny wdiny forsa ❤️
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-[35px] overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
            >
              <img
                src={img}
                alt="memory"
                className="w-full h-[450px] object-cover"
              />

              <div className="p-6 text-center">
                <p className="text-pink-300 text-xl font-bold">
                  Favorite Memory ❤️
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="bg-white/10 border border-white/20 rounded-[40px] p-10 md:p-16 backdrop-blur-xl text-center shadow-2xl">

          <h2 className="text-5xl font-black text-pink-300 mb-10">
            Message Leek 💌
          </h2>

          <p className="text-xl leading-[55px] text-gray-200">
            Ana ba3tazerlk mn كل قلبي…
            <br />
            W ba3ترف eny momken akon ghalt fe 7agat kteer.
            <br /><br />

            Bas 7aga wa7da mot2aked منها…
            <br />
            Eny b7ebek بجد.
            <br /><br />

            Enty الشخص اللي وجوده بيهون عليا أي حاجة.
            <br />
            W z3alek بيكسرني أكتر ما تتخيلي.
            <br /><br />

            Kol sora lena هنا…
            <br />
            Fakrany بأحلى لحظات بينا.
            <br />
            W fakrany eny msh 3ayez اخسر أي حاجة تخصنا.
            <br /><br />

            Law fe forsa واحدة بس…
            <br />
            هفضل أحاول عشان أرجع ضحكتك تاني.
            <br /><br />

            Wa3d مني…
            <br />
            Eny afdal جنبك…
            <br />
            W a7ebek kol yom aktar mn اللي قبله ❤️
          </p>

          <button
            onClick={() =>
              alert("Wa3d meny eny maza3alkesh tany w ha7awl athsn ll ahsan ashankk ana bgd asf 3ala kol el 3amltooo ❤️")
            }
            className="mt-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 transition duration-300 px-14 py-6 rounded-full text-3xl font-bold shadow-[0_0_50px_rgba(255,0,120,0.5)]"
          >
            Same7iny bhbk  y ahla nour fy el denya 🌹
          </button>

        </div>

      </div>
    </main>
  );
}