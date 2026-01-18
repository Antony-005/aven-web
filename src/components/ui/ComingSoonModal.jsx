import { motion, AnimatePresence } from "framer-motion";

export default function ComingSoonModal({ open, onClose, title, message }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-cardDark rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 mb-6">{message}</p>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-accent text-primary rounded-xl font-semibold hover:opacity-90 transition"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
