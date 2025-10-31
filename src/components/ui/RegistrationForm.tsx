"use client";
import React, { useState } from "react";

const RegistrationForm = ({ eventTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    hackerrankId: "",
    whatsappNumber: "",
    event: eventTitle,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          rollNumber: "",
          email: "",
          hackerrankId: "",
          whatsappNumber: "",
          event: eventTitle,
        });
      } else {
        alert("❌ Registration failed!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Registration failed!");
    }

    setLoading(false);
  };

  if (success)
    return (
      <div className="p-4 text-green-400 text-center font-semibold">
        🎉 Registration successful!
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 space-y-4">
      <h2 className="text-xl font-semibold text-white mb-2">Register for {eventTitle}</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        value={formData.rollNumber}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Email-ID"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <input
        type="text"
        name="hackerrankId"
        placeholder="HackerRank ID"
        value={formData.hackerrankId}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <input
        type="text"
        name="whatsappNumber"
        placeholder="WhatsApp Number"
        value={formData.whatsappNumber}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
      >
        {loading ? "Registering..." : "Submit"}
      </button>
    </form>
  );
};

export default RegistrationForm;
