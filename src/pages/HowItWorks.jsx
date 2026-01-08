import { motion } from "framer-motion";
import howImage2 from "../assets/how02.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <section className="space-y-24">

      {/* ================= HEADER ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          How AVEN Works
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          A simple, human-centered approach to everyday healthcare access and
          engagement.
        </p>
      </motion.div>

      {/* ================= STAIRCASE STEPS ================= */}
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* STEP 01 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center"
          >
            <span className="text-accent text-5xl font-bold">01</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Discover
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Explore healthcare providers, pharmacies, and resources within
              your community.
            </p>
          </motion.div>

          {/* STEP 02 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center md:mt-24"
          >
            <span className="text-accent text-5xl font-bold">02</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Connect
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Access trusted information, plan care, and engage with health
              services that fit your needs.
            </p>
          </motion.div>

          {/* STEP 03 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-cardDark p-10 rounded-2xl shadow-xl text-center h-[360px] flex flex-col justify-center md:mt-48"
          >
            <span className="text-accent text-5xl font-bold">03</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Empower
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Make informed health decisions supported by community insights
              and preventative guidance.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= EXPERIENCE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-cardLight p-12 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">
            Built Around Real Life
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            AVEN fits naturally into everyday life — helping users stay informed,
            prepared, and connected to care without needing to navigate complex
            healthcare systems.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src={howImage2}
            alt="Patient using healthcare mobile app"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>

      </div>

    </section>
  );
}
