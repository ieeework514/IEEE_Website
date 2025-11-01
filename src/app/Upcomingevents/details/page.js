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
  Info,
} from "lucide-react";

import RegistrationForm from "@/components/ui/RegistrationForm"; // your form

const UpcomingEventsDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Competitions");
  const [selectedEvent, setSelectedEvent] = useState(null); // registration form modal
  const [detailEvent, setDetailEvent] = useState(null); // details modal

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      id: 1,
      icon: Trophy,
      number: "20+",
      label: "Events Conducted",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      icon: Users,
      number: "1000+",
      label: "Student Participants",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      icon: Code,
      number: "50K+",
      label: "Lines of Code",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 4,
      icon: Wrench,
      number: "100+",
      label: "Projects Built",
      gradient: "from-red-500 to-orange-500",
    },
  ];

  const filters = [
    { name: "Competitions", icon: Code },
    { name: "Hackathons", icon: Trophy },
    { name: "Series", icon: Target },
    { name: "Workshops", icon: Users },
  ];

  const events = [
    {
      id: 1,
      category: "Competitions",
      date: "3rd November 2025 (Monday), 7:00 PM – 9:00 PM",
      title: "CODEQUEST 2025",
      description:
        "Gear up with your coding skills for CODEQUEST 2025, an exciting coding contest hosted on HackerRank.",
      techStack: ["C++ Only"],
      registrations: "Seats are limited",
      location: "HackerRank",
      details: `
Organized by IEEE RGIPT SB

Finally! The wait is over…Gear up with your coding skills for the most exciting and brain-challenging contest - CODEQUEST 2025.
The event is hosted on HackerRank, where the best minds battle it out for glory and a golden opportunity!

🏆 The top 5 contenders will earn an exclusive entry to IIT Bombay TECHFEST 2025, one of India’s biggest and most prestigious technology festivals.

Event Details:
Date: 3rd November 2025 (Monday)
Time: 7:00 PM – 9:00 PM
Venue: AB1 – LR1
Platform: HackerRank
Allowed Language: C++ only

🕓 Registration closes on 2nd November 2025, 11:59 PM.
Limited seats available — register early!
      `,
    },
    {
      id: 2,
      category: "Hackathons",
      date: "12th–13th November 2025",
      title: "Hack RGIPT 2025",
      description:
        "Hack RGIPT 2025 – organized under Urjotsav (UrjaSangam), in collaboration with IEEE RGIPT SB and KODE Club. A coding hackathon to inspire innovation, teamwork, and problem-solving.",
      techStack: [
        "Round 1: Online (Nov 1–7)",
        "Round 2: Offline Finale (Nov 12–13)",
        "Open Frameworks",
        "AI Tools Allowed",
      ],
      registrations: "Deadline: 31st October 2025, 11:59 PM",
      location: "RGIPT Campus (Finale)",
      details: `
Subject: Registrations Open – Hack RGIPT 2025

Dear Students,
We’re thrilled to announce that the registrations for Hack RGIPT 2025 are now open! The event is being organized under Urjotsav, as part of UrjaSangam, in collaboration with the IEEE RGIPT Student Branch and KODE Club.

Hack RGIPT is a coding hackathon designed to inspire innovation, collaboration, and teamwork. Participants will tackle real-world challenges and bring creative ideas to life.

Event Overview:
Round 1: Online Phase (Nov 1–7)
Round 2: Offline Finale (6:00 PM, 12th Nov – 6:00 AM, 13th Nov)
Mode: In-person (venue details shared later)

Development Rules:
- Any framework, language, or tool may be used — including AI tools.
- All work must be original and developed during the respective rounds.
- Pre-built projects or templates are prohibited.

Team Formation:
- 4 members per team.
- 1 leader for communication and submission.

Prize Pool:
1st: ₹8,000 | 2nd: ₹6,000 | 3rd: ₹4,000

Registration Deadline: 31st October 2025, 11:59 PM
      `,
    },
  ];

  const filteredEvents = events.filter(
    (event) => event.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Upcoming </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our technical events and showcase your skills
          </p>
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
              <h3 className="text-xl font-bold text-white mb-3">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {event.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-400 mb-3">
                {event.registrations}
              </div>
              <div className="text-pink-400 text-sm mb-6 flex items-center">
                <MapPin size={16} className="mr-2" /> {event.location}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                {event.details && (
                  <button
                    onClick={() => setDetailEvent(event)}
                    className="w-full bg-gray-800 text-gray-200 py-2 rounded-xl hover:bg-gray-700 transition flex items-center justify-center"
                  >
                    <Info size={16} className="mr-2" />
                    View Details
                  </button>
                )}
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition"
                >
                  Register Now <ChevronRight size={18} className="inline ml-2" />
                </button>
              </div>
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

        {/* Event Details Modal */}
        {detailEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative text-gray-200">
              <button
                onClick={() => setDetailEvent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-white mb-4">
                {detailEvent.title}
              </h2>
              <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                {detailEvent.details}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsDetails;
