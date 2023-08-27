"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am Abdul Rahaman, a highly motivated B.Tech CSE graduate with a strong foundation in programming languages like C, C++, and Python, complemented by web development skills in HTML, CSS, JavaScript, and React. My internship experience at Topnotch Solutions solidified my proficiency in web development technologies, while my involvement in cutting-edge projects like hand gesture-based virtual mouse control and deep learning-based medical image analysis demonstrates my commitment to innovation. I am a published author and a dedicated learner, constantly seeking self-improvement and new technological challenges. My blend of academic excellence, problem-solving abilities, and leadership skills make me an asset to any tech-driven organization looking for a dynamic and driven team member.
      </p>
    </motion.section>
  );
}
