import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    password: "",
    firebaseUid: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Signup Data:", formData);
    // Later:
    // 1. Create Firebase auth user
    // 2. Save user profile to MongoDB
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-xl bg-cardDark p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Names */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+254..."
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* DOB & Gender */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Date of Birth
              </label>
              <input
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                type="date"
                className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
            >
              <option value="">Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-accent hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
