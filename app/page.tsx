"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Cloud,
  Cpu,
  Globe2,
  Network,
} from "lucide-react";

const logoSrc = "/perenorlogo.jpg";

const services = [
  {
    title: "AWS & Cloud Services",
    desc: "AWS architecture, migration, platform engineering, DevOps, modernization, reliability, and cloud cost optimization for enterprise environments.",
    icon: Cloud,
  },
  {
    title: "IT Services",
    desc: "Enterprise IT transformation, managed engineering, application modernization, systems integration, and long-term delivery support.",
    icon: Briefcase,
  },
  {
    title: "SONiC Network Services",
    desc: "Vendor-agnostic network services for SONiC-based environments including lifecycle support, automation, validation, operations, and production hardening.",
    icon: Network,
  },
  {
    title: "Observability & Performance Products",
    desc: "Products and solutions for network observability, telemetry, troubleshooting, packet visibility, and measurable network performance improvement.",
    icon: Cpu,
  },
];

const industries = [
  "High Tech",
  "Manufacturing",
  "Retail & Logistics",
  "Financial Services",
  "Healthcare",
  "Public Sector",
  "Enterprise IT",
  "Telecom & Networking",
];

const highlights = [
  {
    eyebrow: "What we do",
    title: "Cloud, IT, and network engineering under one platform.",
    desc: "Perenor brings together services and products to support the full lifecycle of modern infrastructure.",
  },
  {
    eyebrow: "How we work",
    title: "From design to production and ongoing operations.",
    desc: "We build systems, deploy them in real environments, and improve them through automation and telemetry.",
  },
  {
    eyebrow: "Why Perenor",
    title: "Engineering depth with product thinking.",
    desc: "We don’t just deliver services — we build systems and tools that improve how infrastructure operates day to day.",
  },
];

const insights = [
  {
    category: "Insight",
    title: "Why modern infrastructure teams need software-defined operations",
    date: "April 2026",
  },
  {
    category: "Case Study",
    title: "Reducing deployment risk with automated validation pipelines",
    date: "March 2026",
  },
  {
    category: "Point of View",
    title: "The next layer of cloud value is operational simplicity",
    date: "March 2026",
  },
];

const navMenus = {
  services: [
    {
      title: "AWS & Cloud Services",
      desc: "Architecture, migration, automation, reliability, and cloud cost optimization.",
      href: "#services",
    },
    {
      title: "SONiC Network Services",
      desc: "Vendor-agnostic SONiC lifecycle support, automation, validation, and operations.",
      href: "#services",
    },
    {
      title: "IT Services",
      desc: "Enterprise technology services, modernization, integration, and delivery support.",
      href: "#services",
    },
    {
      title: "Observability Products",
      desc: "Telemetry, packet visibility, troubleshooting, and network performance improvement.",
      href: "#services",
    },
  ],
  about: [
    {
      title: "About Perenor",
      desc: "A premium engineering-led company focused on cloud, networking, and software platforms.",
      href: "#about",
    },
    {
      title: "Contact",
      desc: "Start a conversation around modernization, delivery, or strategic engineering support.",
      href: "#contact",
    },
  ],
};

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
};

function LinkButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm",
  };
  const variants = {
    solid: "bg-[#f97316] text-white hover:bg-[#ea580c]",
    outline:
      "border border-white/12 bg-transparent text-slate-200 hover:bg-white/[0.04] hover:text-white",
  };

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

function Panel({ children, className = "" }: PanelProps) {
  return <div className={className}>{children}</div>;
}

