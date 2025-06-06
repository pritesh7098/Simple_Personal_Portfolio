"use client";

import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import { Link } from "@radix-ui/themes";
import { I_Coursework } from "@/types/project";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import Title from "./ui/Title";
import { useDarkMode } from "@/hooks/useDarkMode";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Coursework = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="Key Courses 🎯" />

      <span className="mt-2"></span>
      {data.map((course, idx) => (
        <MagicCard
          key={idx}
          className="cursor-pointer dark:shadow-2xl h-fit mt-2 !bg-transparent border-none"
          gradientColor={`${
            isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"
          }`}
        >
          <div className="flex !justify-between w-[50vw] max-lg:w-full max-sm:w-full px-5 max-sm:px-0 py-3">
            <div className="w-full flex">
              <div className="w-24 h-12 flex justify-center">
                <Link href={course.course_link} target="_blank">
                  <Image
                    src={course.course_company_logo}
                    alt="100xdevs"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </Link>
              </div>
              <div className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <div
                      className={`max-lg:w-[68vw] w-full flex justify-between max-[350px]:justify-start ${bricolage_grotesque}`}
                    >
                      <AccordionTrigger>
                        <h2 className="text-base max-sm:text-[15px] font-semibold text-start">
                          {course.course_title}
                        </h2>
                      </AccordionTrigger>
                      <span className="text-xs max-sm:text-[10px] max-sm:hidden pr-1">
                        {course.duration}
                      </span>
                    </div>
                    <p className={`text-sm max-sm:text-xs ${inter}`}>
                      {course.course_company_name}{" "}
                    </p>
                    <AccordionContent className="mt-2 max-sm:text-[11px]">
                      {course.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default Coursework;

const data: I_Coursework[] = [
  {
    course_link: "https://app.100xdevs.com/",
    course_company_logo: "/100xdevs.jpeg",
    course_title: "Full Stack + DevOps",
    duration: "Aug 2024 - March 2025",
    course_company_name: "100xdevs",
    description:
      "In this cohort, I expanded my Full Stack Development skills by diving into DevOps and Web technologies. Led by Harkirat Singh, the course covered CI/CD, cloud infrastructure, and end to end web applications development. It provided hands-on experience with advanced tools and techniques, enhancing my proficiency in modern development practices.",
  },
  {
    course_link: "https://www.codehelp.in/",
    course_company_logo: "/codehelp.png",
    course_title: "MERN Stack Development",
    duration: "Nov 2022 - Jun 2023",
    course_company_name: "Codehelp",
    description:
      "It was an comprehensive MERN Stack program that covers the entire development process, from building responsive front-end applications to managing back-end services and databases. Through this course, I mastered essential web development technologies, including MongoDB, Express.js, React.js, and Node.js. The curriculum also focused on creating full-stack applications, RESTful APIs, state management with Redux, and integrating databases for dynamic content.",
  },
  {
    course_link:
      "https://learning.sap.com/certifications?page=1&url_id=banner-tshop-alert-certification-redirects",
    course_company_logo: "/SAP.png",
    course_title:
      "SAP Certified Development Associate",
    duration: "Dec 2021 - Sep 2022",
    course_company_name: "SAP",
    description:
      "Successfully completed SAP Certified Development Associate certification in ABAP with SAP NetWeaver 7.50, demonstrating mastery of core ABAP programming concepts and SAP NetWeaver framework. Achieved distinction with 86% score in the global certification examination while gaining valuable hands-on development experience through SAP student internship.",
  },
];
