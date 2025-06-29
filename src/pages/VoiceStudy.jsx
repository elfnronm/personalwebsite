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
        <section id="overview" className="scroll-mt-24 py-28 bg-[#f9fafb]"> {/* exact bg match */}
  <div className="max-w-4xl mx-auto text-center bg-[#f9fafb] px-6 py-16 rounded-xl">
    <h2 className="text-5xl font-extrabold text-slate-900 mb-10">Overview</h2> {/* more space here with mb-10 */}
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      As AI voice agents like ChatGPT’s Advanced Voice Mode become increasingly lifelike, we began to ask an important question: <br />
        Does sounding human actually help people perform tasks better or does clarity matter more than personality when following instructions?
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      This led us to explore how different voice types robotic, human-like, and neutral impact a user’s ability to complete a multi-step task.<br />
      Can a synthetic voice be just as effective, or even better, than a real human voice when it comes to guiding users through complex processes?
    </p>
  </div>
</section>


       <section id="process" className="scroll-mt-24 py-28 bg-[#f9fafb] text-center">
  <div className="max-w-3xl mx-auto px-4">
    {/* Title */}
   <h2 className="text-5xl font-extrabold text-slate-900 mb-10">Our Research Process</h2> {/* more space here with mb-10 */}


    {/* Step 1 */}
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-slate-800 flex justify-center items-center mb-4">
         Ideation and Early Exploration
      </h3>
      <p className="text-gray-700 mb-4">
        In early brainstorming sessions, we proposed different types of tasks the AI could guide users through.
        Our first idea? Origami. We imagined testing whether participants could follow audio-only instructions
        to fold a paper figure step by step.
      </p>
      <p className="text-gray-700 mb-4">
        But testing this showed us the limits of complexity. Following origami directions purely by sound
        was too difficult. It failed to isolate voice clarity from task complexity.
      </p>
                <img
            src={`${base}/assets/origami_prototype.png`}
            alt="Origami Prototype"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg mb-8"
            />
      <p className="text-gray-700">
        That failure led us to a breakthrough: let’s build our own simplified digital environment—
        one that gives us full control over variables and lets us test the voices fairly.
      </p>
    </div>

    {/* Step 2 */}
    <div className="mb-20">
  <h3 className="text-2xl font-bold text-slate-800 flex justify-center items-center mb-4">
    Designing the Apparatus
  </h3>

  <p className="text-gray-700 mb-4">
    We created a custom Unity application with two interfaces: one for the participant, and one for the
    proctor controlling the AI voice instructions behind the scenes.
  </p>
  <p className="text-gray-700 mb-4">
    The participant UI featured a 5×5 grid and movable shapes of various colors and types.
    Their goal was to place the shapes according to a 25-step instruction set, guided entirely by voice.
  </p>
  <p className="text-gray-700 mb-8">
    Meanwhile, the proctor could control which clip played, skip instructions, restart, or pause.
    This enabled us to simulate a Wizard of Oz–style setup while keeping the illusion of an AI voice agent.
  </p>

  {/* Big Images Side by Side */}
  <div className="flex flex-row justify-center gap-8 w-full">
    {/* User Interface Image */}
    <div className="flex flex-col items-center">
      <img 
        src={`${base}/assets/highFi_hci.png`}
        alt="User's Interface"
        className="max-h-[100vh] w-auto object-contain"
      />
      <p className="text-center text-lg font-medium text-slate-700 mt-2">User's Interface</p>
    </div>

    {/* Proctor Interface Image */}
    <div className="flex flex-col items-center">
      <img 
        src={`${base}/assets/proctorUi_hci.png`}
        alt="Proctor's Interface"
        className="max-h-[70vh] w-auto object-contain"
      />
      <p className="text-center text-lg font-medium text-slate-700 mt-2">Proctor's Interface</p>
    </div>
  </div>
</div>


    {/* Step 3: Literature Review */}
<div className="mb-20">
  <h3 className="text-2xl font-bold text-slate-800 flex justify-center items-center mb-4">
    🔍 Literature Review
  </h3>
  <p className="text-gray-700 mb-4">
    Before building the system, we grounded our curiosity in existing research. We looked into studies on AI voice tone, fidelity, personalization, and pacing—many of which focused on entertainment, meditation, or simple decision-making tasks.
  </p>
  <p className="text-gray-700 mb-4">
    However, we noticed a gap: few papers explored how voice types affect users performing complex, step-by-step tasks. Most interfaces were evaluated in static or non-instructional contexts.
  </p>
  <p className="text-gray-700">
    That insight shaped our direction. We decided to create a task environment that emphasized clarity, focus, and performance—and tested how voice qualities influenced user outcomes in instructional workflows.
  </p>
