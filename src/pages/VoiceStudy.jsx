import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Components (using inline SVG for portability) ---
const FiUsers = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const FiFileText = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const FiLayout = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
const FiCode = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const FiAward = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>;
const FiChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const base = process.env.PUBLIC_URL || '';



// --- Main Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPrototypeIndex, setSelectedPrototypeIndex] = useState(0);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    { id: "prototyping", label: "Prototypes" },
    { id: "outcome", label: "Outcome" },
  ];

  const teamMembers = ["Dustin Chan", "Ian Galendez", "Abhayjit Sodhi", "Elif Onem", "Ryan Luk"];

  const prototypes = [
  {
    name: "Low-Fi Wireframes",
    image: `${base}/assets/lowFi_hci.jpg`,
    description: "Initial sketches to map out the core user flow for both participant and proctor interfaces, focusing on task sequence and control points."
  },
  {
    name: "Mid-Fi Digital Prototype",
    image: `${base}/assets/midFi_hci.png`,
    description: "Digital wireframes built in Figma to test interaction patterns, button placement, and the 'Wizard of Oz' control panel for the proctor."
  },
  {
    name: "High-Fi Apparatus",
    image: `${base}/assets/highFi_hci.png`,
    description: "The final Unity application with full visual design and MQTT backend integration, used for the remote user testing sessions."
  }
];

