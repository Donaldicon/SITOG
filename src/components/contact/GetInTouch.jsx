import { useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSending(true);

    emailjs
      .send(
        "service_2ccd41l",
        "template_kgwm4b7",
        {
          fullName: form.fullName,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "pN00vDhRGlOmpOdc1"
      )
.then(() => {
  setSending(false);
  setSuccess(true);


  setForm({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  setTimeout(() => setSuccess(false), 4000);
})
      .catch(() => {
        setSending(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className='bg-[#F3F4F5] h-[450px] lg:h-[480px] laptop:h-[610px] big:h-[780px] w-[49%] px-[2%] my-auto flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
      
      <h1 className='text-[28px] leading-[40px] md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px] text-[#4C4E54] font-halyard'>
        Get In Touch
      </h1>

      <p className='text-[#63646C] md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium my-[6px] lg:my-[6px] laptop:my-[7px] big:my-[8px]'>
        Share details of your project or technical requirements, and our team will get back to you.
      </p>

      {success && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-2 text-center">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-[8px] laptop:space-y-[10px] big:space-y-[13px] md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] placeholder:text-[8px] font-medium font-hind">

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
            <p className="text-red-500 mt-1 laptop:mt-[6px] pl-[2%]">{errors.fullName}</p>
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
            <p className="text-red-500 mt-1 laptop:mt-[6px] pl-[2%]">{errors.email}</p>
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
            <p className="text-red-500 mt-1 laptop:mt-[6px] pl-[2%]">{errors.subject}</p>
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
            <p className="text-red-500 mt-1 laptop:mt-[6px] pl-[2%]">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#E6BC15] hover:bg-[#af8a04] transition-all duration-500 ease-in-out  text-[#3A3B40] py-3 rounded-lg font-medium  disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};

export default GetInTouch;