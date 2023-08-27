import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap , LuWorkflow} from "react-icons/lu";
import { Briefcase, GraduationCap } from 'lucide-react';
import TTT from "@/public/tictactoe.png";
import rpg from "@/public/rpg.png";
import Todo from "@/public/Todo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Topnotch Solutions Vizag",
    description:
      "Created a sophisticated mail server as part of a college internship project, utilizing HTML, CSS, JavaScript, PHP, and Bootstrap.",
    icon: React.createElement(Briefcase),
    date: "Nov 2022-Mar 2023",
  },
  {
    title: "Trainee",
    location: "ContentQL, Hyderbad",
    description:
      "I'm now a trainee full-stack developer working. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(Briefcase),
    date: "Jun 2023 - present",
  },
  {
    title: "Bachelor of Technology",
    location: "GMR, Rajam",
    description:
      "CGPA-7.9",
    icon: React.createElement(GraduationCap),
    date: "Jun 2023 - present",
  },

 
] as const;

export const projectsData = [
  {
    title: "TODO-APP",
    description:
      "A sleek task manager with real-time updates, categories, and a user-friendly interface for efficient task management.",
    tags: ["React", "Strapi","Chakra UI"],
    imageUrl: Todo,
  },
  {
    title: "TIC TAC TOE Game",
    description:
      "Tic-Tac-Toe Challenge is a classic, yet thrilling, two-player game that tests your strategic wit. ",
    tags: ["React", "Chakra UI"],
    imageUrl: TTT,
  },
  {
    title: "Random Password Generator",
    description:
      "The Random Password Generator is your go-to tool for creating highly secure and unique passwords. With adjustable settings, it ensures your online accounts are shielded against cyber threats. ",
    tags: ["React", "Chakra UI"],
    imageUrl: rpg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
