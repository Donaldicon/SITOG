import { useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouchM = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setSending(true);

  const templateParams = {
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    company: form.company,
    address: form.address,
    subject: form.subject,
    message: form.message,
  };

  try {
    await emailjs.send(
      "service_2ccd41l",
      "template_kgwm4b7",
      templateParams,
      "pN00vDhRGlOmpOdc1"
    );

    emailjs.send(
      "service_2ccd41l",
      "template_AUTOREPLY_ID",
      templateParams,
      "pN00vDhRGlOmpOdc1"
    ).catch((err) => {
      console.log("Auto reply failed:", err);
    });

    setSuccess(true);

    setForm({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    alert("Failed to send message. Please try again.");
  }

  setSending(false);

  setTimeout(() => setSuccess(false), 4000);
};

  return (
    <div className='bg-[#F3F4F5] py-[12px] w-full px-[2%] flex flex-col justify-center rounded-md mt-[15px]'>

      <h1 className='text-[25px] font-bold text-[#4C4E54] font-halyard'>
        Get In Touch
      </h1>

      <p className='text-[#63646C] text-[12px] font-hind font-medium my-[6px]'>
        Share details of your project or technical requirements, and our team will get back to you.
      </p>

      {success && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-2 text-center">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-[8px] text-[12px] placeholder:text-[8px] font-medium font-hind">

        {/* Full Name */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.company && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.company}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.address && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.address}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.subject && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none resize-none"
          ></textarea>

          {errors.message && (
            <p className="text-red-500 mt-1 pl-[2%]">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#E6BC15] hover:bg-[#af8a04] transition-all duration-500 ease-in-out text-[#3A3B40] py-3 rounded-lg font-medium disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};

export default GetInTouchM;