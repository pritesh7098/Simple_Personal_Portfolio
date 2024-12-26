"use client";
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { GithubGraph } from "@/components/ui/github";
import Title from "@/components/ui/Title";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0"
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Avatar />
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
            >
              Hi, I&apos;m Pritesh Dhanad👋
            </h1>

            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              "Passionate Software Developer with a proven ability to solve
              complex problems through elegant and efficient code. I specialize
              in building high-quality, scalable applications across diverse
              platforms using cutting-edge technologies."
            </h1>
          </div>
          <div className="mt-10">
            <RainbowButton>
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-20 max-lg:mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
        <Title title="GitHub Contributions" />
        <Link href={"https://github.com/pritesh7098"} target="_blank">
          <GithubGraph
            username="pritesh7098"
            blockMargin={2}
            colorPallete={[
              "#1e1e2f",
              "#5a3e7a",
              "#7e5aa2",
              "#a87cc3",
              "#d9a9e6",
            ]}
          />
        </Link>
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Experience
          company_link={"https://x.com/fardeen14693425"}
          company_logo={"/Academor.jpg"}
          company_name={"ACADEMOR EDTECH PRIVATE LIMITED"}
          duration={"Jan 2024 - Mar 2024"}
          job_title={"Frontend Developer Intern"}
          description={
            "Gained comprehensive frontend development experience through internship focused on UI development and user experience optimization. Mastered the art of pixel-perfect implementation while building responsive, cross-platform web applications. Enhanced problem-solving abilities through real-world project challenges and collaborative development environments."
          }
        />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Education
          institute_link={"https://www.kkwagh.edu.in/engineering/"}
          institute_logo={"/kk.png"}
          course_title={"Master's In Computer Applications"}
          ending_date={" Nov-2022 - June 2024"}
          institute_name={
            "K.K. Wagh Institute of Engineering Education and Research."
          }
          location={"Nashik, Maharashtra"}
          description={
            "Recent Master's in Computer Applications graduate with Grade A distinction, specializing in Software Development. Academic coursework concentrated on diverse programming languages, web technologies, and software development methodologies. Strong foundation in both theoretical concepts and practical applications of modern development tools and frameworks."
          }
        />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