const handlePrototypeClick = (index) => setSelectedPrototypeIndex(index);

  const stats = [
    { value: "0", label: "Statistically Significant Differences", icon: "📊", description: "Performance metrics showed no significant variation between voice types." },
    { value: "Clarity", label: "Preferred over 'Human-ness'", icon: "👍", description: "Users rated the clear, consistent GPT agent highest for understandability." },
    { value: "Neutrality", label: "Viewed as a Positive", icon: "🤖", description: "Task-centric AI voices allowed users to focus without social distractions." },
    { value: "Instruction", label: "Key Application Area", icon: "🎓", description: "Findings are crucial for educational and training-based AI systems." },
  ];

  // Effect to handle smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
        const sections = tabs.map(tab => document.getElementById(tab.id));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActiveTab(section.id);
                break;
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Animated Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute border border-sky-500/20 rounded-full"
                    style={{ width: `${(i + 1) * 25}vw`, height: `${(i + 1) * 25}vw` }}
                    animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">When Machines Train Humans</h1>
          <p className="text-xl md:text-2xl text-sky-300/80 mt-6 max-w-3xl mx-auto">
            A study on how AI voice characteristics impact user performance and preference in instructional settings.
          </p>
          <motion.a href="#project-content" onClick={(e) => { e.preventDefault(); handleNavClick('overview'); }} className="mt-12 inline-block px-8 py-4 bg-sky-500 text-white font-bold rounded-xl shadow-lg hover:bg-sky-400 transition-transform hover:scale-105"
          >
            Explore The Research
          </motion.a>
        </motion.div>
        <motion.div className="absolute bottom-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FiChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
      
      {/* Stats Bar */}
      <section id="stats" className="bg-white py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Key Research Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl mb-3 inline-block bg-sky-100 p-3 rounded-full">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-sky-600">{stat.value}</h3>
                <p className="text-slate-700 font-semibold mt-2">{stat.label}</p>
                <p className="text-slate-500 text-sm mt-2">{stat.description}</p>
              </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center border-b border-gray-200">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => handleNavClick(tab.id)} className={`px-4 md:px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-colors duration-300 ${activeTab === tab.id ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-sky-600 hover:border-sky-300'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main id="project-content" className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        
        <section id="overview" className="scroll-mt-24">
           <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">The Challenge: Voice in Performance Contexts</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">As AI and personal assistants become increasingly integrated into our daily lives, this study explores the relevance of voice type in AI agents within performance and educational contexts. We investigated the impact of three AI voice characteristics—formality, tone, and human-likeness—on user performance and preferences in a structured, instructional setting.</p>
                  <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg mt-6">
                      <h3 className="font-bold text-sky-800 mb-2">Core Research Questions</h3>
                      <ul className="list-disc list-inside space-y-2 text-sky-900/80">
                          <li>Do performance metrics differ between AI voices of varying human-like quality?</li>
                          <li>Do users feel an emotional affinity to more human-like voices in a performance-based task?</li>
                          <li>Does a link exist between emotional affinity and performance metrics when using an AI voice?</li>
                      </ul>
                  </div>
              </div>
              <div className="md:col-span-2 bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center"><FiUsers className="w-5 h-5 text-slate-400 mr-3" />The Team</h3>
                  <ul className="space-y-3">
                      {teamMembers.map(name => <li key={name} className="text-gray-600">{name}</li>)}
                  </ul>
              </div>
            </div>
        </section>

        <section id="process" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Research Process</h2>
            <div className="relative border-l-2 border-sky-200 ml-6 md:ml-0">
                {/* Step 1: Lit Review */}
                <div className="mb-16 md:flex items-center w-full">
                    <div className="md:w-1/2 md:pr-8">
                         <div className="p-6 bg-white rounded-xl border shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-3"><FiFileText className="w-6 h-6 mr-2 text-sky-600"/>1. Literature Review</h3>
                            <p className="text-gray-600">We found existing research on AI voices often used narrow tasks (puzzles, meditation) and lacked user control. Our study addressed this gap by using a structured, multi-step instructional task to explore how different voice types—GPT, human, and robotic—influence user engagement and performance in a setting that mimics real-world learning.</p>
                         </div>
                    </div>
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white"></div>
                </div>

                {/* Step 2: Design */}
                <div className="mb-16 md:flex flex-row-reverse items-center w-full">
                     <div className="md:w-1/2 md:pl-8">
                         <div className="p-6 bg-white rounded-xl border shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-3"><FiLayout className="w-6 h-6 mr-2 text-sky-600"/>2. Experimental Design</h3>
                            <p className="text-gray-600">To answer our research questions, we designed a remote experiment using a custom multiplayer Unity application with an MQTT backend. This allowed us to collect both quantitative (task performance) and qualitative (interview) data as users interacted with one of three voice models (Robotic, ChatGPT, Human) in a "Wizard of Oz" setup.</p>
                         </div>
                     </div>
                     <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white"></div>
                </div>

                {/* Step 3: Flow */}
                 <div className="md:flex items-center w-full">
                    <div className="md:w-1/2 md:pr-8">
                        <div className="p-6 bg-white rounded-xl border shadow-md">
                           <h3 className="text-xl font-bold flex items-center mb-3"><FiCode className="w-6 h-6 mr-2 text-slate-600"/>3. Software Flow</h3>
                           <p className="text-gray-600">Participants and proctors connected via unique codes. The proctor initiated the task, controlling voice prompts remotely based on participant requests ("pause", "repeat"). Task completion was verified by the proctor before proceeding to a post-study interview.</p>
                        </div>
                    </div>
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white"></div>
                </div>
            </div>
        </section>

        <section id="prototyping" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Design Evolution & Testing</h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                    {prototypes.map((p, index) => (
                        <motion.div key={p.name} whileHover={{y: -5}} className="cursor-pointer" onClick={() => handlePrototypeClick(index)}>
                          <div className="bg-white p-6 rounded-xl border shadow-sm transition-shadow hover:shadow-lg">
                              <h4 className="font-bold text-lg text-slate-800">{p.name}</h4>
                              <p className="text-gray-600 text-sm">{p.description}</p>
                          </div>
                        </motion.div>
                    ))}
                </div>
                 <div>
                    <AnimatePresence mode="wait">
                    <motion.img
                    key={prototypes[selectedPrototypeIndex].image}
                    src={prototypes[selectedPrototypeIndex].image}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=Image+Not+Found'; }}
                    alt={prototypes[selectedPrototypeIndex].name}
                    className="w-full h-auto rounded-xl shadow-2xl border-4 border-white cursor-pointer"
                    onClick={() => openModal(prototypes[selectedPrototypeIndex].image)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    />
          </AnimatePresence>
          <p className="text-center text-sm text-gray-500 mt-2">Click an image to enlarge.</p>
        </div>
            </div>
        </section>

        <section id="outcome" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Outcome & Final Conclusion</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl border">
                 <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Answering The Research Questions</h3>
                         <ul className="space-y-4">
                             <li><h4 className="font-semibold text-slate-800">1. Performance Differences?</h4><p className="text-sm text-gray-600">No. None of the performance metrics were statistically significant.</p></li>
                             <li><h4 className="font-semibold text-slate-800">2. Emotional Affinity?</h4><p className="text-sm text-gray-600">No. Users preferred AI agents for their precision and clarity.</p></li>
                             <li><h4 className="font-semibold text-slate-800">3. Link Between Affinity & Performance?</h4><p className="text-sm text-gray-600">Yes. The human voice was considered most difficult and had the highest performance variability.</p></li>
                         </ul>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Key Qualitative Findings</h3>
                         <div className="space-y-3">
                            <p className="text-gray-700 bg-green-50 p-3 rounded-md border border-green-200"><strong>Clarity &gt; Human-ness:</strong> The GPT agent was rated highest for understandability.</p>
                            <p className="text-gray-700 bg-purple-50 p-3 rounded-md border border-purple-200"><strong>Neutrality is a Feature:</strong> Task-centric voices allowed users to focus without social distractions.</p>
                         </div>
                     </div>
                 </div>
                 <div className="mt-8 bg-sky-600 text-white p-6 rounded-xl text-center">
                    <h3 className="text-2xl font-bold mb-2 flex items-center justify-center"><FiAward className="w-7 h-7 mr-2"/>Final Conclusion</h3>
                    <p className="max-w-prose mx-auto">For performance-based instructional tasks, investing heavily in making an AI voice more "human-like" is not a prominent factor for success. Users prioritize clarity, precision, and consistent pacing to complete their tasks effectively.</p>
                </div>
            </div>
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
          {selectedImage && (
            <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
              <motion.img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x900/1e293b/94a3b8?text=Image+Load+Error'; }} />
              <button onClick={closeModal} className="absolute top-4 right-4 text-white/80 text-5xl hover:text-white">&times;</button>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
