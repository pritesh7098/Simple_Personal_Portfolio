import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-black">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Column - Photo & Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
            <img
              src="fardeen.jpg"
              alt="Profile"
              className="w-64 h-66 object-cover rounded-full shadow-lg border-4"
            />

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/pritesh7098"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
              About Me
            </h1>

            <div className="space-y-6">
              <p className="text-xl text-yellow-500">Thanks for stopping by! Here's a bit about me.</p>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Hello! I'm{" "}
                <span className="font-semibold text-sky-500 ">Pritesh Dhanad</span>,
                a passionate software developer based in Shirdi. With almost
                a year of experience in software development, I specialize in creating
                innovative and user-centric digital solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                My journey in technology is driven by the belief that great
                software can transform ideas into meaningful experiences. I
                combine technical expertise with creative problem-solving to
                build scalable, efficient, and elegant solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you'll find me playing cricket, reading books,
                or exploring the latest tech trends. I'm always excited to collaborate
                on interesting projects and connect with fellow developers.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Let's connect and create something amazing together!
              </p>
            </div>

            {/* Border before footer */}
            <div className=" border-t-2 border-gray-300 my-8 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
