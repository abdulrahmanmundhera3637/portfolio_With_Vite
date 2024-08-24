import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  // State variables for subscription form
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Handle Subscription Form Submission
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!subscribeEmail) {
      toast.error("Please provide an email address");
      return;
    }

    setIsSubscribing(true);
    try {
      const response = await axios.post("http://localhost:8080/api/subcribe-email", {
        email: subscribeEmail,
      });

      if (response.data.msg) {
        toast.success(response.data.msg);
        setSubscribeEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing email:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abdul Rahman</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Pakistan, specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg transform transition-transform duration-300 hover:scale-105"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Abdul Rahman. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/profile.php?id=100056956593019&mibextid=ZbWKwL" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/abdul-rahman-216a802bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abdulrahmanmundhera3637" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  );
};

export default Footer;
