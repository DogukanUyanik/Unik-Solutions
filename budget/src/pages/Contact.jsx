import React, { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, XCircle } from "lucide-react";

/* ----------  Intersection‑observer hook (same as homepage) ---------- */
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "50px", ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return [ref, isVisible];
}

/* ---------------------------  Contact page  ------------------------- */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'
  const [ref, isVisible] = useIntersectionObserver();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      res.ok ? setStatus("success") : setStatus("error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section
        ref={ref}
        className="px-6 lg:px-8 py-32 flex justify-center items-start"
      >
        <div
          className={`max-w-3xl w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/70 backdrop-blur-sm p-10 md:p-14 rounded-3xl shadow-2xl border border-white/20">
            {/*  Heading  */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Neem contact op
            </h2>

            {/*  Form  */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="Naam"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300/60 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              />
              <input
                name="email"
                type="email"
                placeholder="E‑mail"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300/60 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Bericht"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300/60 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-y"
              />

              {/*  Status feedback  */}
              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-green-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Bericht verzonden!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center justify-center gap-2 text-red-600 font-medium">
                  <XCircle className="w-5 h-5" />
                  Er is iets misgegaan. Probeer opnieuw.
                </p>
              )}

              {/*  Submit  */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Versturen..." : "Verstuur bericht"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

{/* Contact info */}
<div className="mt-10 text-center text-gray-700 space-y-2">
  <p>
    📧 E-mail:{" "}
    <a
      href="mailto:bndsolutions9100@gmail.com"
      className="text-blue-700 hover:underline"
    >
      bndsolutions9100@gmail.com
    </a>
  </p>
  <p>📞 Telefoon: +32 486 05 85 &nbsp;|&nbsp; +32 498 74 43 98</p>
</div>


          </div>
        </div>
      </section>
    </div>
  );
}
