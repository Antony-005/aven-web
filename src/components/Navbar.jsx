import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-base font-medium transition ${
      isActive ? "text-accent" : "text-white hover:text-accent"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-primary/80 shadow-lg"
          : "bg-primary"
      } border-b border-white/10`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="AVEN Health Logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/community-feed" className={navLinkClass}>Communities</NavLink>
          <NavLink to="/doctors" className={navLinkClass}>Book Appointments</NavLink>
          <NavLink to="/pharmacies" className={navLinkClass}>Pharmacies</NavLink>

          {/* HOW IT WORKS */}
          <Dropdown label="How It Works">
            <NavLink to="/how-it-works" className="dropdown-link">
              How It Works
            </NavLink>
            <NavLink to="/faq" className="dropdown-link">
              FAQs
            </NavLink>
          </Dropdown>

          {/* ABOUT */}
          <Dropdown label="About Us">
            <NavLink to="/about-us" className="dropdown-link">
              About Us
            </NavLink>
            <NavLink to="/meet-the-team" className="dropdown-link">
              Team
            </NavLink>
          </Dropdown>

          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* RIGHT */}
        {/* <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/sign-up"
            className="px-6 py-3 text-base font-semibold bg-accent text-primary rounded-xl hover:opacity-90 transition"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/sign-in"
            className="text-base font-medium text-white hover:text-accent transition"
          >
            Sign In
          </NavLink>
        </div> */}

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-accent text-3xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-80 bg-primary shadow-2xl p-8 z-50"
          >
            <button
              className="text-accent text-3xl mb-10"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>

            <div className="flex flex-col gap-7 text-lg">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
              <NavLink to="/community-feed" onClick={() => setMobileOpen(false)}>Communities</NavLink>
              <NavLink to="/doctors" onClick={() => setMobileOpen(false)}>Book Appointments</NavLink>
              <NavLink to="/pharmacies" onClick={() => setMobileOpen(false)}>Pharmacies</NavLink>
              <NavLink to="/how-it-works" onClick={() => setMobileOpen(false)}>How It Works</NavLink>
              <NavLink to="/about-us" onClick={() => setMobileOpen(false)}>About Us</NavLink>
              <NavLink to="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>

              <NavLink
                to="/sign-up"
                className="mt-8 px-6 py-3 bg-accent text-primary rounded-xl text-center font-semibold"
              >
                Sign Up
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- DROPDOWN ---------------- */

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-base font-medium text-white hover:text-accent flex items-center gap-1 transition"
      >
        {label}
        <span className={`text-sm transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full mt-4 w-56 bg-cardDark rounded-2xl shadow-xl overflow-hidden border border-white/10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
