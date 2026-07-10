import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaServer, FaMapMarkedAlt, FaRobot, FaShieldAlt, FaGithub } from 'react-icons/fa';
import resumeData from '../../data/resume.json';
import heroVideo from './huddleshow/video.mp4';
import landingPage from './huddleshow/neraby happenings.jpg';
import createEvent from './huddleshow/join game.jpg';
import userProfile from './huddleshow/profile.jpg';

const showcaseData = resumeData.huddleShowcase;

const HuddleShowcase = () => {
  return (
    <section id="huddle" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column - Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-offwhite mb-6 leading-tight">
              {showcaseData.title.split(': ')[0]}: <span className="text-cyan">{showcaseData.title.split(': ')[1]}</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={showcaseData.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-slate font-bold font-jakarta rounded-full hover:bg-offwhite hover:text-cyan transition-colors shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                Live Demo <FiExternalLink />
              </a>
              <a href={showcaseData.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan text-cyan font-bold font-jakarta rounded-full hover:bg-cyan hover:text-slate transition-colors">
                Source Code <FaGithub />
              </a>
            </div>

            <div className="space-y-6 text-offwhite/80 font-jakarta leading-relaxed text-lg mb-10">
              {showcaseData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-outfit font-bold text-gold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {[
                  { icon: <FaServer className="text-2xl text-cyan" />, title: showcaseData.features[0].title, desc: showcaseData.features[0].desc },
                  { icon: <FaMapMarkedAlt className="text-2xl text-amber-400" />, title: showcaseData.features[1].title, desc: showcaseData.features[1].desc },
                  { icon: <FaRobot className="text-2xl text-purple-400" />, title: showcaseData.features[2].title, desc: showcaseData.features[2].desc },
                  { icon: <FaShieldAlt className="text-2xl text-green-400" />, title: showcaseData.features[3].title, desc: showcaseData.features[3].desc }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1">{feature.icon}</span>
                    <span className="font-jakarta text-offwhite/80 leading-relaxed">
                      <strong className="text-offwhite font-semibold">{feature.title}: </strong>{feature.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-outfit font-bold text-gold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {showcaseData.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-cyan text-sm font-jakarta font-medium rounded-full cursor-default"
                    whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Media */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black"
          >
            <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {[landingPage, createEvent, userProfile].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt={`Huddle Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HuddleShowcase;