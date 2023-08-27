"use client"
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from 'emailjs-com';
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { ref } = useSectionInView("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send('service_uouany4', 'template_x5vzmsc', formData, '_M-8VgbrEe6KhNsYM')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success('Email sent successfully');
      })
      .catch((error) => {
        console.error('Email sent failed:', error);
        toast.error('Email not sent');
      });

    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-screen-md mx-auto text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          36rahaman@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form onSubmit={(e) => handleSubmit(e)} className="mt-6 space-y-4">
        <div className="flex flex-col">
          <input
            className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
            name="from_name"
            value={formData.from_name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            required
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
            name="from_email"
            value={formData.from_email}
            onChange={(e) => handleInputChange(e)}
            type="email"
            required
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            className="h-40 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
            name="message"
            value={formData.message}
            onChange={(e) => handleTextAreaChange(e)}
            placeholder="Your Message"
            required
          />
        </div>
        <div className="flex justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
