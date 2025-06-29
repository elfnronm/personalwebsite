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

  const handlePrototypeClick = (index) => setSelectedPrototypeIndex(index);

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
            A UX Research Study on AI Voice Agents in Instructional Contexts
          </p>
          <p className="text-lg text-sky-200/70 mt-4">Team: Dustin Chan, Ian Galendez, Abhayjit Sodhi, Elif Onem, Ryan Luk</p>
          <motion.a 
            href="#project-content" 
            onClick={(e) => { e.preventDefault(); handleNavClick('overview'); }} 
            className="mt-12 inline-block px-8 py-4 bg-sky-500 text-white font-bold rounded-xl shadow-lg hover:bg-sky-400 transition-transform hover:scale-105"
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
              <motion.div 
                key={index} 
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }}
              >
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
              <button 
                key={tab.id} 
                onClick={() => handleNavClick(tab.id)} 
                className={`px-4 md:px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-colors duration-300 ${activeTab === tab.id ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-sky-600 hover:border-sky-300'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main id="project-content" className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-24 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-8">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              AI voice agents are becoming increasingly lifelike, but does sounding more human actually help users perform better during complex tasks? Our research set out to answer this question by isolating the impact of voice tone—robotic, neutral, or human-like—on users' ability to complete step-by-step instructions.
            </p>
            
            <div className="bg-slate-100 p-6 rounded-xl my-8 text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Goal</h3>
              <p className="text-gray-700">
                We aimed to test whether clarity or human-likeness in AI voice agents better supports task success. Our system gave us full control over voice playback, task flow, and interface—enabling us to rigorously evaluate voice type performance and user preference.
              </p>
            </div>
            
            <div className="bg-slate-100 p-6 rounded-xl my-8 text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Problem</h3>
              <p className="text-gray-700">
                While AI voices are often designed for personality, little is known about their effectiveness for instructional tasks. Can a synthetic voice compete with a real human in helping people complete complex multi-step tasks?
              </p>
            </div>
            
            <div className="bg-slate-100 p-6 rounded-xl my-8 text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How Research Shifted Our Direction</h3>
              <p className="text-gray-700">
                Early attempts to use origami instruction via audio failed—the task was too complex to isolate voice impact. This led us to design a simplified but controlled digital task environment, enabling us to evaluate voices without interference from task complexity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center"><FiUsers className="mr-2"/> Role</h3>
                <p className="text-gray-600">UX Researcher / System Designer / Study Facilitator</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center"><FiFileText className="mr-2"/> Duration</h3>
                <p className="text-gray-600">8 Weeks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center"><FiLayout className="mr-2"/> Tools</h3>
                <p className="text-gray-600">Figma, Unity, Excel, GoStats.jar, MQTT, Framer Motion</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center"><FiCode className="mr-2"/> Skills</h3>
                <p className="text-gray-600">Wizard of Oz testing, ANOVA analysis, qualitative interviews, interface prototyping, mixed-method evaluation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="scroll-mt-24 py-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-12 text-center">Our Research Process</h2>
            
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Phase 1 – Ideation</h3>
              <h4 className="text-xl font-semibold text-slate-700 mb-3">Who Are We Designing For?</h4>
              <p className="text-gray-700 mb-4">
                Task-focused users learning via voice instructions. The context: digital instructions for physical tasks like origami or shape-matching.
              </p>
              
              <h4 className="text-xl font-semibold text-slate-700 mb-3">Early Explorations</h4>
              <p className="text-gray-700 mb-4">
                Our first prototype asked users to fold origami via audio. But we quickly found that the task complexity overwhelmed the ability to test voice clarity. This pivoted our direction.
              </p>
              <img
                src={`${base}/assets/origami_prototype.png`}
                alt="Origami Prototype"
                className="w-full rounded-xl shadow-lg mb-6"
              />
            </div>
            
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Phase 2 – System Design</h3>
              <p className="text-gray-700 mb-4">
                We designed a fully controlled Unity system with two interfaces:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-700 mb-6 space-y-2">
                <li><strong>User Interface:</strong> A 5x5 grid with draggable shapes in various colors.</li>
                <li><strong>Proctor Interface:</strong> A manual voice playback panel that allowed researchers to simulate AI voice control in real-time.</li>
              </ul>
              <p className="text-gray-700 mb-6">
                This "Wizard of Oz" method let us control every aspect of the interaction while simulating different AI agents.
              </p>
              
              {/* Big Images Side by Side */}
              <div className="flex flex-col md:flex-row justify-center gap-8 w-full my-8">
                {/* User Interface Image */}
                <div className="flex-1 flex flex-col items-center">
                  <img 
                    src={`${base}/assets/highFi_hci.png`}
                    alt="User's Interface"
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-xl"
                  />
                  <p className="text-center text-lg font-medium text-slate-700 mt-4">User's Interface</p>
                </div>

                {/* Proctor Interface Image */}
                <div className="flex-1 flex flex-col items-center">
                  <img 
                    src={`${base}/assets/proctorUi_hci.png`}
                    alt="Proctor's Interface"
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-xl"
                  />
                  <p className="text-center text-lg font-medium text-slate-700 mt-4">Proctor's Interface</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Research Questions</h4>
                <ul className="list-disc list-inside pl-4 text-blue-900 space-y-2">
                  <li>How do different AI voice tones affect task success in instructional contexts?</li>
                  <li>Do users prefer human-like voices, or do they value clarity and consistency more?</li>
                  <li>Can synthetic voices rival human guidance in complex digital environments?</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Phase 3 – Prototyping</h3>
              <p className="text-gray-700 mb-4">
                We iterated through several fidelity levels:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-700 mb-6 space-y-2">
                <li><strong>Low-Fidelity Wireframes:</strong> Sketches to define core layout and flow</li>
                <li><strong>Mid-Fidelity Prototype:</strong> Figma prototype to test control panel logic</li>
                <li><strong>High-Fidelity Interface:</strong> Unity implementation of the grid, shapes, and instruction playback</li>
              </ul>
              <p className="text-gray-700">
                Each prototype focused on clarity of task flow, audio pacing, and researcher control.
              </p>
            </div>
            
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Phase 4 – Evaluation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Participants</h4>
                  <p className="text-gray-700 mb-4">15 students (ages 18–29)</p>
                  
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Design</h4>
                  <p className="text-gray-700 mb-2">Between-subjects experiment with 3 voice conditions:</p>
                  <ul className="list-disc list-inside pl-4 text-gray-700 space-y-1">
                    <li>Human</li>
                    <li>Robotic</li>
                    <li>ChatGPT Neutral (Ember)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Data Collected</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700 space-y-2">
                    <li>Quantitative data: completion times, error rates, number of replays</li>
                    <li>Qualitative data: interviews, open-ended feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototyping Section */}
        <section id="prototyping" className="scroll-mt-24">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-12 text-center">Design Evolution & Testing</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              {prototypes.map((p, index) => (
                <motion.div
                  key={p.name}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => handlePrototypeClick(index)}
                >
                  <div className="bg-white p-6 rounded-xl border shadow-sm transition-shadow hover:shadow-lg">
                    <h4 className="font-bold text-lg text-slate-800">{p.name}</h4>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative h-96 lg:h-auto min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={prototypes[selectedPrototypeIndex].image}
                  className="absolute inset-0 bg-cover bg-center rounded-xl shadow-2xl border-4 border-white cursor-pointer"
                  style={{ backgroundImage: `url(${prototypes[selectedPrototypeIndex].image}), url('https://placehold.co/600x450/e2e8f0/94a3b8?text=Image+Not+Found')` }}
                  onClick={() => openModal(prototypes[selectedPrototypeIndex].image)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500 bg-white bg-opacity-75 px-3 py-1 rounded">
                Click an image to enlarge.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section id="outcome" className="scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-12 text-center">Outcome & Final Conclusion</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Key Findings</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Quantitative Results</h4>
                  <p className="text-gray-700 mb-4">
                    No statistical difference in performance (ANOVA)
                  </p>
                  <p className="text-gray-700 mb-4">
                    Participants preferred the clearest, most neutral voice
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Qualitative Insights</h4>
                  <p className="text-gray-700 mb-4">
                    Human voices were often rated as less understandable
                  </p>
                  <p className="text-gray-700">
                    Robotic voices were less engaging but more predictable
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Answer</h4>
                <p className="text-gray-700">
                  Our study found no statistically significant performance differences between voice types—but participants overwhelmingly preferred the clearest voice (ChatGPT's neutral tone). Human-like voices often introduced inconsistencies, while robotic voices felt impersonal.
                </p>
              </div>
            </div>
            
            <div className="bg-sky-600 text-white p-8 rounded-2xl shadow-xl mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Impact</h3>
              <p className="text-lg mb-4">
                Our findings suggest AI voices used for instruction should prioritize clarity and pacing over personality. This has major implications for voice interfaces in education, training, and task-based digital experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Reflections & Takeaways</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Build What You Can Control</h4>
                  <p className="text-gray-700">
                    Our own system let us manipulate every variable. This was critical for isolating the voice impact.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Real Voices ≠ Better Experience</h4>
                  <p className="text-gray-700">
                    Human tone doesn't always translate into clarity. Simplicity and pacing often matter more.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">Adapt to Your Audience</h4>
                  <p className="text-gray-700">
                    We designed the UI for remote testing, accessibility, and ease of voice mapping.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h4 className="text-xl font-semibold text-purple-800 mb-3">Future Work</h4>
                <ul className="list-disc list-inside pl-4 text-purple-900 space-y-2">
                  <li>Automating data collection to reduce proctor burden</li>
                  <li>Testing adaptive voices that change based on user behavior</li>
                  <li>Expanding the study to include different age groups and multilingual voice agents</li>
                  <li>Incorporating multitasking or distraction factors to better simulate real-world use</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={closeModal}
          >
            <motion.img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.8 }} 
              onClick={(e) => e.stopPropagation()} 
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x900/1e293b/94a3b8?text=Image+Load+Error'; }} 
            />
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white/80 text-5xl hover:text-white"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}