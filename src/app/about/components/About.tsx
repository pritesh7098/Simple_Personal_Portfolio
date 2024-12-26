import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Column - Photo & Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
            <img
              src="fardeen.jpg"
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
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
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Hello! I'm{" "}
                <span className="font-semibold text-blue-500">Your Name</span>,
                a passionate software developer based in Your Location. With X
                years of experience in web development, I specialize in creating
                innovative and user-centric digital solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                My journey in technology is driven by the belief that great
                software can transform ideas into meaningful experiences. I
                combine technical expertise with creative problem-solving to
                build scalable, efficient, and elegant solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you'll find me [Your Hobbies/Interests].
                I'm always excited to collaborate on interesting projects and
                connect with fellow developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
