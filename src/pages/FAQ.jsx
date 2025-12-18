export default function FAQ() {
  const faqs = [
    {
      q: "What is AVEN?",
      a: "AVEN is a community-first digital health platform designed to connect individuals with healthcare providers, services, and trusted health resources.",
    },
    {
      q: "Is AVEN a hospital or clinic?",
      a: "No. AVEN is not a healthcare provider. It serves as an access point that helps users discover, plan, and engage with healthcare services.",
    },
    {
      q: "Does AVEN replace my doctor?",
      a: "No. AVEN complements traditional care by helping users stay informed and connected — it does not replace medical professionals.",
    },
    {
      q: "Is AVEN free to use?",
      a: "Core discovery and access features are designed to be widely accessible. Additional services may be introduced later.",
    },
    {
      q: "Is my data safe?",
      a: "AVEN is built with privacy and security as core principles. Data protection is a top priority as the platform evolves.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto space-y-16">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Clear answers to common questions about AVEN.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-cardDark p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-accent">
              {item.q}
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
