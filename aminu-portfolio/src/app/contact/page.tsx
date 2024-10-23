"use client";
import { motion } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

// Define the environment variables and assert them as strings
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

const ContactPage: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  // Define the form reference with HTMLFormElement type
  const form = useRef<HTMLFormElement>(null);

  // Define the sendEmail function with FormEvent type
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          () => {
            setSuccess(true);
            form.current?.reset(); // Reset the form after success
          },
          () => {
            setError(true); // Handle error case
          }
        );
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👨‍💻😊
          </div>
        </div>
        {/* FORM CONTAINER */}
         <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col gap-3 bg-gray-50 p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto"
            >
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-2">Contact Gote-Dev</h2>
            
            {/* Name Input */}
            <label className="text-lg text-gray-600">Your Name</label>
            <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                required
            />

            {/* Email Input */}
            <label className="text-lg text-gray-600">Email Address</label>
            <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                required
            />

            {/* Message Textarea */}
            <label className="text-lg text-gray-600">Your Message</label>
            <textarea
                name="user_message"
                placeholder="Enter your message"
                rows={6}
                className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                required
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
            >
                Send Message
            </button>

            {/* Success/Error Messages */}
            {success && (
                <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
                </span>
            )}
            {error && (
                <span className="text-red-600 font-semibold">
                Something went wrong!
                </span>
            )}
            </form>

      </div>
    </motion.div>
  );
};

export default ContactPage;
