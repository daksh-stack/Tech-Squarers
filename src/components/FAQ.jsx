import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is this program suitable for absolute beginners?",
      a: "Tech-Squarers is built for developers, computer science students, or ambitious builders who already know basic coding syntax. We start from system foundations and rapidly scale to kernel syscalls, compilers, and open-source contributions. Absolute beginners might find the pace challenging."
    },
    {
      q: "How does the Open Source and Research phase work?",
      a: "In Phase 3, you are matched with an expert systems mentor. Together, you analyze upstream issues or design improvements in major systems repositories (like Rust runtime, Kubernetes, Node.js core, or developer tools). You will research, write, test, and merge contributions that run on global developer infrastructure."
    },
    {
      q: "What is the admission and alignment call process?",
      a: "Because cohorts are kept small (typically 15-20 developers) to ensure high-quality, 1-on-1 code reviews, we use an alignment review. After you submit an enquiry, we schedule a 15-minute call to align on your current engineering background, goals, and make sure we can support your systems focus."
    },
    {
      q: "Can I build and scale my own venture/startup projects here?",
      a: "Yes, we encourage this. If your goal is to build a new developer tool, high-performance database, or infrastructure SaaS, you can incubate it as your core spotlight project. Our Founders & Enterprise tier provides dedicated architectural reviews to prepare your system for production."
    },
    {
      q: "What is the weekly time commitment for the cohort?",
      a: "For the self-paced Starter plan, you set your own schedule. For the live Cohort program, we recommend dedicating 8-12 hours per week. This covers live masterclasses, mentor review loops, and engineering milestones designed to fit around a standard full-time job."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-white/6 bg-black/40">
      <div className="mx-auto max-w-4xl px-6">
        {/* Title */}
        <div className="numbered-heading mb-12">
          <div className="index">06</div>
          <h2 className="title">FAQ — Alignment & Expectations</h2>
        </div>

        <p className="text-zinc-400 text-sm max-w-2xl mb-12 text-left">
          Everything you need to know about the program structure, open-source integration, difficulty ratings, and cohort fit.
        </p>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 text-cyan-400 font-bold transition-transform duration-300 text-lg ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    ＋
                  </span>
                </button>

                {/* Smooth expand/collapse container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[200px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 text-zinc-400 text-xs leading-relaxed bg-white/[0.005]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
