import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const GETFORM_URL = "https://getform.io/f/feae616e-97d2-4aee-ab63-ab89ef5bac3b";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validEmail(form.email)) newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");
      return;
    }

    setStatus("sending");
    setLoading(true);
    setErrors({});

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch(GETFORM_URL, { method: "POST", body: fd });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          city: "",
          address: "",
          message: "",
        });
        setTimeout(() => setStatus(""), 3000);
      } else setStatus("error");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className={`w-full min-h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#B0B0B0]" : "bg-[#FAF9F6] text-[#3E2723]"} py-24 border-t ${isDarkMode ? "border-[#333]" : "border-[#EADBC8]"} transition-colors duration-300`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-12 text-center md:text-left">
          <p
            className={`text-5xl font-extrabold inline border-b-8 ${isDarkMode ? "border-[#C5A059]/20" : "border-[#C5A059]/10"} rounded-sm`}
          >
            Contact
          </p>
          <p
            className={`py-6 text-lg ${isDarkMode ? "text-[#B0B0B0]" : "text-[#5D4037]"}`}
          >
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 gap-5 fade-in"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name *"
                className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none ${
                  isDarkMode
                    ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                    : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
                } ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email *"
                className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none ${
                  isDarkMode
                    ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                    : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
                } ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone Input */}
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none ${
                isDarkMode
                  ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                  : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
              }`}
            />

            {/* City Input */}
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none ${
                isDarkMode
                  ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                  : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
              }`}
            />

            {/* Address Input */}
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none ${
                isDarkMode
                  ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                  : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
              }`}
            />

            {/* Message Input */}
            <div className="flex flex-col">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message *"
                rows="6"
                className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none resize-none ${
                  isDarkMode
                    ? `bg-[#2d2d2d] border-[#444] text-white placeholder-[#777] focus:border-[#C5A059] focus:bg-[#333]`
                    : `bg-white border-[#EADBC8] text-[#3E2723] placeholder-[#999] focus:border-[#C5A059] focus:bg-[#FAF3E0]`
                } ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`text-white font-bold px-8 py-4 my-6 mx-auto rounded-full transition-all duration-300 flex items-center gap-2 justify-center min-w-[200px] ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#C5A059] to-[#8B6F47] hover:shadow-lg hover:shadow-[#C5A059]/30 disabled:opacity-70"
                  : "bg-gradient-to-r from-[#3E2723] to-[#5D4037] hover:shadow-lg hover:shadow-[#3E2723]/30 disabled:opacity-70"
              } hover:scale-105 disabled:hover:scale-100`}
            >
              {loading && <div className="spinner"></div>}
              {!loading && "Let's Talk"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="text-center p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 animate-fadeIn">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="text-center p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400 animate-fadeIn">
                ✗ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