</div>




  </div>
</section>




        {/* Prototyping Section */}
<section id="prototyping" className="scroll-mt-24">
  <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Design Evolution & Testing</h2>
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
    {/* Image section modified for background cover */}
    <div className="relative h-96 lg:h-auto min-h-[450px]"> {/* Added relative and height for the container */}
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Outcome & Final Conclusion</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">🧪 Research Setup</h3>
                <p className="text-gray-600 mb-4">
                  With the system ready, we recruited 15 participants from York University, matching the target demographic for AI voice users (ages 18–29). We used a between-subjects design, assigning each participant one of three voice types:
                </p>
                <ul className="list-disc list-inside pl-4 text-gray-600 space-y-2 mb-4">
                  <li><strong>Human Voice</strong> – instructional, natural tone</li>
                  <li><strong>ChatGPT Advanced Voice (Ember)</strong> – friendly and clear</li>
                  <li><strong>Robotic Voice</strong> – flat and machine-like</li>
                </ul>
                <p className="text-gray-600">
                  Each participant completed the task, and we collected both quantitative (repeats, stops, time, errors) and qualitative data (interviews and post-task feedback).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Key Findings</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800">Quantitative Results (via ANOVA):</h4>
                    <p className="text-gray-600 text-sm">
                      No statistically significant performance differences were found between the voice types—but trends told another story:
                    </p>
                    <ul className="list-disc list-inside pl-4 text-gray-600 text-sm mt-1 space-y-1">
                      <li>The GPT voice had the fewest errors and the most consistent performance.</li>
                      <li>The Human voice had the most failures, longest times, and highest variance.</li>
                      <li>The Robotic voice fell somewhere in between.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Qualitative Insights:</h4>
                    <p className="text-gray-600 text-sm">
                      Participants consistently noted that clarity and consistency mattered more than personality. Surprisingly, many found the human voice harder to follow due to mispronunciations and unpredictable pacing.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 mt-2">
                      <p className="text-sm italic text-gray-700">"It was clear, but a bit too fast—I felt like I had to rush."</p>
                      <p className="text-sm italic text-gray-700 mt-1">"I liked how robotic it sounded. It didn't distract me."</p>
                      <p className="text-sm italic text-gray-700 mt-1">"The human voice had weird pauses that made me lose focus."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-sky-600 text-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center"><FiAward className="w-7 h-7 mr-2"/>💡 Reflections and Impact</h3>
              <p className="max-w-prose mx-auto">
                This project taught us the importance of isolating variables when testing interaction methods. Our decision to build a custom Unity system allowed us to simulate real-world AI interactions while controlling every part of the experience.
              </p>
              <p className="max-w-prose mx-auto mt-3">
                In instructional contexts, clarity and neutrality appear to outweigh the emotional engagement that human-like voices try to offer. Our findings support the idea that AI doesn't need to sound human—it just needs to be understood.
              </p>
            </div>
            
            <div className="mt-8 bg-gray-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-3">📚 Tools, Methods & Skills</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700">Research Methods:</h4>
                  <p className="text-gray-600 text-sm">Literature review, Wizard of Oz testing, thematic analysis, ANOVA statistics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Tools Used:</h4>
                  <p className="text-gray-600 text-sm">Figma, Unity, MQTT networking, Excel (for data coding), Go.Stats.jar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Study Type:</h4>
                  <p className="text-gray-600 text-sm">Between-subjects, remote testing, mixed-methods</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Participants:</h4>
                  <p className="text-gray-600 text-sm">15 university students (ages 18–29)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-3">🔭 Future Work</h3>
              <ul className="list-disc list-inside pl-4 text-purple-900/80 space-y-1">
                <li>Automating data collection to reduce proctor burden</li>
                <li>Testing adaptive voices that change based on user behavior</li>
                <li>Expanding the study to include different age groups and multilingual voice agents</li>
                <li>Incorporating multitasking or distraction factors to better simulate real-world use</li>
              </ul>
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