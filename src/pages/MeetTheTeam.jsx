export default function MeetTheTeam() {
  const team = [
  {
    name: "Chaluo Ian",
    role: "Chief Executive Officer (CEO)",
    description:
      "Leads AVEN’s vision and strategy, focused on building community-first digital health solutions that are accessible, ethical, and impactful.",
  },
  {
    name: "Bruce",
    role: "Chief Product Officer (CPO)",
    description:
      "Oversees product strategy and technology architecture to ensure AVEN delivers scalable, secure, and human-centered solutions.",
  },
  {
    name: "Antony",
    role: "Chief Technology Officer (CTO)",
    description:
      "Drives platform innovation and technical execution, translating health needs into intuitive digital experiences.",
  },
  {
    name: "Paul",
    role: " Chief Operating Officer (COO)",
    description:
      "Ensures operational excellence and regulatory alignment, supporting safe and compliant healthcare delivery.",
  },
  {
    name: "Nila",
    role: "Chief Compliance and Partnerships Officer",
    description:
      "Manages governance and compliance processes to maintain trust, quality, and accountability across the platform.",
  },
  {
    name: "Bildad",
    role: " Chief Marketing and Communications Officer",
    description:
      "Leads growth strategy, partnerships, and research to expand AVEN’s impact and reach within communities.",
  },
  {
    name: "Safia",
    role: "Chief Community Officer",
    description:
      "Focuses on user insights, market research, and evidence-driven growth initiatives.",
  },
  {
    name: "Dr. Mathias",
    role: "Chief Medical Officer (CMO)",
    description:
      "Provides clinical guidance and medical oversight to ensure AVEN’s solutions are accurate, responsible, and patient-centered.",
  },
];


  return (
    <section className="max-w-6xl mx-auto space-y-16">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Meet the Team</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          AVEN is built by people who believe healthcare should be accessible,
          connected, and centered around everyday life.
        </p>
      </header>

      {/* Team Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-cardDark p-6 rounded-xl text-center space-y-4 hover:shadow-lg transition"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-cardLight flex items-center justify-center text-accent font-bold text-xl">
              {member.name.charAt(0)}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {member.name}
            </h3>

            <p className="text-accent text-sm font-medium">
              {member.role}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
