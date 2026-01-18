import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import doc1 from "../assets/appointment01.png";
import doc2 from "../assets/appointment02.png";
import doc3 from "../assets/appointment03.png";

export default function DoctorDirectory() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Doctor 1",
      specialty: "General Practitioner",
      location: "Nairobi",
      availability: "Soon",
      image: doc1,
    },
    {
      id: 2,
      name: "Doctor 2",
      specialty: "Mental Health Specialist",
      location: "Telehealth",
      availability: "Soon",
      image: doc2,
    },
    {
      id: 3,
      name: "Doctor 3",
      specialty: "Chronic Care Specialist",
      location: "Westlands",
      availability: "Soon",
      image: doc3,
    },
  ];

  const handleFeatureClick = (e) => {
    e.preventDefault();
    setShowNotice(true);
  };

  return (
    <section className="space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Find a Doctor</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Browse verified healthcare professionals and book appointments easily.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-cardDark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p className="text-accent text-sm">{doc.specialty}</p>
              <p className="text-gray-300 text-sm">{doc.location}</p>
              <p className="text-gray-400 text-sm">Availability: Soon</p>

              <Link
                to={`/doctors/${doc.id}`}
                onClick={handleFeatureClick}
                className="inline-block mt-4 px-4 py-2 bg-accent text-primary rounded-md font-semibold"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* NOTICE MODAL */}
      <ComingSoonModal
        open={showNotice}
        onClose={() => setShowNotice(false)}
        title="Appointment Booking Coming Soon"
        message="Doctor profiles and appointment booking are not yet available on the website. These features will be introduced soon. You can currently explore the upcoming experience."
      />
    </section>
  );
}
