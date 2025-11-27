"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do you decide which problems to solve first?",
    answer:
      "We map opportunities across impact, feasibility, and effort, then prototype the riskiest assumption within 72 hours to make sure we are shipping momentum, not guesswork.",
    meta: "Discovery",
  },
  {
    question: "What does collaboration look like once we start?",
    answer:
      "A dedicated trio of design, engineering, and strategy meets daily in a shared async dashboard. Decisions are recorded in-line, so the team, stakeholders, and audit trail stay perfectly aligned.",
    meta: "Collaboration",
  },
  {
    question: "Can you adapt to an existing design system or stack?",
    answer:
      "Yes. We map tokens, components, and build steps into our pipeline on day one. If a gap appears, we patch the system with regression tests so velocity never compromises fidelity.",
    meta: "Systems",
  },
  {
    question: "How is quality validated before release?",
    answer:
      "Accessibility sweeps, automated visual diffs, and performance budgets run on every merge. We ship only after the experience hits the expected thresholds on real devices.",
    meta: "Quality",
  },
];

export default function FAQMonochrome() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleQuestion = (index: number) =>
    setActiveIndex((prev) => (prev === index ? -1 : index));

  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <section className="relative w-full overflow-hidden bg-muted/20 py-16 md:py-32">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 lg:max-w-5xl lg:px-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.35em]">
              Questions
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              FAQ
            </h1>
            <p className="text-muted-foreground max-w-xl text-base">
              Everything you need to know about partnering with our team,
              condensed into calm clarity.
            </p>
          </div>
        </header>

        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={item.question}
                className="group relative overflow-hidden rounded-3xl border bg-card/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 shadow-md"
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
              >
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                    open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), hsl(var(--primary) / 0.1), transparent 70%)`,
                  }}
                />

                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span className="bg-accent/50 relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105">
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${
                        open ? "animate-ping" : ""
                      }`}
                    />
                    <svg
                      className={`relative h-5 w-5 transition-transform duration-500 ${
                        open ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h2 className="text-lg font-medium leading-tight sm:text-xl">
                        {item.question}
                      </h2>
                      {item.meta && (
                        <span className="text-muted-foreground inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto">
                          {item.meta}
                        </span>
                      )}
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`text-muted-foreground overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${
                        open ? "max-h-64" : "max-h-0"
                      }`}
                    >
                      <p className="pr-2">{item.answer}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
