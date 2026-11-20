"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import Navbar from "./components/navBar";
import Hero from "./components/Hero";
import LogoCarousel from "./components/logoCarousel";
import HoverZoom from "./components/HoverZoom";
import CurrentYear from "./components/CurrentYear";
import productImg from "../app/assets/hardware_image.png";

import Logo from "../app/assets/Brand_Logo.png";
import phoneImg from "../app/assets/mobile_image.png";

import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Cpu,
  Egg,
  Fan,
  Gauge,
  MoveHorizontal,
  Smartphone,
  Sun,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";

// Shared container so every section lines up with the hero
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

// Reusable viewport entrance; transforms are removed when reduced motion is preferred.
const viewport = { once: true, amount: 0.16 } as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: reduceMotion ? 0.01 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// SYSTEM FEATURES
const features = [
  {
    icon: Sun,
    title: "Solar-Powered Operation",
    description:
      "Designed to harness solar energy, allowing incubation to operate independently of conventional grid electricity.",
    label: "Renewable Energy",
  },
  {
    icon: BatteryCharging,
    title: "Integrated Battery Backup",
    description:
      "A battery backup system supports the incubator during periods of reduced or unavailable solar energy generation.",
    label: "Power Continuity",
  },
  {
    icon: Thermometer,
    title: "Temperature Regulation",
    description:
      "Automated regulation helps maintain the thermal conditions required throughout the incubation process.",
    label: "Environmental Control",
  },
  {
    icon: Waves,
    title: "Humidity Management",
    description:
      "Integrated humidity regulation is designed to maintain appropriate moisture conditions inside the chamber.",
    label: "Environmental Control",
  },
  {
    icon: MoveHorizontal,
    title: "Automated Egg Turning",
    description:
      "A built-in mechanism automates egg rotation, reducing the need for repeated manual intervention.",
    label: "Smart Automation",
  },
  {
    icon: Fan,
    title: "Ventilation System",
    description:
      "Integrated ventilation supports air circulation and environmental management within the incubator.",
    label: "Air Circulation",
  },
];

// OPERATIONAL PROCESS
const processSteps = [
  {
    number: "01",
    icon: Sun,
    title: "Generate Energy",
    description:
      "The solar energy system provides a renewable power source for off-grid incubation.",
  },
  {
    number: "02",
    icon: BatteryCharging,
    title: "Manage Power",
    description:
      "Battery backup helps support system operation when solar power availability decreases.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Regulate Conditions",
    description:
      "The embedded control system coordinates temperature, humidity, and ventilation regulation.",
  },
  {
    number: "04",
    icon: Egg,
    title: "Automate Incubation",
    description:
      "Automated egg turning works alongside environmental regulation throughout the incubation process.",
  },
];

// BENEFITS
const benefits = [
  {
    icon: Zap,
    title: "Designed for Off-Grid Use",
    description:
      "Combines solar energy generation and battery backup to support incubation in locations with limited electricity access.",
  },
  {
    icon: Gauge,
    title: "Integrated Environmental Management",
    description:
      "Brings temperature, humidity, and ventilation regulation together within one incubation system.",
  },
  {
    icon: Cpu,
    title: "Less Manual Intervention",
    description:
      "Uses an embedded controller and automated egg turning to simplify routine incubation operations.",
  },
];

// MOBILE MONITORING HIGHLIGHTS
const mobileHighlights = [
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    description: "View incubation information from your phone.",
  },
  {
    icon: Thermometer,
    title: "Environmental Monitoring",
    description: "Keep track of temperature and humidity conditions.",
  },
  {
    icon: Activity,
    title: "System Visibility",
    description: "Stay informed about your incubator’s operation.",
  },
];

// PROTOTYPE CHECKLIST
const prototypePoints = [
  "Solar energy generation and battery backup",
  "Temperature and humidity regulation",
  "Automated egg turning mechanism",
  "Embedded control and ventilation",
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Prototype", href: "#prototype" },
  { label: "Why SolHatch", href: "#why-solar-hatch" },

];

