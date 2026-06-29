import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PlayCircle, 
  FileText, 
  Brain, 
  CheckCircle, 
  Award, 
  AlertTriangle,
  Eye,
  Clock,
  Users,
  Hammer
} from 'lucide-react';

const Problem = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const statementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading reveal
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
        }
      }
    );

    // Timeline animation
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    const timelineLine = timelineRef.current?.querySelector('.timeline-line');

    if (timelineItems && timelineLine) {
      // Draw the vertical line
      gsap.fromTo(
        timelineLine,
        { height: 0 },
        {
          height: "100%",
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          }
        }
      );

      // Stagger timeline items
      gsap.fromTo(
        timelineItems,
        { 
          opacity: 0, 
          x: -40,
          scale: 0.9 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 65%",
          }
        }
      );
    }

    // Cards stagger animation
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.95 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 75%",
          }
        }
      );
    }

    // Statement animation
    gsap.fromTo(
      statementRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statementRef.current,
          start: "top 80%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const timelineSteps = [
    {
      icon: PlayCircle,
      label: "Watch Videos",
      desc: "Passive consumption"
    },
    {
      icon: FileText,
      label: "Take Notes",
      desc: "Copy-paste culture"
    },
    {
      icon: Brain,
      label: "Memorize Concepts",
      desc: "Short-term retention"
    },
    {
      icon: CheckCircle,
      label: "Complete Quiz",
      desc: "Multiple choice"
    },
    {
      icon: Award,
      label: "Receive Certificate",
      desc: "Digital badge"
    },
    {
      icon: AlertTriangle,
      label: "Still Can't Build",
      desc: "Real products",
      isLast: true
    }
  ];

  const problems = [
    {
      number: "01",
      icon: Eye,
      title: "Passive Learning",
      description: "Thousands of hours of videos later, learners still hesitate when facing a blank code editor."
    },
    {
      number: "02",
      icon: Clock,
      title: "Outdated Curriculum",
      description: "Technology changes every month while most courses stay unchanged for years."
    },
    {
      number: "03",
      icon: Users,
      title: "One-size-fits-all",
      description: "Every learner receives identical content regardless of goals, experience or interests."
    },
    {
      number: "04",
      icon: Hammer,
      title: "No Real Engineering",
      description: "Watching tutorials never teaches debugging, architecture, deployment, collaboration or production thinking."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(139,92,246,0.08)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_70%,rgba(167,139,250,0.06)_0%,transparent_50%)]"></div>
      
      {/* Very subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        {/* PART 1: Story + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 items-start">
          {/* Left Column - Story */}
          <div className="lg:col-span-5 pt-4 lg:sticky lg:top-24 self-start">
            <div ref={headingRef} className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm tracking-[3px] font-medium">
                THE BROKEN REALITY
              </div>
              
              <h2 className="text-6xl md:text-7xl leading-[1.05] font-semibold tracking-tighter text-white">
                Traditional EdTech<br />
                is producing<br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
                  course consumers,
                </span><br />
                not builders.
              </h2>

              <p className="max-w-lg text-xl text-zinc-400 leading-relaxed">
                Today's platforms optimize for completion rates and watch time — 
                not the confidence to ship real software in the real world.
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div ref={timelineRef} className="lg:col-span-7 mt-16 lg:mt-8">
            <div className="relative pl-12 md:pl-16">
              {/* Vertical Line */}
              <div className="timeline-line absolute left-[29px] md:left-[37px] top-8 bottom-8 w-[3px] bg-gradient-to-b from-transparent via-violet-500/30 to-transparent"></div>
              
              <div className="space-y-16 relative">
                {timelineSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={index}
                      className="timeline-item group flex gap-8 items-start"
                    >
                      {/* Icon Circle */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 transition-all duration-500">
                          <Icon className="w-8 h-8 text-violet-400 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        {/* Subtle glow ring */}
                        <div className="absolute inset-0 rounded-2xl border border-violet-500/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      </div>

                      {/* Content */}
                      <div className="pt-3 flex-1">
                        <div className="flex items-baseline gap-4">
                          <div className="text-xs font-mono tracking-[2px] text-zinc-500">{String(index + 1).padStart(2, '0')}</div>
                          <h3 className="text-2xl font-medium text-white tracking-tight">{step.label}</h3>
                        </div>
                        <p className="mt-2 text-zinc-400 text-[17px] leading-relaxed pr-8">
                          {step.desc}
                        </p>
                        
                        {/* Connecting dot */}
                        {!step.isLast && (
                          <div className="absolute left-[29px] md:left-[37px] top-[72px] w-3 h-3 rounded-full bg-zinc-800 border-2 border-violet-500/40"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Problem Cards */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-[3px] text-violet-400 font-medium">FOUR FUNDAMENTAL FLAWS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="group relative bg-zinc-900/70 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-violet-500/30 transition-all duration-700 hover:-translate-y-2"
                >
                  {/* Large number background */}
                  <div className="absolute -top-6 -right-6 text-[180px] font-bold text-zinc-800/40 select-none pointer-events-none transition-transform group-hover:scale-105">
                    {problem.number}
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 mb-8">
                      <Icon className="w-7 h-7 text-violet-400" />
                    </div>

                    <h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                      {problem.title}
                    </h3>
                    
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3: Closing Statement */}
        <div ref={statementRef} className="mt-32 pt-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter text-white">
              Education should not end<br />
              with a certificate.
            </div>
            
            <div className="mt-8 text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
              It should begin<br />
              with something you built.
            </div>

            <div className="mt-12 text-zinc-500 max-w-md mx-auto text-lg">
              The gap between learning and creating has never been wider.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;