export default function PerenorHomepage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="Perenor logo" className="h-12 w-auto object-contain" />
            <div className="text-lg font-semibold tracking-[0.18em] text-white">PERENOR</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-white">
                What we do
                <ChevronRight className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-4 w-[720px] translate-y-2 rounded-[28px] border border-white/10 bg-[#0b1118]/95 p-6 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-[0.9fr_1.1fr] gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Services overview</div>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Engineering services for modern enterprises</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      AWS, enterprise IT, SONiC-based networking, and product-led observability capabilities designed for long-term transformation.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {navMenus.services.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-[#f97316]/20 hover:bg-white/[0.05]"
                      >
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-white">
                Industries
                <ChevronRight className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-4 w-[620px] translate-y-2 rounded-[28px] border border-white/10 bg-[#0b1118]/95 p-6 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <a
                      key={industry}
                      href="#industries"
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-[#f97316]/20 hover:bg-white/[0.05]"
                    >
                      <span className="text-slate-100">{industry}</span>
                      <Briefcase className="h-4 w-4 text-slate-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-white">
                Insights
                <ChevronRight className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-4 w-[680px] translate-y-2 rounded-[28px] border border-white/10 bg-[#0b1118]/95 p-6 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-[0.8fr_1.2fr] gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Latest thinking</div>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Insights across cloud, IT, and open networking</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Executive viewpoints, delivery stories, and engineering insights from across the platform lifecycle.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {insights.map((item) => (
                      <a
                        key={item.title}
                        href="#insights"
                        className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-[#f97316]/20 hover:bg-white/[0.05]"
                      >
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.category}</div>
                        <div className="mt-2 font-medium text-white">{item.title}</div>
                        <div className="mt-2 text-xs text-slate-500">{item.date}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-white">
                Who we are
                <ChevronRight className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-4 w-[560px] translate-y-2 rounded-[28px] border border-white/10 bg-[#0b1118]/95 p-6 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-4 sm:grid-cols-2">
                  {navMenus.about.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[#f97316]/20 hover:bg-white/[0.05]"
                    >
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <LinkButton href="#contact">Talk to us</LinkButton>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md">
              AWS · IT · SONiC · Products . Software Services
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
              Engineering cloud, networking, and software services at scale.
            </h1>

            <h2 className="mt-7 max-w-3xl text-xl font-medium leading-8 text-slate-300 sm:text-2xl sm:leading-9">
              AWS, enterprise IT, and SONiC-powered network services — backed by products that improve observability and operational performance.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Perenor helps teams design, build, and run production infrastructure with stronger visibility, cleaner operations, and better performance across cloud and networking environments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <LinkButton href="#services" size="lg" className="shadow-lg shadow-[#f97316]/20">
                <>
                  Explore services <ArrowRight className="ml-2 h-4 w-4" />
                </>
              </LinkButton>
              <LinkButton href="#contact" size="lg" variant="outline">
                Talk to us
              </LinkButton>
            </div>

            <div className="mt-14 grid max-w-3xl gap-6 border-t border-white/8 pt-8 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold text-white">Cloud</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">
                  Platform engineering, migration, DevOps, and modernization.
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Network</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">
                  SONiC-based services, automation, validation, and operations.
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Products</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">
                  Observability, telemetry, diagnostics, and performance tooling.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <Panel className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1118]/90 shadow-2xl shadow-black/40">
              <div className="relative border-b border-white/10 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.04),transparent_24%)]" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Platform focus</div>
                  <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white">
                    Infrastructure, operations, and visibility built for production.
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                    Perenor works across cloud platforms, enterprise systems, open networking, and observability tooling to help teams run production environments with more confidence.
                  </p>
                </div>
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-r border-white/8 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(255,255,255,0.02))] p-6 md:border-b-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f97316]">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-semibold text-white">AWS & Cloud</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Architecture, migration, platform engineering, and DevOps for scalable cloud environments.
                  </p>
                </div>

                <div className="border-b border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f97316]">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-semibold text-white">Enterprise IT</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Modernization, systems integration, and managed delivery across enterprise technology stacks.
                  </p>
                </div>

                <div className="border-r border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(249,115,22,0.06))] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f97316]">
                    <Network className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-semibold text-white">SONiC Networking</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Automation, validation, and lifecycle support for open, vendor-agnostic network environments.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(249,115,22,0.08))] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f97316]">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-semibold text-white">Observability Products</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Telemetry, diagnostics, and performance tooling that improves visibility across live systems.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/8 px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500">Operating model</div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      Services delivery backed by practical platform thinking
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-[#f97316]" />
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Services</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Technology services and products for production environments.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Perenor combines cloud, IT, and network engineering with product development to deliver systems that work in real-world conditions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Panel className="h-full rounded-[26px] border border-white/8 bg-[#0b1118]/85 p-6 transition hover:-translate-y-1 hover:border-[#f97316]/20 hover:bg-[#0f1620]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-[#f97316]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
                  <div className="mt-6 inline-flex items-center text-sm text-slate-200">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Panel>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="industries" className="border-y border-white/8 bg-[#080d13]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Industries</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Designed for complex systems and high-scale environments.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              We work across industries where reliability, scale, and operational clarity are critical.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-slate-100"
              >
                <span>{industry}</span>
                <Briefcase className="h-4 w-4 text-slate-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <Panel key={item.title} className="rounded-[28px] border border-white/8 bg-[#0b1118]/85 p-7">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.eyebrow}</div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section id="insights" className="border-y border-white/8 bg-[#080d13]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Insights</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Engineering insights and delivery experience.
              </h2>
            </div>
            <LinkButton href="#insights" variant="outline">Explore all insights</LinkButton>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <Panel
                key={item.title}
                className="rounded-[28px] border border-white/8 bg-[#0b1118]/85 p-7 transition hover:border-[#f97316]/20 hover:bg-[#0f1620]"
              >
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{item.title}</h3>
                <div className="mt-8 inline-flex items-center text-sm text-slate-200">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-[#0b1118]/90 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-slate-200">
              Let’s build with purpose
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Looking for an AWS, IT, or network engineering partner?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Perenor supports AWS transformation, enterprise systems, SONiC-based networking, and observability platforms.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <LinkButton href="mailto:sales@perenor.com" size="lg">Contact Perenor</LinkButton>
            <LinkButton href="#contact" size="lg" variant="outline">Download company profile</LinkButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 text-sm text-slate-400 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="flex items-center gap-3 text-white">
              <img src={logoSrc} alt="Perenor logo" className="h-9 w-auto object-contain" />
              <span className="font-medium tracking-[0.14em]">PERENOR</span>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Cloud, IT, and network systems — designed for real-world scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="font-medium text-white">Services</div>
              <div className="mt-3 space-y-2">
                <div>AWS</div>
                <div>IT Services</div>
                <div>SONiC Networking</div>
              </div>
            </div>
            <div>
              <div className="font-medium text-white">Company</div>
              <div className="mt-3 space-y-2">
                <div>About</div>
                <div>Insights</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <div className="font-medium text-white">Global</div>
              <div className="mt-3 space-y-2">
                <div>
                  <Globe2 className="mr-2 inline h-4 w-4" />
                  Enterprise-ready
                </div>
                <div>Modern delivery</div>
                <div>Trusted execution</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pb-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Perenor. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
