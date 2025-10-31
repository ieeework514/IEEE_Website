"use client";
import React, { useState, useEffect } from "react";

import {
  Trophy,
  Users,
  Code,
  Wrench,
  Calendar,
  MapPin,
  ChevronRight,
  Target,
} from "lucide-react";

import RegistrationForm from "@/components/ui/RegistrationForm"; // your form

const UpcomingEventsDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Series");
  const [selectedEvent, setSelectedEvent] = useState(null); // track registering event

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { id: 1, icon: Trophy, number: "20+", label: "Events Conducted", gradient: "from-blue-500 to-purple-500" },
    { id: 2, icon: Users, number: "1000+", label: "Student Participants", gradient: "from-purple-500 to-pink-500" },
    { id: 3, icon: Code, number: "50K+", label: "Lines of Code", gradient: "from-pink-500 to-red-500" },
    { id: 4, icon: Wrench, number: "100+", label: "Projects Built", gradient: "from-red-500 to-orange-500" },
  ];

  const filters = [
    { name: "Competitions", icon: Code },
    { name: "Series", icon: Target },
    { name: "Workshops", icon: Users },
    { name: "Hackathons", icon: Trophy },
  ];

  const events = [
    {
      id: 1,
      category: "Series",
      date: "Every Sunday from 1 June to 27 July",
      title: "Dev Wave",
      description: "SkillUp Series 2.0 presents DevWave, an 8-week journey designed to transform you into a skilled full-stack web developer.",
      techStack: ["UI/UX Designing", "Frontend", "Backend", "MERN Stack"],
      registrations: "95+ registrations",
      location: "Online",
    },
    {
      id: 2,
      category: "Series",
      date: "Every Saturday from 1 June to 27 July",
      title: "Code Nex",
      description: "SkillUp Series 2.0 presents CodeNex, an 8-week competitive programming journey designed to elevate your problem-solving skills.",
      techStack: ["C++", "Logical Learning", "Dynamic Programming"],
      registrations: "93+ registrations",
      location: "Online",
    },
    {
      id: 3,
      category: "Series",
      date: "Every Saturday and Sunday from 1 June to 31 June",
      title: "ElectroWave",
      description: "ElectroWave by IEEE RAS RGIPT is a 4-weekend workshop series for EEE students to master circuit logic through simulation-based learning.",
      techStack: ["MATLAB", "LTSpice", "Arduino", "PCB design"],
      registrations: "93+ registrations",
      location: "Online",
    },
    {
      id: 4,
      category: "Competitions",
      date: "3rd November 2025 (Monday), 7:00 PM – 9:00 PM",
      title: "CODEQUEST 2025",
      description: "Gear up with your coding skills for CODEQUEST 2025, an exciting coding contest.",
      techStack: ["C++ Only"],
      registrations: "Seats are limited",
      location: "HackerRank",
    },
  ];

  const filteredEvents = events.filter((event) => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Upcoming </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Join our technical events and showcase your skills</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`group flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.name
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white"
                    : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:bg-gray-800/50"
                }`}
              >
                <Icon size={18} className="mr-2" />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition"
            >
              <div className="text-blue-400 flex items-center mb-3">
                <Calendar size={16} className="mr-2" /> {event.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {event.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-400 mb-3">{event.registrations}</div>
              <div className="text-pink-400 text-sm mb-6 flex items-center">
                <MapPin size={16} className="mr-2" /> {event.location}
              </div>

              {/* Register Button */}
              <button
                onClick={() => setSelectedEvent(event)}
                className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-center hover:opacity-90 transition"
              >
                Register Now <ChevronRight size={18} className="inline ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Registration Form Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
              <RegistrationForm eventTitle={selectedEvent.title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsDetails;
