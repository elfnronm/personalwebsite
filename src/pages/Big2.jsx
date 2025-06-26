import React, { useState } from "react";
import { motion } from "framer-motion";

const Big2Project = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const finalUIImages = [
    "/assets/Main_Big2.jpg",
    "/assets/SelectGame_Big2.jpg",
    "/assets/InGame_Big2.jpg",
    "/assets/Score_Big2.jpg",
    "/assets/Rules.png",
  ];

  const wireframes = [
    "/assets/Lowfi1.png",
    "/assets/Lowfi2.png",
    "/assets/Lowfi3.png",
  ];
  return (
    <>
      {/* Hero Logo Section with Gradient Background */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.img
            src="/assets/big2trans.png"
            alt="Big 2 Logo"
            className="mx-auto w-60 md:w-80 drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-5xl md:text-6xl font-bold mt-10 leading-snug">Big 2 Mobile Companion</h1>

          <p className="text-lg md:text-2xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Score-tracking, rule reference, and animated turn indicators — all in one elegant app.
          </p>
          <motion.div 
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#overview" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              View Project
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Overview Metadata Block with Card Layout */}
      <section id="overview" className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <motion.div 
  className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {[
    { label: "Sector", content: "Games · Mobile Development · UX/UI" },
    { label: "Challenge", content: "Transform a pen-and-paper card game into a polished mobile experience with persistent scoring and rule guidance." },
    { label: "My Role", content: "Android Developer · UI Designer · Usability Tester" },
    { label: "Project Time", content: "4 weeks (from ideation to testing)" },
    {
      label: "Tools",
      content: (
        <div className="mt-1 flex flex-wrap gap-2">
          {["Java", "MVVM", "RoomDB", "Figma", "Android Studio"].map((tool) => (
            <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Impact",
      content: "Reduced scoring errors by 80% for players",
    },
  ].map(({ label, content }, i) => (
    <div key={i}>
      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{label}</h3>
      <div className="mt-1 text-lg text-gray-800">{content}</div>
    </div>
  ))}
</motion.div>

      </section>

      {/* Full Case Study Body */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20 text-gray-800">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Big 2 Mobile Companion
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed">
                A mobile app for tracking scores and rules while playing Big 2, a four-player card game. The app offers real-time turn indicators, a live leaderboard, rule reference, and a dynamic score entry screen.
              </p>
            </div>
            <div className="md:w-1/3 bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-2">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Auto-calculated payouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Animated turn indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Rule reference guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Persistent game history</span>
                </li>
              </ul>
            </div>
          </div>
          
        </motion.div>

        {/* Challenge & Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed">
                Big 2 is traditionally played with pen and paper, leading to scoring errors and constant rule lookups. Players needed:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Accurate score tracking with auto-calculated payouts</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Built-in rule reference guide</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Animated player turn indicators</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Persistent data storage (RoomDB)</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg shadow-inner border border-gray-200">
                <p className="text-sm italic text-gray-600">
                  "The biggest pain point was players forgetting whose turn it was and constantly asking about rules."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Low-Fi Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Early Wireframes</h2>
          <p className="text-lg mb-6">
            I created low-fidelity wireframes to test layout, flows, and essential functionality before development.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {wireframes.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative bg-white p-0 rounded-xl shadow-md border border-gray-100"
              >
                <button onClick={() => openModal(src)} className="w-full">
                  <img src={src} alt={`Low-Fi ${i + 1}`} className="rounded-t-lg w-full h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-3 rounded-b-lg">
                    <p className="text-sm text-gray-600 text-center">Wireframe iteration {i + 1}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>


            {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          <img
          src={selectedImage}
          alt="Enlarged UI"
          className="w-auto h-auto max-w-[80vw] max-h-[85vh] rounded-xl shadow-2xl border-4 border-white"
/>

        </div>
      )}
    

        {/* Final UI Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white py-12 rounded-xl"
        >
          <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Final UI Design</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Once wireframes were validated, I implemented the UI with Java and XML in Android Studio.
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-center gap-1 py-4">
              {finalUIImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => openModal(src)}
                  className="flex-shrink-0 w-[22%] mx-0.5 transition-transform hover:scale-105"
                >
                  <img
                    src={src}
                    alt={`UI ${i + 1}`}
                    className="w-full h-auto rounded-xl shadow-xl object-cover border border-gray-200"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>



        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">MVVM Pattern</h3>
              <p className="text-gray-700">
                The app was built using MVVM architecture to separate concerns and improve testability. ViewModels managed game state and score calculations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">Data Persistence</h3>
              <p className="text-gray-700">
                RoomDB provided local storage for game history and player statistics, with LiveData ensuring real-time UI updates.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-3">Key Components:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['GameRepository', 'ScoreViewModel', 'RoomDatabase', 'UI Controllers'].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-xs text-center">
                  <code className="text-sm text-blue-600">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testing & Evaluation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">User Testing & Evaluation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">Process</h3>
              <p className="text-gray-700 mb-4">
                I tested the app with 8 users across 3 iterations, focusing on:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                  <span>Score entry efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                  <span>Rule lookup accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                  <span>Turn indicator clarity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">Results</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">Score Entry Speed</span>
                    <span className="text-sm font-medium text-gray-500">+65% faster</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">Rule Lookups</span>
                    <span className="text-sm font-medium text-gray-500">-80% reduction</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">User Satisfaction</span>
                    <span className="text-sm font-medium text-gray-500">4.8/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{width: '96%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Reflection</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">Learnings</h3>
              <p className="text-gray-700">
                This project sharpened my understanding of local data persistence, modular Android architecture, and UI responsiveness. The iterative testing process was invaluable for refining the user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-blue-700">Future Improvements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">+</span>
                  <span>Gesture-based input for score entry</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">+</span>
                  <span>Multiplayer sync via Bluetooth/WiFi</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">+</span>
                  <span>Advanced statistics and player profiles</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Big2Project;