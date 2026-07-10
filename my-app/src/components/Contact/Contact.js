import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on this field as user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus({ submitting: true, success: false, error: false });

    // TODO: Replace these placeholders with actual EmailJS keys from dashboard
    const SERVICE_ID = 'service_rrof4wb';
    const TEMPLATE_ID = 'template_k2e25n2';
    const PUBLIC_KEY = 'wEqtEwGWnua267xbd';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', subject: '', message: '' });
        setErrors({});
        setTimeout(() => {
          setStatus(s => ({ ...s, success: false }));
        }, 4000);
      }, (error) => {
        console.error('EmailJS Error:', error);
        setStatus({ submitting: false, success: false, error: true });
      });
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        className="flex flex-col lg:flex-row gap-16 items-start"
      >

        {/* Left Side: Contact Methods & Text */}
        <div className="flex-1 w-full text-left">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-offwhite mb-6">Let's Connect</h2>
          <p className="text-lg font-jakarta text-offwhite/80 mb-6 leading-relaxed">
            I'm currently seeking full-time Software Engineering roles starting <strong className="text-cyan">June 2026</strong>. Whether you have an opportunity or just want to chat about tech, I'd love to hear from you.
          </p>
          <div className="inline-block px-4 py-2 bg-slate/50 border border-green-500/30 text-green-400 font-jakarta text-sm font-semibold rounded-full mb-10">
            I typically respond within 24 hours.
          </div>

          <div className="flex flex-col gap-6">
            <a href="mailto:bkrishna@umd.edu" className="flex items-center gap-4 text-offwhite hover:text-cyan transition-colors group">
              <span className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-all">
                <FaEnvelope size={20} />
              </span>
              <div>
                <div className="font-outfit font-bold text-lg">Email</div>
                <div className="font-jakarta text-offwhite/60 text-sm">bkrishna@umd.edu (Preferred)</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/bkrishnanair" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-offwhite hover:text-cyan transition-colors group">
              <span className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-all">
                <FaLinkedin size={20} />
              </span>
              <div>
                <div className="font-outfit font-bold text-lg">LinkedIn</div>
                <div className="font-jakarta text-offwhite/60 text-sm">@bkrishnanair</div>
              </div>
            </a>

            <a href="https://github.com/bkrishnanair" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-offwhite hover:text-cyan transition-colors group">
              <span className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-all">
                <FaGithub size={20} />
              </span>
              <div>
                <div className="font-outfit font-bold text-lg">GitHub</div>
                <div className="font-jakarta text-offwhite/60 text-sm">@bkrishnanair</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="flex-1 w-full bg-slate/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-outfit text-sm text-offwhite/80 font-bold uppercase tracking-wider">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-400' : 'border-white/10'} p-4 rounded-xl text-offwhite font-jakarta focus:outline-none focus:border-cyan focus:bg-white/10 transition-colors`}
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-red-400 text-sm font-jakarta">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-outfit text-sm text-offwhite/80 font-bold uppercase tracking-wider">Subject</label>
              <input
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-offwhite font-jakarta focus:outline-none focus:border-cyan focus:bg-white/10 transition-colors"
                type="text"
                name="subject"
                placeholder="SWE Opportunity at Acme Corp"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-outfit text-sm text-offwhite/80 font-bold uppercase tracking-wider">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                className={`w-full bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/10'} p-4 rounded-xl text-offwhite font-jakarta focus:outline-none focus:border-cyan focus:bg-white/10 transition-colors resize-y`}
                name="message"
                placeholder="Hi Balakrishna..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="text-red-400 text-sm font-jakarta">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={status.submitting || status.success}
              className={`mt-4 px-8 py-4 w-full rounded-xl font-bold font-jakarta text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] cursor-pointer ${status.success ? 'bg-green-500 text-slate shadow-none cursor-default' : 'bg-cyan text-slate hover:bg-offwhite'}`}
            >
              {status.submitting ? 'Sending...' : status.success ? <><FaCheckCircle /> Sent Successfully</> : <>Send Message <FaPaperPlane /></>}
            </button>

            {status.error && (
              <p className="text-sm text-red-400 font-jakarta text-center mt-2">
                Oops, something went wrong. Please try again later or email directly.
              </p>
            )}

            <p className="text-xs text-offwhite/50 font-jakarta text-center mt-2">
              Protected by reCAPTCHA and subject to the Google Privacy Policy.
            </p>
          </div>
        </form>

      </motion.div>
    </section>
  );
};

export default Contact;