import { Dimension, Eyebrow, Frame, Reveal } from './primitives'

export default function Philosophy() {
  return (
    <section className="bg-grain">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-32">
        {/* Statement */}
        <div className="lg:col-span-7 lg:pr-8">
          <Reveal>
            <Eyebrow className="text-ink/70">The Standard</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-7 font-display text-[clamp(2.3rem,5vw,4rem)] font-medium leading-[1.02] text-ink">
              Exceptional craftsmanship —
              <span className="italic"> measured twice, built once.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-ink-soft">
              At Accurate Remodeling, we believe reliability and the highest standards
              of quality are what make a successful business. Our crew values beauty,
              quality, and outstanding service — as do the subcontractors we choose to
              work with.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              We enjoy the challenge of designing and creating custom solutions to
              improve your space.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 max-w-md">
              <Dimension label="Nathan Blackley · Owner" />
            </div>
          </Reveal>
        </div>

        {/* Feature image */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1} className="lg:pt-2">
            <Frame
              src="/assets/work/living-01.jpg"
              alt="Living room remodel with reclaimed-wood floating shelves and a slate fireplace surround"
              caption="Reclaimed wood · Living room"
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
