export default function Home() {
  return (
    <section className="space-y-24">
      
      {/* HERO */}
      <div className="min-h-[70vh] flex flex-col justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Your Health,
          <span className="block text-accent"> Connected & Simplified</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          AVEN is your trusted access point connecting people, providers, and
          health resources into one unified ecosystem for long-term wellbeing.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Get the App
          </button>
          <button className="border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-primary transition">
            Learn More
          </button>
        </div>
      </div>

      {/* AVEN MEANING */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { letter: "A", word: "Access" },
          { letter: "V", word: "Vitality" },
          { letter: "E", word: "Empowerment" },
          { letter: "N", word: "Network" },
        ].map(({ letter, word }) => (
          <div
            key={letter}
            className="bg-cardDark p-6 rounded-xl text-center"
          >
            <div className="text-4xl font-bold text-accent">{letter}</div>
            <p className="mt-2 text-lg text-white">{word}</p>
          </div>
        ))}
      </div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-cardLight p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-accent">Our Mission</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Our mission is to empower individuals and communities with
            accessible, preventative, and connected healthcare tools that
            enable healthier everyday living.
          </p>
        </div>

        <div className="bg-cardLight p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-accent">Our Vision</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Our vision is to create healthier, more informed communities by
            becoming the everyday health companion that bridges people, care,
            and data into one unified experience.
          </p>
        </div>
      </div>

      {/* WHAT AVEN DOES */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          A Community-First Health Platform
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          AVEN is not hospital-first. It is community-first — technology-enabled
          but human-centered. We help you discover care providers, pharmacies,
          health insights, and conversations that support better decisions every
          day.
        </p>
      </div>

      {/* TRUST */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
        <div className="bg-cardDark px-6 py-4 rounded-lg">
          Secure & Privacy-First
        </div>
        <div className="bg-cardDark px-6 py-4 rounded-lg">
          Built for Everyday Health
        </div>
        <div className="bg-cardDark px-6 py-4 rounded-lg">
          Designed for Real People
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-20">
        <h3 className="text-2xl font-semibold text-white">
          Start Your Health Journey with AVEN
        </h3>
        <button className="mt-6 bg-accent text-primary px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition">
          Join the Community
        </button>
      </div>
    </section>
  );
}
