"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../assets/Aditi/github-icon.svg";
import LinkedinIcon from "../../../assets/Aditi/linkedin-icon.svg";
import InstaIcon from "../../../assets/Aditi/insta-icon.svg";
import { Link } from "react-router-dom";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email with params:", formData);

    emailjs
      .send(
        "service_bi01g5s", // Your Service ID
        "template_4yvepmt", // Your Template ID
        {
          to_name: "Aditi", // Dynamic if needed
          from_name: formData.name, // Corrected value
          message: formData.message,
          reply_to: formData.email,
        },
        "tyx2MU4IGlUBgazS1" // Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailSubmitted(true);

        // Reset form fields
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });

    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-16 md:my-20 py-20 px-6 md:px-12 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10 space-y-4">
        <h5 className="text-2xl font-bold text-white">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link to="https://github.com/aditigoyal291/">
            <img src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/aditi-goyal29/">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link to="https://www.instagram.com/aditi_._29/">
            <img src={InstaIcon} alt="Insta Icon" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm md:mt-12 mt-4 animate-fadeIn">
            ✅ Email sent successfully! The form will reappear shortly...
          </p>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="jacob@google.com"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Let's talk about..."
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
