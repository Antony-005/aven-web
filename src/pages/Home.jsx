import { motion } from "framer-motion";
import { fadeUp, stagger, scaleHover } from "../utils/motion";
import Tilt from "react-parallax-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import heroImage from "../assets/01.png";
import sectionImage1 from "../assets/02.png";
import sectionImage2 from "../assets/03.png";
import sectionImage3 from "../assets/04.png";
import sectionImage4 from "../assets/05.png";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-28">

      {/* ================= HERO ================= */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Your Health, <br className="hidden sm:block" />
            Connected & Simplified
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
          >
            AVEN exists to simplify how people access, understand, and engage
            with healthcare — putting individuals and communities at the center.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              {...scaleHover}
              className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg"
            >
              Get the App
            </motion.button>

            <motion.button
              {...scaleHover}
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <img
              src={heroImage}
              alt="Digital healthcare experience"
              className="rounded-2xl shadow-2xl w-full"
            />
          </Tilt>
        </motion.div>
      </section>

      {/* ================= AVEN VALUES ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-cardDark rounded-3xl p-8 sm:p-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { letter: "A", title: "Access" },
            { letter: "V", title: "Vitality" },
            { letter: "E", title: "Empowerment" },
            { letter: "N", title: "Network" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="space-y-3"
            >
              <div className="text-accent text-4xl sm:text-5xl font-bold">
                {item.letter}
              </div>
              <p className="font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= MISSION & VISION ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Our Mission
            </h2>
            <p className="text-gray-300">
              Our mission is to empower individuals and communities with
              accessible, preventative, and connected healthcare tools that
              enable healthier everyday living.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To create healthier, more informed communities by becoming the
              everyday health companion that bridges people, care, and data.
            </p>
          </motion.div>
        </motion.div>

        <motion.img
          src={sectionImage1}
          alt="Healthcare professionals collaborating"
          className="rounded-2xl shadow-xl w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* ================= COMMUNITY FIRST ================= */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.img
          src={sectionImage3}
          alt="Community-centered healthcare"
          className="rounded-2xl shadow-xl order-last lg:order-first w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            A Community-First Health Platform
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            AVEN is not hospital-first. It is community-first — technology-enabled
            but human-centered. Discover care providers, pharmacies, insights,
            and conversations that support better decisions every day.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY AVEN ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-cardDark rounded-3xl p-8 sm:p-12"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Trusted Care", image: sectionImage2 },
            { title: "Connected Ecosystem", image: sectionImage4 },
            { title: "Everyday Wellness", image: sectionImage3 },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="space-y-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mx-auto h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= COMMUNITY TESTIMONIALS ================= */}
      <section className="space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Trusted by Communities
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-cardDark p-6 rounded-xl h-full">
                <p className="text-gray-300">
                  “AVEN makes healthcare simple and accessible.”
                </p>
                <p className="mt-4 text-accent font-semibold">
                  Community Member
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          Start Your Health Journey with AVEN
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto">
          Join the community shaping the future of everyday health.
        </p>

        <motion.button
          {...scaleHover}
          className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.section>

    </div>
  );
}
