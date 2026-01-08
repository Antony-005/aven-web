import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

import aboutImage1 from "../assets/about01.png";
import aboutImage2 from "../assets/about02.png";
import aboutImage3 from "../assets/about03.png";

export default function AboutUs() {
  return (
    <div className="space-y-20 md:space-y-24">

      {/* ================= HEADER + HERO IMAGE ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="space-y-10 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          About AVEN
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto text-lg text-gray-300"
        >
          AVEN exists to simplify how people access, understand, and engage with
          healthcare, putting individuals and communities at the center of
          everything.
        </motion.p>

        {/* Resized hero image */}
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <img
            src={aboutImage1}
            alt="Community healthcare"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= STORY SECTION ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        {/* STORY TEXT */}
        <motion.div
          variants={fadeUp}
          className="bg-cardDark p-10 rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-accent">
            Why AVEN Was Created
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Healthcare today is fragmented, reactive, and often difficult to
            navigate. AVEN was created to change that — by building a connected
            ecosystem that helps people make better health decisions before
            problems become emergencies.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We believe access to reliable health resources should be simple,
            preventative, and available where people already are.
          </p>
        </motion.div>

        {/* STORY IMAGE */}
        <motion.div variants={fadeUp}>
          <img
            src={aboutImage2}
            alt="Healthcare professionals collaborating"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= BELIEFS + IMAGE ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        {/* BELIEFS */}
        <motion.div
          variants={fadeUp}
          className="bg-cardLight p-10 rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-semibold text-accent">
            What We Believe
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Health starts in the community, not the hospital</li>
            <li>• Prevention is more powerful than treatment alone</li>
            <li>• Technology should support humans, not replace them</li>
            <li>• Access and trust are foundational to better outcomes</li>
          </ul>
        </motion.div>

        {/* BELIEFS IMAGE */}
        <motion.div variants={fadeUp}>
          <img
            src={aboutImage3}
            alt="Patient-centered healthcare"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= CORE VALUES ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-white text-center"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Accessibility",
            "Transparency",
            "Empowerment",
            "Community Trust",
          ].map((value) => (
            <motion.div
              key={value}
              variants={fadeUp}
              className="bg-cardDark p-8 rounded-2xl text-center shadow hover:shadow-xl transition"
            >
              <p className="text-lg font-medium text-white">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
