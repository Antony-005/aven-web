import doctor1 from "../assets/01.png";
import doctor2 from "../assets/02.png";
import doctor3 from "../assets/03.png";

export default function AppointmentBooking() {
  const doctors = [
    {
      name: "Doctor 1",
      specialty: "General Practitioner",
      availability: "Coming Soon",
      image: doctor1,
    },
    {
      name: "Doctor 2",
      specialty: "Mental Health Specialist",
      availability: "Coming Soon",
      image: doctor2,
    },
    {
      name: "Doctor 3",
      specialty: "Chronic Care Specialist",
      availability: "Coming Soon",
      image: doctor3,
    },
  ];

  return (
    <section className="space-y-20">

      {/* HEADER */}
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold">Book Appointments</h1>
        <p className="text-gray-300">
          Find trusted healthcare professionals and book appointments with ease.
          Online consultations and in-person visits will be available soon.
        </p>
      </header>

      {/* DOCTOR GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="group bg-cardDark rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-56 w-full object-cover"
              />

              {/* AVAILABILITY BADGE */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-accent">
                {doctor.availability}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-accent text-sm">{doctor.specialty}</p>
              </div>

              <p className="text-gray-400 text-sm">
                Online and in-person consultations will be available once bookings go live.
              </p>

              <button
                disabled
                className="w-full mt-4 px-4 py-3 bg-accent/40 text-primary rounded-xl font-semibold cursor-not-allowed"
              >
                Booking Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center text-sm text-gray-400">
        Appointment booking will be available in a future update. Stay tuned.
      </div>

    </section>
  );
}
