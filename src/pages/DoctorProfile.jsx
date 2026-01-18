import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import doc1 from "../assets/01.png";

export default function DoctorProfile() {
  const { id } = useParams();
  const [showNotice, setShowNotice] = useState(false);

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [doubleBooking, setDoubleBooking] = useState(false);

  const durations = [15, 30, 45, 59];
  const canSubmit = date && startTime && duration;

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowNotice(true);
  };

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      {/* Doctor Card */}
      <div className="bg-cardDark rounded-xl overflow-hidden shadow">
        <img
          src={doc1}
          alt="Doctor"
          className="h-64 w-full object-cover"
        />

        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold text-white">Doctor {id}</h1>
          <p className="text-accent">General Practitioner</p>
          <p className="text-gray-300">
            Community-first healthcare professional focused on preventative and
            holistic care.
          </p>
        </div>
      </div>

      {/* Appointment Booking */}
      <div className="bg-cardDark p-8 rounded-xl space-y-8">
        <h2 className="text-2xl font-semibold text-white">
          Book Appointment
        </h2>

        {/* Date & Time */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full px-4 py-2 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Duration Selection */}
        <div className="space-y-3">
          <p className="text-sm text-gray-300">Appointment Duration</p>

          <div className="flex flex-wrap gap-3">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`px-4 py-2 rounded-lg border transition text-sm
                  ${
                    duration === d
                      ? "bg-accent text-primary border-accent"
                      : "border-white/20 text-white hover:border-accent"
                  }`}
              >
                {d} mins
              </button>
            ))}
          </div>
        </div>

        {/* Double Booking */}
        <label className="flex items-center gap-3 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={doubleBooking}
            onChange={() => setDoubleBooking(!doubleBooking)}
            className="accent-accent"
          />
          Allow double booking (extended or back-to-back session)
        </label>

        {/* Confirm */}
        <button
          onClick={handleConfirm}
          disabled={!canSubmit}
          className="mt-4 px-6 py-3 bg-accent text-primary font-semibold rounded-md disabled:opacity-50 transition"
        >
          Confirm Appointment
        </button>
      </div>

      {/* NOTICE MODAL */}
      <ComingSoonModal
        open={showNotice}
        onClose={() => setShowNotice(false)}
        title="Appointment Booking Coming Soon"
        message="Booking appointments and accessing doctor profiles is not yet available on the website. These features will be launched soon. You can currently explore the upcoming experience."
      />
    </section>
  );
}
