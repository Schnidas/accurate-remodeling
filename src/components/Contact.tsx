import { useState } from 'react'
import type { FormEvent } from 'react'
import { projectTypes, site } from '../data'
import { Dimension, Eyebrow, Plus, Reveal } from './primitives'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const labelCls = 'spec block text-stone'
const fieldCls =
  'mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brick'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // No endpoint configured yet → open the visitor's mail client.
    if (!endpoint) {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProject: ${data.projectType}\n\n${data.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project inquiry — ${data.name}`,
      )}&body=${encodeURIComponent(body)}`
      setStatus('success')
      return
    }

    try {
      setStatus('submitting')
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const details = [
    { label: 'Call', value: site.phone, href: site.phoneHref },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Studio', value: site.address, href: site.social.maps },
    { label: 'License', value: site.ccb, href: undefined },
  ]

  return (
    <section id="contact" className="border-t border-ink/10 bg-grain">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-20">
          {/* Left — the invitation */}
          <div>
            <Reveal>
              <Eyebrow className="text-ink/70">Start a Project</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-medium leading-[1.0] text-ink">
                Tell us about
                <span className="italic"> your next project.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                Call, email, or send the details and we’ll be in touch. Every project
                starts with a conversation about the space and how you want to live in it.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 max-w-md">
                <Dimension label="Contact" />
              </div>
            </Reveal>

            <dl className="mt-8 max-w-md">
              {details.map((d, i) => (
                <Reveal
                  key={d.label}
                  delay={0.15 + i * 0.06}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4"
                >
                  <dt className="spec text-stone">{d.label}</dt>
                  <dd className="text-right">
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="font-display text-lg text-ink transition-colors hover:text-brick"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="font-display text-lg text-ink">{d.value}</span>
                    )}
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { label: 'Instagram', href: site.social.instagram },
                  { label: 'Facebook', href: site.social.facebook },
                  { label: 'Yelp', href: site.social.yelp },
                  { label: 'Map', href: site.social.maps },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="spec inline-flex items-center gap-1.5 text-ink/60 transition-colors hover:text-brick"
                  >
                    <Plus size={10} className="text-brick" />
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — the form */}
          <Reveal delay={0.1}>
            {status === 'success' ? (
              <div className="flex h-full min-h-[20rem] flex-col items-start justify-center border border-ink/15 bg-paper/60 p-10">
                <Plus size={20} className="text-brick" />
                <h3 className="mt-5 font-display text-3xl italic text-ink">Thank you.</h3>
                <p className="mt-3 max-w-sm text-ink-soft">
                  {endpoint
                    ? 'Your project details are on their way. We’ll be in touch shortly.'
                    : 'Your email is ready to send — just hit send in your mail app and we’ll be in touch shortly.'}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="spec mt-8 text-ink/60 transition-colors hover:text-brick"
                >
                  ← Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input id="name" name="name" required className={fieldCls} placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className={labelCls}>
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" className={fieldCls} placeholder="(541) 000-0000" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={fieldCls} placeholder="you@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="projectType" className={labelCls}>
                    Project type
                  </label>
                  <select id="projectType" name="projectType" defaultValue={projectTypes[0]} className={`${fieldCls} cursor-pointer`}>
                    {projectTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>
                    Tell us about it
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`${fieldCls} resize-none`}
                    placeholder="What are you hoping to build or remodel?"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="spec inline-flex items-center gap-2 bg-brick px-8 py-4 text-paper transition-colors hover:bg-brick-deep disabled:opacity-60"
                  >
                    <Plus size={12} className="text-paper" />
                    {status === 'submitting' ? 'Sending…' : 'Send project details'}
                  </button>
                  {status === 'error' && (
                    <p className="spec mt-4 text-brick">
                      Something went wrong — please call {site.phone} or email us directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
