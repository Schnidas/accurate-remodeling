import { Eyebrow, Frame, Plus, Reveal } from './primitives'

const stats = [
  { value: '1999', label: 'In business in Eugene, Oregon since' },
  { value: 'CCB #157871', label: 'Licensed, bonded & insured in Oregon' },
  { value: 'Design + Build', label: 'Drawn and built by one team' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-ink/10 bg-paper-2">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal>
              <Frame
                src="/assets/work/team-02.jpg"
                alt="Accurate Remodeling crew framing a timber barn in the Oregon woods"
                caption="New construction · Timber barn"
                className="aspect-[5/4]"
              />
            </Reveal>
          </div>

          {/* Story */}
          <div className="lg:col-span-6 lg:pl-6">
            <Reveal>
              <Eyebrow className="text-ink/70">About</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.04] text-ink">
                From a Wyoming farm
                <span className="italic"> to the Willamette Valley.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                Owner Nathan Blackley grew up on his family’s farm in Sheridan, Wyoming —
                tinkering with equipment repairs and woodworking. He worked alongside
                contractors through high school, learning every aspect of building, then
                relocated to Eugene in 1999 to establish his own remodeling business.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                It all begins with a great team. These talented professionals turn ideas
                into livable spaces for families and functional environments for
                businesses. Our crew is the heart of the company — and we’re proud of
                what each of them brings to the table.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex items-center gap-4">
                <img
                  src="/assets/work/team-01.jpg"
                  alt="Nathan Blackley, owner of Accurate Remodeling"
                  loading="lazy"
                  className="h-14 w-14 shrink-0 object-cover ring-1 ring-ink/15"
                />
                <div>
                  <p className="font-display text-lg italic text-ink">Nathan Blackley</p>
                  <p className="spec text-stone">Owner · Founder</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-16 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={0.1 + i * 0.08}
              className={`py-8 sm:px-8 ${i > 0 ? 'sm:border-l sm:border-ink/10' : 'sm:pl-0'}`}
            >
              <Plus size={12} className="text-brick" />
              <p className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-medium leading-none text-ink">
                {s.value}
              </p>
              <p className="spec mt-3 leading-relaxed text-stone">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
