import { services } from '../data'
import { Dimension, Eyebrow, Frame, Plus, Reveal } from './primitives'

export default function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-paper-2">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        {/* Section head */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="text-ink/70">Services</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,4rem)] font-medium leading-[1.02] text-ink">
                From the first line
                <span className="italic"> to the last nail.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-7 lg:pb-3">
            <Reveal delay={0.1} className="w-full">
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
                Accurate Remodeling is a general contracting company specializing in
                design and construction for your home and business — three ways we turn
                an idea into a space you’ll live in for years.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Dimension label="003 — Capabilities" />
          </div>
        </Reveal>

        {/* Service rows */}
        <div className="mt-8">
          {services.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={s.index}
                className="grid grid-cols-1 items-center gap-8 border-t border-ink/10 py-12 lg:grid-cols-12 lg:gap-x-12 lg:py-16"
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                  <Reveal>
                    <Frame
                      src={s.image}
                      alt={s.alt}
                      className="aspect-[16/11]"
                      caption={`Fig. 0${i + 1} — ${s.title}`}
                    />
                  </Reveal>
                </div>

                {/* Copy */}
                <div className={`lg:col-span-6 ${flip ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
                  <Reveal delay={0.05}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl italic text-brick">{s.index}</span>
                      <span className="spec text-stone">Service</span>
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.05] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>

                    <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 border-b border-ink/8 py-2">
                          <Plus size={11} className="shrink-0 text-brick" />
                          <span className="spec text-ink/80">{it}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="spec group mt-8 inline-flex items-center gap-2 text-ink transition-colors hover:text-brick"
                    >
                      Discuss a {s.title.split(',')[0].split(' ')[0].toLowerCase()} project
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