function SectionHeading({
  title,
  description,
  center = true,
}: {
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl font-bold tracking-tight text-brand-secondary sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {title}
      </h2>

      <div
        aria-hidden="true"
        className={`mt-5 h-1 w-12 rounded-full bg-brand-primary ${
          center ? "mx-auto" : ""
        }`}
      />

      <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
        {description}
      </p>
    </Reveal>
  );
}

export default function Home() {
  return (
    // overflow-x-clip (not overflow-hidden) so the sticky navbar keeps working
    <main className="overflow-x-clip bg-white">
      <Navbar />

      {/* HERO */}
      <div id="home">
        <Hero />
      </div>

      {/* SPONSORS */}
      <LogoCarousel />

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 bg-[#FAFBF8] py-20 sm:py-28"
      >
        <div className={container}>
          <SectionHeading
            title="Everything incubation needs, working together."
            description="SolHatch integrates renewable energy, environmental regulation, and automated control into a single digital egg incubation system."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal
                  key={feature.title}
                  className="h-full"
                  delay={(index % 3) * 0.08}
                >
                  <HoverZoom className="h-full">
                    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-brand-secondary/20 hover:shadow-lg hover:shadow-slate-200/60">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/5 text-brand-secondary transition-colors group-hover:bg-brand-primary">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <p className="mt-7 text-sm font-medium text-brand-secondary/60">
                        {feature.label}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-brand-secondary">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </article>
                  </HoverZoom>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-white py-20 sm:py-28"
      >
        <div className={container}>
          <SectionHeading
            title="A smarter approach to egg incubation."
            description="From solar power generation to automated incubation management, SolHatch brings the essential processes together in one coordinated system."
          />

          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line on desktop (aligned with the icon centers) */}
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-[60px] hidden border-t-2 border-dashed border-slate-200 lg:block"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.number}
                  className="relative h-full"
                  delay={index * 0.1}
                >
                  <HoverZoom className="h-full">
                    <div className="relative h-full rounded-2xl bg-white p-5 text-center">
                      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-secondary/5 text-brand-secondary shadow-sm ring-1 ring-slate-200">
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <span className="mt-6 inline-block text-sm font-semibold tracking-widest text-brand-secondary/50">
                        STEP {step.number}
                      </span>

                      <h3 className="mt-2 text-xl font-semibold text-brand-secondary">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </HoverZoom>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROTOTYPE SHOWCASE */}
      <section
        id="prototype"
        className="scroll-mt-20 bg-brand-secondary py-20 sm:py-28"
      >
        <div
          className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          {/* DEVICE IMAGE */}
          <Reveal>
            <HoverZoom>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
                <div className="relative aspect-square w-full">
                  <Image
                    src={productImg}
                    alt="SolHatch solar-powered digital egg incubator prototype"
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </HoverZoom>
          </Reveal>

          {/* PRODUCT DESCRIPTION */}
          <Reveal delay={0.15}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineered to bring
              <span className="text-brand-primary"> control and energy </span>
              together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              SolHatch is a solar-powered digital egg incubator developed 
              under the TETFAIR 2026 programme.
            </p>

            <p className="mt-4 text-lg leading-8 text-white/70">
              The prototype combines solar energy generation, battery backup,
              environmental regulation, automated egg turning, and an embedded
              control system to support stable incubation conditions.
            </p>

            <ul className="mt-9 space-y-4">
              {prototypePoints.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="text-brand-secondary"
                    />
                  </span>

                  <span className="text-base font-medium text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY SOLHATCH */}
      <section
        id="why-solar-hatch"
        className="scroll-mt-20 bg-[#FAFBF8] py-20 sm:py-28"
      >
        <div className={container}>
          <SectionHeading
            title="Designed around the challenges of incubation."
            description="SolHatch explores how renewable energy and intelligent automation can be combined to make egg incubation more accessible and easier to manage."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  className="h-full"
                  delay={index * 0.1}
                >
                  <HoverZoom className="h-full">
                    <article className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/5 text-brand-secondary">
                          <Icon size={24} strokeWidth={1.7} />
                        </div>

                        <span className="text-base font-semibold text-slate-300">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold text-brand-secondary">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {benefit.description}
                      </p>
                    </article>
                  </HoverZoom>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOBILE MONITORING */}
      <section
        id="mobile-monitoring"
        className="scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28"
      >
        <div
          className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          {/* LEFT: CONTENT */}
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-secondary sm:text-4xl lg:text-5xl">
              Stay connected to your incubator,
              <span className="text-brand-secondary/60">
                {" "}
                wherever you are.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 sm:text-xl">
              SolHatch brings incubation monitoring to your mobile phone,
              allowing you to conveniently keep track of your incubator’s
              operating conditions through a digital interface.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-8 text-slate-600">
              Access important incubation information without needing to
              constantly check the physical device, making it easier to stay
              informed throughout the incubation process.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-10 space-y-6">
              {mobileHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/5 text-brand-secondary">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-brand-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* RIGHT: MOBILE APP IMAGE */}
          <Reveal delay={0.15}>
            <div className="relative flex items-center justify-center">
              {/* Soft glow behind the phone */}
              <div
                aria-hidden="true"
                className="absolute h-[380px] w-[380px] rounded-full bg-brand-primary/10 blur-3xl sm:h-[480px] sm:w-[480px]"
              />

              <HoverZoom className="w-full max-w-[440px]">
                <div className="relative flex w-full items-center justify-center rounded-3xl border border-slate-200 bg-[#FAFBF8] p-8 sm:p-12">
                  <Image
                    src={phoneImg}
                    alt="SolHatch mobile incubation monitoring interface"
                    width={420}
                    height={650}
                    sizes="(min-width: 1024px) 440px, 90vw"
                    className="relative z-10 h-auto max-h-[580px] w-auto max-w-full object-contain drop-shadow-2xl"
                  />
                </div>
              </HoverZoom>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-primary py-16 sm:py-20">
        <Reveal>
          <div
            className={`${container} flex flex-col items-start justify-between gap-8 md:flex-row md:items-center`}
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-brand-secondary sm:text-4xl">
                Innovation powered by the sun.
                <br />
                Designed for incubation.
              </h2>

              <p className="mt-4 text-lg leading-8 text-brand-secondary/80">
                SolHatch brings together renewable energy,
                embedded technology, and automated environmental management in
                one prototype.
              </p>
            </div>

            <HoverZoom>
              <Image
                src={productImg}
                alt="product image"
              />
            </HoverZoom>
          </div>
        </Reveal>
      </section>

      {/* FOOTER (cream so the dark green logo stands out) */}
      <footer className="bg-brand-cream text-brand-secondary">
        <div className={`${container} pt-16 pb-8`}>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* BRAND */}
            <div>
              <a href="#home" className="inline-flex items-center">
                <Image
                  src={Logo}
                  width={140}
                  height={60}
                  alt="SolHatch logo"
                  className="h-12 w-auto object-contain"
                />
              </a>

              <p className="mt-5 max-w-xs text-base leading-7 text-brand-secondary/70">
                A solar-powered digital egg incubation prototype integrating
                renewable energy and automated control.
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="text-base font-semibold">Explore SolHatch</h3>

              <ul className="mt-5 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-brand-secondary/70 transition hover:text-brand-secondary hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROJECT DETAILS */}
            <div>
              <h3 className="text-base font-semibold">Project Information</h3>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-brand-secondary/50">Programme</p>
                  <p className="mt-1 text-base">TETFAIR 2026 </p>
                </div>

               

                <div>
                  <p className="text-sm text-brand-secondary/50">Technology</p>
                  <p className="mt-1 text-base">
                    Solar-Powered Digital Egg Incubator
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-brand-secondary/10 pt-7 text-sm text-brand-secondary/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© <CurrentYear /> SolHatch. All rights reserved.</p>
            <p>Developed under TETFAIR 2026 </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
