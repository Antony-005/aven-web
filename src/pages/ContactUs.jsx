import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto space-y-12">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          We’re here to listen, support, and improve AVEN together.
        </p>
      </div>

      {/* FORM */}
      <div className="bg-cardDark p-8 rounded-xl">
        {submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-accent">
              Message Sent
            </h2>
            <p className="text-gray-300">
              Thank you for reaching out. We’ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-accent text-primary font-semibold py-3 rounded hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        )}
      </div>

    </section>
  );
}
