import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.165, 0.84, 0.44, 1] as const

/* ---- Plus: the registration cross lifted from the logo ---- */
export function Plus({
  className = '',
  size = 12,
  color = 'currentColor',
}: {
  className?: string
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path d="M12 3 V21 M3 12 H21" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

/* ---- Eyebrow: the mono technical label, marked with a brick + ---- */
export function Eyebrow({
  children,
  className = '',
  plus = true,
}: {
  children: ReactNode
  className?: string
  plus?: boolean
}) {
  return (
    <span className={`spec inline-flex items-center gap-2 ${className}`}>
      {plus && <Plus size={11} className="text-brick shrink-0" />}
      {children}
    </span>
  )
}

/* ---- Dimension: the signature measurement line ----
   A drafting dimension: tick — line — [LABEL] — line — tick.
   The two segments draw outward as the line enters view. */
export function Dimension({
  label,
  className = '',
  color = 'var(--color-stone)',
  labelClass = 'text-stone',
}: {
  label?: ReactNode
  className?: string
  color?: string
  labelClass?: string
}) {
  const reduce = useReducedMotion()
  const seg = {
    initial: reduce ? false : { scaleX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.9, ease: EASE },
  }
  return (
    <div className={`flex w-full items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-2 w-px shrink-0" style={{ background: color }} />
      <motion.span
        {...seg}
        className="h-px flex-1 origin-left"
        style={{ background: color }}
      />
      {label && (
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`spec whitespace-nowrap ${labelClass}`}
        >
          {label}
        </motion.span>
      )}
      <motion.span
        {...seg}
        className="h-px flex-1 origin-right"
        style={{ background: color }}
      />
      <span className="h-2 w-px shrink-0" style={{ background: color }} />
    </div>
  )
}

/* ---- Reveal: fade + rise on scroll, motion-reduced safe ---- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ---- Frame: a photo in a drafting frame with corner + marks ---- */
export function Frame({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  priority = false,
  hover = true,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  hover?: boolean
}) {
  return (
    <figure className={`group relative ${className}`}>
      <div className="relative h-full w-full overflow-hidden bg-walnut">
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
            hover ? 'group-hover:scale-[1.05]' : ''
          } ${imgClassName}`}
        />
        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
      </div>
      {/* corner registration marks */}
      <Plus size={12} className="absolute -left-[6px] -top-[6px] text-brick/80" />
      <Plus size={12} className="absolute -bottom-[6px] -right-[6px] text-brick/80" />
      {caption && (
        <figcaption className="spec mt-3 flex items-center gap-2 text-stone">
          <span className="h-px w-5 bg-stone/50" />
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
