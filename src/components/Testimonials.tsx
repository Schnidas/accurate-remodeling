import { testimonials } from '../data'
import { Plus, Reveal } from './primitives'

export default function Testimonials() {
  return (
    <section className="bg-walnut text-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="spec inline-flex items-center gap-2 text-paper/60">
              <Plus size={11} className="text-brick" />
              Word of Mouth
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.04] text-paper">
              They keep
              <span className="italic"> coming back.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end lg:col-span-7 lg:pb-3">
            <p className="max-w-md text-lg leading-relaxed text-paper/70">
              The best measure of a build is whether a client trusts you with the next
              one. Here’s what a few have said.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={0.1 + i * 0.1}
              className={`flex flex-col py-8 md:px-8 ${
                i > 0 ? 'border-t border-paper/15 md:border-l md:border-t-0' : 'md:pl-0'
              }`}
            >
              <span className="font-display text-5xl italic leading-none text-brick">“</span>
              <blockquote className="mt-4 flex-1 font-display text-[1.55rem] font-medium italic leading-[1.25] text-paper">
                {t.quote}
              </blockquote>
              <div className="mt-7 flex items-center gap-2">
                <span className="h-px w-6 bg-brick" />
                <span className="spec text-paper/70">
                  {t.name} · {t.role}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
