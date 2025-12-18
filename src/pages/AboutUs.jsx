export default function AboutUs() {
  return (
    <section className="space-y-24">
      
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About AVEN
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          AVEN exists to simplify how people access, understand, and engage with
          healthcare — putting individuals and communities at the center of
          everything.
        </p>
      </div>

      {/* STORY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-cardDark p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-accent">
            Why AVEN Was Created
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Healthcare today is fragmented, reactive, and often difficult to
            navigate. AVEN was created to change that — by building a connected
            ecosystem that helps people make better health decisions before
            problems become emergencies.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We believe access to reliable health resources should be simple,
            preventative, and available where people already are.
          </p>
        </div>

        <div className="bg-cardLight p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-accent">
            What We Believe
          </h2>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• Health starts in the community, not the hospital</li>
            <li>• Prevention is more powerful than treatment alone</li>
            <li>• Technology should support humans, not replace them</li>
            <li>• Access and trust are foundational to better outcomes</li>
          </ul>
        </div>
      </div>

      {/* VALUES */}
      <div>
        <h2 className="text-3xl font-bold text-white text-center">
          Our Core Values
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Accessibility",
            "Transparency",
            "Empowerment",
            "Community Trust",
          ].map((value) => (
            <div
              key={value}
              className="bg-cardDark p-6 rounded-xl text-center"
            >
              <p className="text-lg text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
