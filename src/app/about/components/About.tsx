import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Elegant Header with Gradient Underline */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-4">
            The Human Behind the Code 👨‍💻
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Content Section with Elegant Typography */}
        <div className="space-y-6">
          <p className="text-2xl font-light text-blue-400">
            Who Transforming <span className="font-medium">complex challenges</span> into <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">elegant solutions</span> through code.
          </p>

          <p className="text-xl leading-relaxed">
            I'm{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pritesh Dhanad
            </span>
            , a <span className="font-medium text-blue-300">software developer</span> based in Pune, dedicated to crafting <span className="font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">exceptional digital experiences</span>. With a foundation in modern web technologies and a year of hands-on experience, I specialize in building innovative solutions that bridge the gap between user needs and technical excellence.
          </p>

          <div className="space-y-5 text-gray-300">
            <p className="text-lg leading-relaxed">
              I previously worked as a <span className="font-medium text-white">Frontend Developer</span> in the EdTech sector and startup ecosystem, where I discovered my passion for <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">teaching and mentoring</span>. This naturally led me to become a <span className="font-medium text-white">Web Development Trainer</span> at NIIT Foundation, one of India's leading educational organizations. My technical expertise spans across the <span className="font-medium text-blue-300">full stack</span>, with a particular focus on <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">React, TypeScript, and modern JavaScript</span> frameworks. I have a proven track record of delivering responsive, scalable applications that meet both user needs and business objectives.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond the world of coding, I maintain a <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">holistic approach</span> to personal and professional growth. As an avid <span className="font-medium text-white">cricket enthusiast</span>, I've learned valuable lessons about teamwork and strategy that I bring to my development projects. My passion for <span className="font-medium text-blue-300">reading</span> keeps me informed about industry trends and innovations, while my continuous exploration of <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">new technologies</span> ensures I stay at the forefront of digital evolution.
            </p>

            <p className="text-lg font-medium text-white mt-8 border-l-4 border-blue-500 pl-4">
              I'm always open to discussing <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">new projects</span>, innovative ideas, or potential <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">collaborations</span>. Let's connect and explore how we can create impactful digital solutions together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;