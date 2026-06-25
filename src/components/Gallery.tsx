import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { projects } from '../data'
import type { Project } from '../data'
import { Dimension, Eyebrow, Plus, Reveal } from './primitives'

const categories = ['All', 'Kitchens', 'Baths', 'Living', 'Outdoor', 'Custom', 'New Build'] as const
type Cat = (typeof categories)[number]

const aspect = (span?: Project['span']) =>
  span === 'tall' ? 'aspect-[4/5]' : span === 'wide' ? 'aspect-[3/2]' : 'aspect-square'

export default function Gallery() {
  const [cat, setCat] = useState<Cat>('All')
  const reduce = useReducedMotion()

  const shown = useMemo(
    () => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  )

  return (
    <section id="work" className="border-t border-ink/10 bg-grain">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow className="text-ink/70">Selected Work</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,4rem)] font-medium leading-[1.02] text-ink">
                Built around
                <span className="italic"> Eugene.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-6 lg:pb-2">
            <Reveal delay={0.1} className="w-full">
              <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
                Kitchens, baths, decks, custom pieces, and ground-up builds — a sampling
                of work across the Willamette Valley.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filter */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-x-1 gap-y-2 border-y border-ink/10 py-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`spec px-3 py-2 transition-colors ${
                  cat === c ? 'text-brick' : 'text-ink/55 hover:text-ink'
                }`}
              >
                {cat === c && <span className="mr-1">/</span>}
                {c}
              </button>
            ))}
            <span className="spec ml-auto text-stone">
              {String(shown.length).padStart(2, '0')} Projects
            </span>
          </div>
        </Reveal>

        {/* Masonry */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.figure
                key={p.src}
                layout
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                className="group relative mb-5 break-inside-avoid"
              >
                <div className={`relative overflow-hidden bg-walnut ${aspect(p.span)}`}>
                  <img
                    src={p.src}
                    alt={`${p.title} — ${p.category} project by Accurate Remodeling, Eugene OR`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-[1.06]"
                  />
                  <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
                  {/* hover caption */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div>
                      <span className="spec flex items-center gap-2 text-paper/70">
                        <Plus size={10} className="text-brick" />
                        {p.category}
                      </span>
                      <p className="mt-1 font-display text-xl text-paper">{p.title}</p>
                    </div>
                  </div>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <Dimension label="Instagram · @accurate_remodeling" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
