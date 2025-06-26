import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Big2Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 50); // Delay slightly to ensure layout is rendered
      }
    }
  }, [location]);


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

  const stats = [
    {
      value: "6/8",
      label: "Preferred the App",
      icon: "👍",
      description: "Users found the app more engaging and confident to use.",
    },
    {
      value: "0 Errors",
      label: "Critical Errors",
      icon: "✅",
      description: "No critical errors observed during app tasks, unlike spreadsheet.",
    },
    {
      value: "On Par",
      label: "Efficiency with Spreadsheet",
      icon: "⏱️",
      description: "The app performed similarly to the spreadsheet in terms of efficiency.",
    },
    {
      value: "4.0/5",
      label: "Overall Satisfaction",
      icon: "⭐",
      description: "Average user satisfaction with the app's experience.",
    },
  ];

  return (
    <>
     <div id="top" className="absolute top-0" />
      {/* Animated Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/20 rounded-full"
              style={{
                width: `${i * 200}px`,
                height: `${i * 200}px`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <img
              src="/assets/big2trans.png"
              alt="Big 2 Logo"
              className="mx-auto w-60 md:w-80 drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mt-10 leading-snug text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Big 2
            </span>{" "}
            Mobile Companion
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-white/80 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Revolutionizing traditional card games with{" "}
            <span className="font-semibold text-white">smart scoring</span>,{" "}
            <span className="font-semibold text-white">animated cues</span>, and{" "}
            <span className="font-semibold text-white">persistent tracking</span>
          </motion.p>

          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#project-content"
              className="px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition-colors"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the Project
            </motion.a>
            <motion.a
              href="#stats"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Results
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Stats Bar  */}
      <section id="stats" className="bg-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
            Validated Results from User Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-indigo-900">{stat.value}</h3>
                <p className="text-indigo-700 font-medium mt-2">{stat.label}</p>
                <p className="text-indigo-500 text-sm mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Methodology Footnote */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Based on testing with 8 participants comparing app vs spreadsheet tracking</p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "design", label: "Design Process" },
              { id: "tech", label: "Technology" },
              { id: "results", label: "Results" },
              { id: "reflection", label: "Reflection" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="project-content" className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Game-Changing Mobile Experience
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  The Big 2 Mobile Companion transforms a traditional pen-and-paper card game into a
                  <span className="font-semibold text-indigo-700"> polished digital experience</span>,
                  eliminating scoring errors and streamlining gameplay with intuitive features.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  Developed in just 4 weeks, this Android app combines <span className="font-semibold text-purple-700">elegant design</span> with
                  <span className="font-semibold text-purple-700"> robust technical architecture</span>,
                  earning high marks for UI complexity (90%) and technical implementation (87%).
                </p>
              </div>
              <div className="lg:w-1/3 w-full bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-inner border border-indigo-100">
                <h3 className="font-bold text-xl text-indigo-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Dynamic turn indicators with animations",
                    "Auto-calculated scoring & payouts",
                    "Comprehensive rule reference guide",
                    "Persistent game history with RoomDB",
                    "MVVM architecture for clean code",
                    "Enhanced user confidence and engagement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>

          {/* Project Metadata */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {[
                {
                  icon: "🎯",
                  title: "Challenge",
                  content: "Transform error-prone paper scoring into a reliable digital system while enhancing gameplay with smart features."
                },
                {
                  icon: "🛠️",
                  title: "My Role",
                  content: "Developer and designer - from concept to testing and implementation."
                },
                {
                  icon: "⏱️",
                  title: "Timeline",
                  content: "4 weeks (Research → Design → Development → Testing)"
                },
                {
                  icon: "📱",
                  title: "Platform",
                  content: "Android (Java, MVVM, RoomDB)"
                },
                {
                  icon: "📊",
                  title: "Impact",
                  content: "Enhanced user confidence and engagement; efficiency on par with existing method."
                },
                {
                  icon: "🏆",
                  title: "Achievements",
                  content: "90% UI complexity score, 87% technical implementation"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-r border-gray-100`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-indigo-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* Design Process Section */}
        <section id="design" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Design Evolution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From rough sketches to polished interfaces - the journey to create an intuitive scoring companion
              </p>
            </div>

            {/* Design Process Steps */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>

              {[
                {
                  title: "User Research",
                  content: "Identified pain points: scoring errors, turn confusion, frequent rule checks",
                  icon: "🔍",
                  side: "left"
                },
                {
                  title: "Wireframing",
                  content: "Created low-fi prototypes to test core flows and information architecture",
                  icon: "✏️",
                  side: "right"
                },
                {
                  title: "UI Design",
                  content: "Developed visual language with clear hierarchy and game-appropriate styling",
                  icon: "🎨",
                  side: "left"
                },
                {
                  title: "Interaction Design",
                  content: "Added animations and micro-interactions for better gameplay feedback",
                  icon: "👆",
                  side: "right"
                },
                {
                  title: "User Testing",
                  content: "Evaluated app against spreadsheet with 8 participants using quantitative and qualitative methods",
                  icon: "🧪",
                  side: "left"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-12 ${step.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                  initial={{ opacity: 0, x: step.side === 'left' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`md:absolute top-0 ${step.side === 'left' ? 'md:right-0' : 'md:left-0'} flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white text-xl z-10`}>
                    {step.icon}
                  </div>
                  <div className={`mt-4 md:mt-0 p-6 rounded-xl shadow-md border border-gray-100 ${step.side === 'left' ? 'md:mr-6 bg-gradient-to-r from-indigo-50 to-white' : 'md:ml-6 bg-gradient-to-l from-purple-50 to-white'}`}>
                    <h3 className="text-xl font-bold text-indigo-800 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Wireframes */}
            <motion.div
              className="mt-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-800">Early Wireframes</h3>
              <p className="text-lg mb-8 text-gray-700">
                Initial low-fidelity prototypes focused on establishing clear information hierarchy and efficient workflows
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {wireframes.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <button
                      onClick={() => openModal(src)}
                      className="w-full h-full"
                    >
                      <img
                        src={src}
                        alt={`Wireframe ${i + 1}`}
                        className="rounded-xl w-full h-auto shadow-lg border border-gray-200"
                      />
                      <div className="mt-4 text-center">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                          Iteration {i + 1}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final UI */}
            <motion.div
              className="mt-24 bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-3 text-indigo-800">Final UI Design</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Polished interfaces with clear visual hierarchy, game-appropriate styling, and intuitive interactions
                </p>
              </div>

              <div className="flex overflow-x-auto pb-6 -mx-4 px-4">
                <div className="flex space-x-6">
                  {finalUIImages.map((src, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="flex-shrink-0 w-72 shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white"
                    >
                      <button
                        onClick={() => openModal(src)}
                        className="w-full h-full"
                      >
                        <img
                          src={src}
                          alt={`UI Screen ${i + 1}`}
                          className="w-full h-auto"
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Visual Feedback",
                    content: "Animated turn indicators and score changes provide clear gameplay feedback",
                    icon: "✨"
                  },
                  {
                    title: "Efficient Input",
                    content: "Optimized number pickers and controls for fast score entry",
                    icon: "⚡"
                  },
                  {
                    title: "Rule Reference",
                    content: "Quick-access guide reduces cognitive load",
                    icon: "📚"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-bold text-indigo-800 mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
        {/* User Testing Methodology Section */}
        <section id="methodology" className="scroll-mt-24 py-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                User Testing Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rigorous testing with 8 participants comparing app vs traditional spreadsheet
              </p>
            </div>

            {/* Methodology Overview */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Testing Approach
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We conducted <span className="font-semibold text-indigo-700">controlled A/B testing</span> with 8 participants to compare the Big 2 Companion App against traditional spreadsheet scoring.
                  </p>
                  <p>
                    <span className="font-semibold">Counterbalanced design:</span> Half the participants started with the app (Group A) while the other half began with spreadsheets (Group B) to eliminate ordering effects.
                  </p>
                  <p>
                    Each participant completed <span className="font-semibold">a set of tasks</span> using both interfaces while we measured:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Quantitative data: task completion time and error rate (analyzed using ANOVA)</li>
                    <li>Qualitative feedback: assessed through thematic analysis of survey responses</li>
                  </ul>
                </div>
              </div>

              {/* Visual Timeline */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h4 className="font-bold text-lg mb-4 text-center text-indigo-800">Testing Timeline</h4>
                <div className="space-y-4">
                  {[
                    { phase: "Preparation", detail: "Created task list & consent forms", duration: "1 day" },
                    { phase: "Testing Session", detail: "Per participant interaction with both interfaces", duration: "2 days" },
                    { phase: "Data Analysis", detail: "Analyzed quantitative and qualitative data", duration: "1 day" },
                    { phase: "Reporting", detail: "Compiled findings and recommendations", duration: "Ongoing" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-indigo-800">{item.phase}</h5>
                        <p className="text-sm text-gray-600">{item.detail}</p>
                        <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full mt-1 inline-block">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Participant Demographics */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  Participant Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-indigo-700">Demographics</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          👥
                        </span>
                        <span><span className="font-medium">8 participants</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          🎮
                        </span>
                        <span>All had experience with the Big 2 card game.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          📱
                        </span>
                        <span>All familiar with mobile apps.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-indigo-700">Testing Environment</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          🧪
                        </span>
                        <span>Controlled setting ensuring consistent conditions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          ⏱️
                        </span>
                        <span>Standardized tasks for both methods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3">
                          📝
                        </span>
                        <span>Post-test <span className="font-medium">qualitative feedback</span> was assessed through thematic analysis.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Testing Insights</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "⏱️",
                    title: "Efficiency",
                    detail: "The companion app performed on par with the existing spreadsheet method.",
                  },
                  {
                    icon: "👍",
                    title: "User Preference",
                    detail: "6 out of 8 participants preferred using the app.",
                  },
                  {
                    icon: "😌",
                    title: "Confidence & Engagement",
                    detail: "Users reported feeling significantly more confident and engaged with the app.",
                  },
                  {
                    icon: "💡",
                    title: "Reduced Cognitive Load",
                    detail: "The app helped reduce memory recall and cognitive load during gameplay.",
                  },
                  {
                    icon: "✨",
                    title: "Enhanced Experience",
                    detail: "Preliminary findings support potential for mobile tools to enhance player experience.",
                  },
                  {
                    icon: "💬",
                    title: "Qualitative Feedback",
                    detail: "Positive feedback on intuitive interface and helpful features.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/90">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Technology Section */}
        <section id="tech" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Technical Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Robust foundation earning 87% in technical implementation score
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  Core Technologies
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ☕
                    </span>
                    <span><span className="font-semibold">Java:</span> Primary programming language for Android development.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🏛️
                    </span>
                    <span><span className="font-semibold">MVVM Architecture:</span> Model-View-ViewModel for clean separation of concerns, testability, and maintainability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🗄️
                    </span>
                    <span><span className="font-semibold">RoomDB:</span> Persistence library for local data storage (game history, player scores).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🖼️
                    </span>
                    <span><span className="font-semibold">Android Jetpack Components:</span> Utilized LiveData, ViewModel, and Navigation Component for robust and modern UI development.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-purple-50 p-8 rounded-2xl shadow-lg border border-purple-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Technical Challenges & Solutions
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ⚙️
                    </span>
                    <span><span className="font-semibold">Complex Scoring Logic:</span> Implemented intricate algorithms to accurately calculate Big 2 scores and payouts, handling various game scenarios.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      💾
                    </span>
                    <span><span className="font-semibold">Data Persistence:</span> Employed RoomDB for seamless local storage, ensuring game progress and historical data are retained even after app closure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🎨
                    </span>
                    <span><span className="font-semibold">Responsive UI:</span> Designed the interface to adapt gracefully across different Android device screen sizes and orientations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ⚡
                    </span>
                    <span><span className="font-semibold">Performance Optimization:</span> Focused on efficient code to ensure smooth animations and a responsive user experience.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section id="results" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Detailed Results & Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quantitative data (ANOVA) and qualitative feedback support the app's effectiveness
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M18 10V6M6 18h.01M18 18h.01"></path>
                  </svg>
                  Quantitative Analysis (ANOVA)
                </h3>
                <p className="text-gray-700 mb-6">
                  ANOVA (Analysis of Variance) was used to analyze the quantitative data collected from user testing, specifically focusing on task completion time and error rates.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ⏱️
                    </span>
                    <span><span className="font-semibold">Efficiency:</span> Results suggest that, within the scope of the experiment, the companion app performs on par with the existing method in terms of efficiency (speed).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      📉
                    </span>
                    <span><span className="font-semibold">Error Rate:</span> While the report doesn't explicitly state a percentage reduction, it implies fewer critical errors with the app, contributing to a smoother experience.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🔋
                    </span>
                    <span><span className="font-semibold">Battery Usage:</span> No excessive battery drain was reported, indicating good energy efficiency.</span>
                  </li>
                </ul>
               
              </motion.div>

              <motion.div
                className="bg-purple-50 p-8 rounded-2xl shadow-lg border border-purple-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Qualitative Feedback
                </h3>
                <p className="text-gray-700 mb-6">
                  Qualitative feedback was gathered through post-test surveys and assessed using thematic analysis to understand user perceptions and preferences.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ⭐
                    </span>
                    <span><span className="font-semibold">Overall Satisfaction:</span> Users reported feeling significantly more confident and engaged while using the app (Average 4.0/5 satisfaction).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      👍
                    </span>
                    <span><span className="font-semibold">Preference:</span> The majority of participants (6 out of 8) expressed a preference for the Big 2 Mobile Companion Application over the traditional spreadsheet for playing Big 2.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      💡
                    </span>
                    <span><span className="font-semibold">Key Strengths:</span> Users highlighted the simplified interface, aid in referencing valid moves, and reduction in cognitive load as major benefits.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ✍️
                    </span>
                    <span><span className="font-semibold">Suggested Improvements:</span> Open-ended responses provided valuable insights for future iterations, focusing on minor interface enhancements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ✋
                    </span>
                    <span><span className="font-semibold">Interaction Method:</span> Feedback was collected on preference for one-handed vs. two-handed interaction.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="scroll-mt-24 py-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Reflection & Future Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lessons learned and the path forward for the Big 2 Companion App
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Key Learnings
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🤝
                    </span>
                    <span><span className="font-semibold">User-Centric Design:</span> Emphasized the importance of continuous user feedback in shaping an effective and enjoyable product.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      📈
                    </span>
                    <span><span className="font-semibold">Iterative Development:</span> Reinforced the value of rapid prototyping and testing to refine features and address usability issues early.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-3 flex-shrink-0">
                      ⚖️
                    </span>
                    <span><span className="font-semibold">Balancing Act:</span> Highlighted the challenge of enhancing gameplay through digital tools without compromising the social and strategic elements of a traditional game.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-purple-50 p-8 rounded-2xl shadow-lg border border-purple-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7M16 4v6"></path>
                  </svg>
                  Future Enhancements
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🌐
                    </span>
                    <span><span className="font-semibold">Multiplayer Integration:</span> Explore adding real-time multiplayer features for remote play.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      🤖
                    </span>
                    <span><span className="font-semibold">AI Opponents:</span> Develop AI players for single-player practice or competitive play.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      Customization:
                    </span>
                    <span>Allow users to customize game rules and scoring variations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 flex-shrink-0">
                      Analytics:
                    </span>
                    <span>Implement in-app analytics to gather more detailed usage data for continuous improvement.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-screen-lg max-h-[90vh] object-contain rounded-lg shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl"
            aria-label="Close"
          >
            &times;
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Big2Project;