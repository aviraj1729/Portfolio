import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Avi Raj", // Optional: your name
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Replace with your EmailJS public key
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="border-b border-neutral-900 dark:border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Get in touch
      </motion.h1>

      <div className="mx-auto max-w-3xl px-4">
        {/* Contact Info */}
        <div className="mb-12 flex flex-wrap justify-center gap-6 text-center">
          <motion.a
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            href={`tel:${CONTACT.phoneNo}`}
            className="flex items-center gap-2 text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {CONTACT.phoneNo}
          </motion.a>
          <motion.a
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {CONTACT.email}
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8">
            <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
              Send me a message
            </h2>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-3 text-black dark:text-white focus:border-neutral-500 dark:focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-3 text-black dark:text-white focus:border-neutral-500 dark:focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-3 text-black dark:text-white focus:border-neutral-500 dark:focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-3 text-black dark:text-white focus:border-neutral-500 dark:focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full rounded-lg bg-black/90 dark:bg-white/90 px-6 py-3 font-medium text-white dark:text-black transition-all hover:bg-black dark:hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="rounded-lg bg-green-100 dark:bg-green-900 p-4 text-green-800 dark:text-green-100">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-lg bg-red-100 dark:bg-red-900 p-4 text-red-800 dark:text-red-100">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
