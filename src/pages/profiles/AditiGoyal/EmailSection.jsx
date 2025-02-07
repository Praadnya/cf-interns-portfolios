"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";


import GithubIcon from "../../../assets/Aditi/github-icon.svg";
import LinkedinIcon from "../../../assets/Aditi/linkedin-icon.svg";
import InstaIcon from "../../../assets/Aditi/insta-icon.svg";
import { Link } from "react-router-dom";

const Email = (templateParams, setEmailSubmitted) => {
  emailjs
    .send(
      "service_y58lqm9",
      "template_pdgs708",
      templateParams,
      "Zj05s_HpsytQ7xiqU"
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setEmailSubmitted(true); // Update the state when email is sent successfully
    })
    .catch((error) => {
      console.log("FAILED...", error);
    });
};

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

  const submitHandler = (e) => {
    e.preventDefault();
    Email(formData, setEmailSubmitted); // Pass setEmailSubmitted to the Email function
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/KumarSampurn">
            <img src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kumar-sampurn/">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/sampurn_singh/">
            <img src={InstaIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm md:mt-12 mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={submitHandler}>
            <div className="mb-6">
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
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
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
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
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
