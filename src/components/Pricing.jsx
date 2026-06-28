import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Systems Starter",
      tag: "SELF-PACED LEARNING",
      price: "Enquire for Rates",
      desc: "Perfect for engineers who want to master the systems engineering curriculum independently.",
      cta: "Enquire for Access",
      popular: false,
      features: [
        "Full access to the 12-week systems curriculum",
        "Interactive file mockups & syllabus source code",
        "Lifetime access to our systems developer community",
        "Monthly community QA sessions",
        "Certificate of Systems Engineering Mastery"
      ]
    },
    {
      name: "Research & Cohort",
      tag: "POPULAR OPTION",
      price: "Cohort Application Open",
      desc: "Our flagship program. Live cohort building, 1-on-1 review sessions, and open-source contributions.",
      cta: "Apply for Cohort Access",
      popular: true,
      features: [
        "Everything in Systems Starter",
        "Weekly live masterclasses with systems architects",
        "1-on-1 expert code reviews for your engine projects",
        "Guaranteed upstream open-source contributions",
        "Developer placement network & resume mapping",
        "Exclusive mock system interviews with tech leads"
      ]
    },
    {
      name: "Founders & Enterprise",
      tag: "PRODUCT INCUBATOR",
      price: "By Application Only",
      desc: "Tailored advisory for engineers looking to launch venture projects or train corporate teams.",
      cta: "Request Advisory Session",
      popular: false,
      features: [
        "Everything in Research & Cohort",
        "1-on-1 founder coaching for dev tool products",
        "Systems design advisory & architecture audits",
        "Custom training paths for enterprise dev teams",
        "Direct recruitment access to top cohort builders",
        "Priority engineering support for incubated systems"
      ]
    }
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 border-t border-white/6 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="numbered-heading mb-12 text-left">
          <div className="index">04</div>
          <h2 className="title">COHORT PATHS — Invest in System Leadership</h2>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-12 text-left">
          We select high-potential developers and founders. Explore our flexible enrollment pathways below and request alignment to join our upcoming cohorts.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-10">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between border backdrop-blur-md transition-all duration-300 ${
                p.popular
                  ? "bg-slate-950/60 border-cyan-500/40 shadow-[0_10px_40px_rgba(6,182,212,0.08)] scale-100 md:scale-[1.03] z-10"
                  : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              {/* Highlight ribbon for popular tier */}
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3.5 py-1 text-[9px] font-bold text-slate-950 tracking-widest uppercase shadow-md shadow-cyan-500/10">
                  RECOMMENDED
                </span>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6">
                  <span className="text-[9px] font-bold tracking-widest text-zinc-500 block uppercase mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-white/5 mb-6 flex items-baseline">
                  <span className="text-xl font-bold text-white tracking-tight">{p.price}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4.5 mb-8">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <svg className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className={`block w-full py-3.5 text-center text-xs font-semibold rounded-xl transition-all duration-300 ${
                    p.popular
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-bold hover:scale-103 hover:shadow-lg hover:shadow-cyan-500/10"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {p.cta}
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
