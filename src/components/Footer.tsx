import { nav, site } from '../data'
import { Plus } from './primitives'

function HouseMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="6" width="52" height="52" rx="10" fill="none" stroke="var(--color-paper)" strokeWidth="2.5" />
      <path d="M21 31 L21 46 L43 46 L43 31" fill="none" stroke="var(--color-paper)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 32 L32 19 L46 32 Z" fill="var(--color-brick)" />
      <rect x="29" y="37" width="6" height="9" fill="var(--color-brick)" />
    </svg>
  )
}

const block = [
  { k: 'Project', v: 'Accurate Remodeling + Design' },
  { k: 'Trade', v: 'Design–Build General Contractor' },
  { k: 'License', v: site.ccb },
  { k: 'Location', v: 'Eugene, Oregon' },
  { k: 'Coordinates', v: site.geo },
  { k: 'Established', v: site.est },
]

export default function Footer() {
  return (
    <footer className="bg-walnut text-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* top */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <HouseMark />
              <span className="font-display text-2xl text-paper">
                Accurate Remodeling
              </span>
            </div>
            <p className="mt-6 max-w-xs font-display text-3xl italic leading-tight text-paper/90">
              Designed for life.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-block font-display text-2xl text-paper transition-colors hover:text-brick"
            >
              {site.phone}
            </a>
          </div>

          <nav className="lg:col-span-3">
            <p className="spec text-paper/45">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-paper/80 transition-colors hover:text-brick">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="spec text-paper/45">Contact</p>
            <ul className="mt-5 space-y-3 text-paper/80">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-brick">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li>{site.mailing}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {[
                { label: 'Instagram', href: site.social.instagram },
                { label: 'Facebook', href: site.social.facebook },
                { label: 'Yelp', href: site.social.yelp },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="spec text-paper/55 transition-colors hover:text-brick"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* title block */}
        <div className="grid grid-cols-2 border border-paper/15 sm:grid-cols-3 lg:grid-cols-6">
          {block.map((b, i) => (
            <div
              key={b.k}
              className={`p-4 ${i !== 0 ? 'border-l border-paper/15' : ''} ${
                i >= 2 ? 'border-t sm:border-t-0' : ''
              } ${i % 2 === 0 ? 'border-l-0 sm:border-l' : ''} ${
                i >= 3 ? 'border-t lg:border-t-0' : ''
              } border-paper/15`}
            >
              <p className="spec text-[0.6rem] text-paper/40">{b.k}</p>
              <p className="mt-2 text-sm text-paper/85">{b.v}</p>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="spec text-paper/40">
            © 2026 Accurate Remodeling + Design · {site.ccb}
          </p>
          <div className="flex items-center gap-6">
            <span className="spec text-paper/35">
              Crafted by{' '}
              <a
                href="https://apex-business-services.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-paper/55 transition-colors hover:text-brick"
              >
                Apex Business Services
              </a>
            </span>
            <a href="#top" className="spec inline-flex items-center gap-2 text-paper/60 transition-colors hover:text-brick">
              <Plus size={10} className="text-brick" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
