import { motion } from "framer-motion";

const Resources = () => {
  const sections = [
    {
      id: "notes",
      number: "01",
      title: "📄 Handwritten Notes & PDFs",
      description: "Download essential notes and PDFs for placement preparation.",
      content: (
        <ul className="list-disc pl-6 text-gray-300">
          <li><a href="/path-to-note1.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-400">Aptitude Notes</a></li>
          <li><a href="/path-to-note2.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-400">DSA Cheat Sheet</a></li>
        </ul>
      ),
    },
    {
      id: "ats-resume",
      number: "02",
      title: "📄 ATS Resume Template (Overleaf)",
      description: "Get an ATS-friendly resume template designed in LaTeX.",
      content: (
        <p>
          Download the free ATS resume template. <br />
          👉 <a href="https://www.overleaf.com/latex/templates/ats-friendly-resume-template/qrfwhsqxfqmc" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-semibold">Get Template</a>
        </p>
      ),
    },
    {
      id: "alumni",
      number: "03",
      title: "🎓 Alumni Success Stories",
      description: "Read how students secured top jobs in leading companies.",
      content: (
        <div>
          <p className="text-pink-400">🌟 Rahul (TCS) - "Trident's training helped me ace my interview!"</p>
          <p className="text-pink-400">🌟 Priya (Infosys) - "The placement resources made preparation easier."</p>
        </div>
      ),
    },
    {
      id: "videos",
      number: "04",
      title: "📹 Video Resources",
      description: "Watch curated videos to improve your placement skills.",
      content: (
        <ul className="list-disc pl-6 text-gray-300">
          <li><a href="https://www.youtube.com/watch?v=XYZ123" target="_blank" rel="noopener noreferrer" className="text-pink-400">Aptitude Crash Course</a></li>
          <li><a href="https://www.youtube.com/watch?v=ABC456" target="_blank" rel="noopener noreferrer" className="text-pink-400">DSA Interview Tips</a></li>
        </ul>
      ),
    },
    {
        id: "companies",
        number: "05",
        title: "🏢 Company-wise Preparation",
        description: "Find resources for specific company interviews.",
        content: (
          <ul className="list-disc pl-6 text-gray-300">
            <li><a href="/tcs-prep.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-400">TCS NQT Guide</a></li>
            <li><a href="/infosys-prep.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-400">Infosys Coding Topics</a></li>
          </ul>
        ),
      },
      {
        id: "forum",
        number: "06",
        title: "💬 Discussion Forum",
        description: "Join our discussion forum and connect with peers.",
        content: (
          <p>
            📌 Join our <a href="https://discord.gg/example" className="text-pink-400">Placement Discussion Forum</a>
          </p>
        ),
      },
  ];

  return (
    <div className="p-6 pt-40 max-w-6xl mx-auto md:mt-6">
      <motion.h2 
        className="text-2xl sm:mt-6 font-semibold text-center text-black sm:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📚 Placement Resource Hub
      </motion.h2>
      <motion.p 
        className="text-center mt-2 text-gray-950 sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Find all the essential resources to ace your placements!
      </motion.p>

      {/* Grid Layout */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(({ id, number, title, description, content }) => (
          <motion.div 
            key={id} 
            className="p-6 rounded-xl bg-gray-950 relative shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: parseInt(number) * 0.1 }}
          >
            {/* Glowing Number Box */}
            <motion.div 
              className="grid size-8 grid-cols-1 grid-rows-1 place-content-center font-mono text-xs font-semibold text-gray-950"
              whileHover={{ scale: 1.2 }}
            >
              <div className="col-start-1 row-start-1 grid place-content-center">
                <div className="h-8 w-6 bg-gray-950"></div>
              </div>
              <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">{number}</div>
            </motion.div>

            {/* Section Header & Description */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-full">
                <h4 className="mb-2 text-sm font-semibold text-slate-200 sm:text-base">{title}</h4>
                <p className="text-gray-400 text-sm sm:text-base">{description}</p>
              </div>

              {/* Glowing Card Effect */}
              <motion.div 
                className="w-full relative mt-4"
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-700 to-purple-600 rounded-xl blur opacity-75"></div>
                <div className="relative rounded-xl bg-gray-900 p-4 text-gray-300 text-sm sm:text-base">
                  {content}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
