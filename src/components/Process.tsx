import { process, site } from '../data'
import { Plus, Reveal } from './primitives'

export default function Process() {
  const cyan = 'var(--color-blueprint-line)'
  return (
    <section id="process" className="relative overflow-hidden bg-blueprint text-paper">
      {/* the real blueprint, rendered as white drafting lines on blue */}
      <img
        src="/assets/blueprint.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-screen [filter:invert(1)]"
      />
      {/* drafting grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-blueprint-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-blueprint-line) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(120% 100% at 50% 0%, black, transparent 75%)',
          opacity: 0.06,
        }}
      />
      {/* legibility wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(8,22,36,0.55), rgba(8,22,36,0.78))' }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <span className="spec inline-flex items-center gap-2" style={{ color: cyan }}>
            <Plus size={11} color={cyan} />
            The Process
          </span>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.3rem,5.2vw,4.2rem)] font-medium leading-[1.0] text-paper">
              From concept
              <span className="italic"> to completion.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end lg:col-span-5 lg:pb-2">
            <p className="text-lg leading-relaxed text-paper/80">
              Design and build under one roof. Because the people drawing the plans are
              the people building them, nothing gets lost between the page and the room.
            </p>
          </Reveal>
        </div>

        {/* dimension line spanning the steps */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center gap-3" aria-hidden>
            <span className="h-2 w-px shrink-0" style={{ background: cyan }} />
            <span className="h-px flex-1" style={{ background: 'color-mix(in srgb, var(--color-blueprint-line) 45%, transparent)' }} />
            <span className="spec whitespace-nowrap" style={{ color: cyan }}>
              4 stages · 1 team
            </span>
            <span className="h-px flex-1" style={{ background: 'color-mix(in srgb, var(--color-blueprint-line) 45%, transparent)' }} />
            <span className="h-2 w-px shrink-0" style={{ background: cyan }} />
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal
              key={step.index}
              delay={0.1 + i * 0.08}
              className="border-paper/15 px-1 py-8 sm:[&:nth-child(odd)]:border-r sm:px-6 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-medium leading-none" style={{ color: cyan }}>
                  {step.index}
                </span>
                <Plus size={12} color="var(--color-paper)" className="opacity-40" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium text-paper">{step.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-paper/70">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="spec mt-14 text-paper/50">
            {site.full} · {site.ccb} · {site.city}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
