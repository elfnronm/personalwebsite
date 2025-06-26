import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-50 to-indigo-50" id="contact">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Whether you have a project in mind or just want to chat about tech, 
            I’d love to hear from you!
          </p>
          <motion.a
            href="mailto:elif_onem@msn.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me a Message
          </motion.a>
          <p className="mt-6 text-gray-500">
            (I respond within 24 hours!)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;