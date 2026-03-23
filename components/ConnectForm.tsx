"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

interface Errors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ConnectForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Frontend Development");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  function validate(): Errors {
    const e: Errors = {};
    if (fullName.trim().length < 2) e.fullName = "Full name must be at least 2 characters.";
    if (email.trim().length < 5) e.email = "Email must be at least 5 characters.";
    if (message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xeerbyqy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ fullName, email, subject, message }),
      });
      if (res.ok) {
        setFormState("success");
        setFullName("");
        setEmail("");
        setSubject("Frontend Development");
        setMessage("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <div className="bg-white p-6 lg:p-10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(48,51,48,0.05)] border border-[#b1b2af]/10">
        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#5d605c] ml-4">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Gian Arvin"
                className={`w-full bg-[#f4f4f0] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 text-[#303330] placeholder:text-[#797b78] outline-none ${errors.fullName ? "ring-2 ring-red-400" : ""}`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 ml-4">{errors.fullName}</p>
              )}
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#5d605c] ml-4">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className={`w-full bg-[#f4f4f0] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 text-[#303330] placeholder:text-[#797b78] outline-none ${errors.email ? "ring-2 ring-red-400" : ""}`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 ml-4">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#5d605c] ml-4">
              Subject
            </label>
            <div className="relative">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#f4f4f0] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 appearance-none text-[#303330] outline-none"
              >
                <option>Frontend Development</option>
                <option>Geospatial Visualization</option>
                <option>Collaboration Inquiry</option>
                <option>Just saying hello</option>
              </select>
              <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#797b78]">
                expand_more
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#5d605c] ml-4">
              Your Message
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or vision..."
              className={`w-full bg-[#f4f4f0] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300 resize-none text-[#303330] placeholder:text-[#797b78] outline-none ${errors.message ? "ring-2 ring-red-400" : ""}`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 ml-4">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <p className="text-[11px] text-[#5d605c] max-w-[200px] leading-relaxed italic">
              I typically respond within 24–48 business hours.
            </p>
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full sm:w-auto bg-primary text-white px-6 py-2 rounded-full font-bold hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/10 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {formState === "submitting" ? "Sending..." : "Send Message"}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Success popup */}
      {formState === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center space-y-4">
            <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
            <h3 className="font-headline text-xl font-bold text-[#303330]">Message sent!</h3>
            <p className="text-sm text-[#5d605c]">Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:-translate-y-1 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error popup */}
      {formState === "error" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center space-y-4">
            <span className="material-symbols-outlined text-5xl text-red-500">error</span>
            <h3 className="font-headline text-xl font-bold text-[#303330]">Something went wrong</h3>
            <p className="text-sm text-[#5d605c]">Your message couldn't be sent. Please try again or email me directly.</p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:-translate-y-1 transition-all duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
