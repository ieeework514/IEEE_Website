"use client";
import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = ({ eventTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    hackerrankId: "",
    whatsappNumber: "",
    event: eventTitle,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.hackerrankId.trim()) {
      newErrors.hackerrankId = "HackerRank ID is required";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.whatsappNumber.replace(/\s+/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/register", formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000, // 10 second timeout
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        setFormData({
          name: "",
          rollNumber: "",
          email: "",
          hackerrankId: "",
          whatsappNumber: "",
          event: eventTitle,
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Registration error:", err);
      
      if (err.response) {
        // Server responded with error status
        setErrorMessage(
          err.response.data?.message || 
          `Registration failed: ${err.response.status}`
        );
      } else if (err.request) {
        // Request made but no response
        setErrorMessage("No response from server. Please check your connection.");
      } else {
        // Other errors
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 space-y-4">
      <h2 className="text-xl font-semibold text-white mb-2">
        Register for {eventTitle}
      </h2>

      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold animate-pulse">
          🎉 Registration successful!
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
          ❌ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
              errors.name ? "border-red-500" : "border-gray-600"
            } focus:border-blue-500 focus:outline-none transition-colors`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Roll Number Field */}
        <div>
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            disabled={loading}
            className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
              errors.rollNumber ? "border-red-500" : "border-gray-600"
            } focus:border-blue-500 focus:outline-none transition-colors`}
          />
          {errors.rollNumber && (
            <p className="text-red-400 text-xs mt-1">{errors.rollNumber}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email-ID"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
              errors.email ? "border-red-500" : "border-gray-600"
            } focus:border-blue-500 focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* HackerRank ID Field */}
        <div>
          <input
            type="text"
            name="hackerrankId"
            placeholder="HackerRank ID"
            value={formData.hackerrankId}
            onChange={handleChange}
            disabled={loading}
            className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
              errors.hackerrankId ? "border-red-500" : "border-gray-600"
            } focus:border-blue-500 focus:outline-none transition-colors`}
          />
          {errors.hackerrankId && (
            <p className="text-red-400 text-xs mt-1">{errors.hackerrankId}</p>
          )}
        </div>

        {/* WhatsApp Number Field */}
        <div>
          <input
            type="tel"
            name="whatsappNumber"
            placeholder="WhatsApp Number (10 digits)"
            value={formData.whatsappNumber}
            onChange={handleChange}
            disabled={loading}
            maxLength={10}
            className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
              errors.whatsappNumber ? "border-red-500" : "border-gray-600"
            } focus:border-blue-500 focus:outline-none transition-colors`}
          />
          {errors.whatsappNumber && (
            <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Registering...</span>
            </>
          ) : (
            "Submit Registration"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;