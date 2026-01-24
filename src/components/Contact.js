import React, { useState } from "react";

const GETFORM_URL = "https://getform.io/f/feae616e-97d2-4aee-ab63-ab89ef5bac3b";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const validEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return setStatus("Please fill required fields");
    if (!validEmail(form.email)) return setStatus("Invalid email");
    setStatus("sending");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch(GETFORM_URL, { method: "POST", body: fd });
      if (res.ok) setStatus("Message sent");
      else setStatus("Send failed");
    } catch (err) {
      setStatus("Network error");
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#FAF9F6] text-[#3E2723] py-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">
            Contact
          </p>
          <p className="py-6 text-lg text-[#5D4037]">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-4 ..."
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-4 ..."
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="p-4 ..."
            />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="p-4 ..."
            />
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-4 ..."
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="6"
              className="p-4 ..."
            />
            <button
              type="submit"
              className="text-white bg-[#3E2723] px-8 py-4 my-8 mx-auto rounded-full"
            >
              Let's talk
            </button>
            {status && <p className="text-center">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
