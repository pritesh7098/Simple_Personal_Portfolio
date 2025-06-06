"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";
import SimpleProjectCard from "@/components/SimpleProjectCard";

const ProjectCardList = () => {
  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Things I've Built 🚀 " />
      <SimpleProjectCard />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  // Devkings
  {
    logo: "/DevKings.png",
    title: "Devkings",
    description:
      "Devkings is a comprehensive service provider dedicated to empowering businesses through a wide range of technological solutions.",
    techStack: ["TypeScript", "NextJS", "Tailwind CSS"],
    link: "https://devkings.net/en/",
    source: "https://github.com/devKings-co/devkings.co",
  },
  //code canvas
  {
    logo: "/codify.png",
    title: "CodeCanvas",
    description:
      "CodeCanvas is a powerful and user-friendly platform designed to transform your code into stunning visual images effortlessly",
    techStack: [
      "JavaScript",
      "ReactJS",
      "Tailwind CSS",
      "NextUI",
      "Zustand",
      "Git",
    ],
    link: "https://code-canvas-eight-liart.vercel.app/",
    source: "https://github.com/pritesh7098/Code_Canvas",
  },
  // sargam
  {
    logo: "/guitar.png",
    title: "Sargam - Music-Academy-Project",
    description:
      "an innovative EdTech platform designed to bring the world of music education to your fingertips.",
    techStack: [
      "TypeScript",
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "Aceternity UI",
    ],
    link: "https://sargam-music-academy.vercel.app/",
    source: "https://github.com/pritesh7098/Sargam---Music-Academy-Project",
  },
  // book listing site
  {
    logo: "/book-1.png",
    title: "Book Listing Site",
    description:
      "Book Listing Site is a online platform where you can see wide range and veriety of books and you can buy them with an affiliate links, you can also see what are the customors review about the books and many more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://mybookly.netlify.app/",
    source: "https://github.com/pritesh7098/Book-Listing-Site",
  },
  // Medication rem app 
  {
    logo: "/medication.jpg",
    title: "Medication Reminder App",
    description:
      "designed to help users manage their medication schedules effectively. The application provides timely reminders and tracking capabilities to improve medication adherence",
    techStack: [
      "TypeScript",
      "React Ionic ",
      "Tailwind CSS",
      "NodeJS",
      "ExpressJS",
      "Postgress"
    ],
    link: "https://fardeen.tech",
    source: "https://github.com/pritesh7098/Simple_Personal_Portfolio",
  },
  // Portfolio
  {
    logo: "/f-1.png",
    title: "Personal-Portfolio",
    description:
      "A portfolio crafted and developed by me, showcasing my skills, projects, and passion for Software development",
    techStack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "MaterialUI",
    ],
    link: "https://fardeen.tech",
    source: "https://github.com/pritesh7098/Simple_Personal_Portfolio",
  },
];
