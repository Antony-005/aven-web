import { useState } from "react";
import { motion } from "framer-motion";

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
    if (form.message.trim().length < 10)
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

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="max-w-3xl mx-auto space-y-12">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white" tabIndex={0}>
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 text-lg" tabIndex={0}>
          We’re here to listen, support, and improve AVEN together.
        </p>
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-cardDark p-8 rounded-xl"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
            role="alert"
            aria-live="polite"
          >
            <h2 className="text-2xl font-semibold text-accent" tabIndex={0}>
              Message Sent
            </h2>
            <p className="text-gray-300" tabIndex={0}>
              Thank you for reaching out. We’ll get back to you soon.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-accent text-primary font-semibold py-2 px-6 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            {/* NAME */}
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-accent text-primary font-semibold py-3 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
