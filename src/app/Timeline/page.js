"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
      {
      title: "CS Workshop Series 2.0",
      content: (
        <div>
          <p className="mb-8 text-xs font-serif text-neutral-200 md:text-sm">
            The IEEE CS Workshop 2.0 series was a collection of sessions that enhanced student knowledge 
            in CP, DSA, Web Dev, AI/ML, AR/VR, and Open Source — empowering them with modern tech exposure.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/kodekurrentimage/ARVR.jpg" alt="AR/VR" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/kodekurrentimage/AIML.jpg" alt="AI/ML" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/kodekurrentimage/DSA.jpg" alt="DSA" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/kodekurrentimage/OPENSOURCE.jpg" alt="Open Source" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },

      {
      title: "KodeKurrent",
      content: (
        <div>
          <p className="mb-8 text-xs font-serif text-neutral-200 md:text-sm">
            KodeKurrent Season One Phase-2 was a 2-day offline hackathon designed to bring together creative minds, 
            tech enthusiasts, and problem solvers under one roof. The hackathon encouraged innovation and hands-on 
            collaboration across domains.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/workshopseries/IMG_2015.jpg" alt="KodeKurrent 1" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/workshopseries/IMG_0643.jpg" alt="KodeKurrent 2" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/workshopseries/IMG_2050.jpg" alt="KodeKurrent 3" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/workshopseries/IMG_2055.jpg" alt="KodeKurrent 4" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },

  
    {
      title: "Orientation",
      content: (
        <div>
          <p className="mb-4 text-xs font-serif text-neutral-200 md:text-sm">
            IEEE SB Orientation was an introductory event that familiarized students with our organization 
            and inspired enthusiasm for innovation, collaboration, and participation in tech-driven activities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/workshopseries/1000077230.jpg" alt="Orientation 1" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
            <img src="/workshopseries/1000077244.jpg" alt="Orientation 2" className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },


    {
      title: "RoboQuest 2025",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-serif text-neutral-200">
            Hello Everyone 👋  
            A big thank you to all participants for the overwhelming response and enthusiastic registrations for RoboQuest 2025!  
            We’re thrilled to see such interest from students across all years and branches.
            <br />
           
            Each team got to work on Line Follower & Obstacle Avoidance Robots. Thank you all for your enthusiasm — 
            we can’t wait to see your creativity in RoboQuest 2025!
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/roboquest/robo1.jpg"
              alt="RoboQuest Workshop"
              className="rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="/roboquest/robo2.jpg"
              alt="RoboQuest Teams"
              className="rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60 w-full"
            />
          </div> */}
        </div>
      ),
    },


    {
      title: "CodeNex",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-serif text-neutral-200">
            CodeNex was an exciting inter-college coding contest that pushed participants to the limit with logic-based, 
            data-structure-heavy, and real-world programming challenges. 
            The event encouraged collaboration and fast-paced problem solving.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/events/codenex1.jpg"
              alt="CodeNex event"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="/events/codenex2.jpg"
              alt="CodeNex contest"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
          </div> */}
        </div>
      ),
    },

    // 🟢 3️⃣ DEV WAVE
    {
      title: "DevWave",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-serif text-neutral-200">
            DevWave was a front-end and back-end development competition where participants created 
            web solutions to real-world problems. It fostered innovation, teamwork, and exposure to 
            the latest web technologies.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/events/devwave1.jpg"
              alt="DevWave coding event"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="/events/devwave2.jpg"
              alt="DevWave projects"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
          </div> */}
        </div>
      ),
    },

    // 🟢 4️⃣ ELECTRO WAVE
    {
      title: "ElectroWave",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-serif text-neutral-200">
            ElectroWave was an electrifying technical workshop focused on circuit design, 
            microcontrollers, and embedded systems. Participants gained hands-on experience 
            in building real hardware prototypes.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/events/electrowave1.jpg"
              alt="ElectroWave hands-on session"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="/events/electrowave2.jpg"
              alt="ElectroWave workshop"
              className="rounded-lg object-cover shadow-md h-20 md:h-44 lg:h-60 w-full"
            />
          </div> */}
        </div>
      ),
    },


  

 
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-[#404371] to-[#780831] overflow-clip py-10">
      <Timeline data={data} />
    </div>
  );
}
