import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 mb-6">
          Interested in working together? Feel free to reach out!
        </p>
        <a
          href="mailto:elif_onem@msn.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
