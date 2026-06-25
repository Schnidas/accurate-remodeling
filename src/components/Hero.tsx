import { motion, useReducedMotion } from 'motion/react'
import { site } from '../data'
import { Dimension, Plus } from './primitives'

const EASE = [0.165, 0.84, 0.44, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
  }

  return (
    <section id="top" className="relative overflow-hidden bg-grain pt-16 sm:pt-[72px]">
      {/* faint drafting margin rules */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-stone/15 lg:block xl:left-12"
      />

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-y-12 px-5 pb-16 pt-10 sm:px-8 lg:min-h-[88vh] lg:grid-cols-12 lg:gap-x-10 lg:px-12 lg:pb-24 lg:pt-14">
        {/* Left — the statement */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 lg:pr-6"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <Plus size={13} className="text-brick" />
            <span className="spec text-ink/70">Design–Build General Contractor</span>
            <span className="hidden h-px w-8 bg-stone/40 sm:block" />
            <span className="spec hidden text-stone sm:block">{site.city}</span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.4rem,9.5vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.02em] text-ink">
            <motion.span variants={item} className="block">
              Designed
            </motion.span>
            <motion.span variants={item} className="block italic">
              for life.
            </motion.span>
          </h1>

          <motion.div variants={item} className="mt-8 max-w-md">
            <Dimension label="Est. 1999 · Eugene, OR · CCB #157871" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            A Eugene design-build contractor turning the first sketch into the final
            detail — custom kitchens, baths, whole-home remodels, fine woodwork, and
            new construction.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="spec inline-flex items-center gap-2 bg-brick px-7 py-4 text-paper transition-colors hover:bg-brick-deep"
            >
              <Plus size={12} className="text-paper" />
              Start your project
            </a>
            <a
              href="#work"
              className="spec group inline-flex items-center gap-2 px-2 py-4 text-ink transition-colors hover:text-brick"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right — the proof */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            {/* vertical dimension along the image */}
            <div
              aria-hidden
              className="absolute -left-7 top-0 hidden h-full flex-col items-center xl:flex"
            >
              <span className="h-px w-2 bg-stone/60" />
              <span className="my-2 w-px flex-1 bg-stone/40" />
              <span className="spec rotate-180 text-stone [writing-mode:vertical-rl]">
                Lincoln St. Residence
              </span>
              <span className="my-2 w-px flex-1 bg-stone/40" />
              <span className="h-px w-2 bg-stone/60" />
            </div>

            <figure className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-walnut sm:aspect-[5/5] lg:aspect-[4/5]">
                <img
                  src="/assets/work/lincoln-kitchen.jpg"
                  alt="Custom remodeled kitchen with wood cabinetry, quartz island and pendant lighting by Accurate Remodeling in Eugene, Oregon"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/15" />
              </div>
              <Plus size={14} className="absolute -left-[7px] -top-[7px] text-brick" />
              <Plus size={14} className="absolute -bottom-[7px] -right-[7px] text-brick" />
              <figcaption className="spec mt-3 flex items-center justify-between text-stone">
                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-stone/50" />
                  Fig. 01 — Kitchen
                </span>
                <span>Eugene, OR</span>
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>

      {/* bottom rule of the hero "sheet" */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-ink/10" />
      </div>
    </section>
  )
}
