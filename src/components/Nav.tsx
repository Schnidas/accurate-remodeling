import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { nav, site } from '../data'
import { Plus } from './primitives'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Release the menu (and scroll lock) when crossing to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-ink/10 bg-paper/95' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#top" className="flex items-center" aria-label={`${site.full} — home`}>
          <img
            src="/assets/brand/logo.png"
            alt={site.full}
            className="h-[22px] w-auto sm:h-[26px]"
            width={520}
            height={140}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="spec text-ink/70 transition-colors hover:text-brick"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="spec text-ink transition-colors hover:text-brick"
          >
            {site.phone}
          </a>
          <a
            href="#contact"
            className="spec inline-flex items-center gap-2 bg-brick px-5 py-3 text-paper transition-colors hover:bg-brick-deep"
          >
            <Plus size={11} className="text-paper" />
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-6 bg-ink transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-24 lg:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-ink/10 py-5 font-display text-4xl text-ink"
                >
                  <span className="spec mr-3 align-middle text-brick">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href={site.phoneHref} className="font-display text-2xl text-ink">
                {site.phone}
              </a>
              <span className="spec text-stone">{site.city} · {site.ccb}</span>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="spec mt-3 inline-flex items-center justify-center gap-2 bg-brick px-5 py-4 text-paper"
              >
                <Plus size={11} className="text-paper" />
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
