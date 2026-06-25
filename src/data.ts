// ============================================================
// Content — all copy is drawn from Accurate Remodeling's own
// material. Facts only: nothing invented about the business.
// ============================================================

export const site = {
  name: 'Accurate Remodeling',
  full: 'Accurate Remodeling + Design',
  tagline: 'Designed for life.',
  owner: 'Nathan Blackley',
  ccb: 'CCB #157871',
  est: '1999',
  phone: '(541) 221-7200',
  phoneHref: 'tel:+15412217200',
  fax: '(541) 485-4900',
  email: 'nathanblackley@gmail.com',
  address: '1298 Ocean St, Eugene, OR 97402',
  mailing: 'PO Box 25310, Eugene, OR 97402',
  city: 'Eugene, Oregon',
  geo: '44.05° N · 123.09° W',
  social: {
    instagram: 'https://www.instagram.com/accurate_remodeling/',
    facebook: 'https://www.facebook.com/AccurateRemodelingEugene/',
    yelp: 'https://www.yelp.com/biz/accurate-remodeling-eugene-2',
    maps: 'https://maps.app.goo.gl/8Y1DqLdgRHmYML4e6',
  },
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  index: string
  title: string
  body: string
  items: string[]
  image: string
  alt: string
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Remodeling, Design & Construction',
    body: 'From concept to completion, let’s work together to create a functional and beautiful space. Whether rearranging an existing layout or simply updating an older home, we help you distill your tastes and ideas into a design that suits the needs of your space.',
    items: ['Kitchens', 'Bathrooms', 'Whole House', 'Decks & Patios', 'Small Offices'],
    image: '/assets/work/lincoln-kitchen.jpg',
    alt: 'Remodeled kitchen with custom wood cabinetry, quartz island and hardwood floors in Eugene, Oregon',
  },
  {
    index: '02',
    title: 'Custom Projects',
    body: 'We love a challenge, and coming up with unique pieces to elevate a space is some of our favorite work. Whether it’s a one-of-a-kind conference table to wow your clients or barn-door closets to maximize your space, our attention to detail and exquisite craftsmanship take your custom project to the next level.',
    items: ['Tables', 'Specialty Cabinets & Storage', 'Gazebos & Pergolas', 'Patio Covers', 'Hot Tub Wraps', 'Doors'],
    image: '/assets/work/custom-table.jpg',
    alt: 'Handcrafted custom wood conference table built by Accurate Remodeling',
  },
  {
    index: '03',
    title: 'New Construction',
    body: 'Through years of construction and developing our own property here in Eugene, we’ve gained a deep interest in and knowledge of building small, unique homes and (sometimes large) barns. Our focus is simple, efficient, modern-rustic dream spaces in country settings.',
    items: ['Barns', 'Small Homes — 1,000 sq.ft. & under'],
    image: '/assets/work/deck-02.jpg',
    alt: 'Modern-rustic cedar deck and bench on a new build set against Oregon forest',
  },
]

export interface Step {
  index: string
  title: string
  body: string
}

export const process: Step[] = [
  {
    index: '01',
    title: 'Consultation',
    body: 'We sit down with you to understand the space, the budget, and the life it has to hold. Every project begins as a conversation.',
  },
  {
    index: '02',
    title: 'Design & Plans',
    body: 'We distill your tastes and ideas into a measured, buildable design — drawn to scale, detailed, and accurate before a single board is cut.',
  },
  {
    index: '03',
    title: 'Construction',
    body: 'Our crew and the subcontractors we trust build it the right way: reliably, cleanly, and to the highest standard of quality.',
  },
  {
    index: '04',
    title: 'Completion',
    body: 'We finish the details that matter and hand back a space that’s built to be lived in — designed for life.',
  },
]

export interface Project {
  src: string
  category: 'Kitchens' | 'Baths' | 'Living' | 'Outdoor' | 'Custom' | 'New Build'
  title: string
  span?: 'tall' | 'wide'
}

export const projects: Project[] = [
  { src: '/assets/work/living-01.jpg', category: 'Living', title: 'Reclaimed-Wood Living Room', span: 'wide' },
  { src: '/assets/work/bath-03.jpg', category: 'Baths', title: 'Hex-Tile Walk-In Shower', span: 'tall' },
  { src: '/assets/work/kitchen-05.jpg', category: 'Kitchens', title: 'Open Kitchen & Island' },
  { src: '/assets/work/deck-02.jpg', category: 'Outdoor', title: 'Cedar Deck & Built-In Bench' },
  { src: '/assets/work/custom-table.jpg', category: 'Custom', title: 'Custom Conference Table' },
  { src: '/assets/work/stair-01.jpg', category: 'Living', title: 'Staircase & Iron Railing', span: 'tall' },
  { src: '/assets/work/kitchen-03.jpg', category: 'Kitchens', title: 'Kitchen — Hidden Storage' },
  { src: '/assets/work/build-03.jpg', category: 'New Build', title: 'New Construction — Deck Build', span: 'wide' },
  { src: '/assets/work/lincoln-fireplace.jpg', category: 'Living', title: 'Slate Fireplace Wall' },
  { src: '/assets/work/custom-cab-01.jpg', category: 'Custom', title: 'Custom Cherry Cabinet', span: 'tall' },
  { src: '/assets/work/deck-03.jpg', category: 'Outdoor', title: 'Multi-Level Deck & Railing' },
  { src: '/assets/work/bath-02.jpg', category: 'Baths', title: 'Bathroom Remodel' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'We have used Nathan and crew for several projects. They always deliver!',
    name: 'Steve G.',
    role: 'Repeat client',
  },
  {
    quote: 'His subs love him and get the work done quickly, well, and in a friendly fashion.',
    name: 'Michael S.',
    role: 'Homeowner',
  },
  {
    quote: 'My house looked absolutely beautiful afterwards, and at a very reasonable cost.',
    name: 'Eileen S.',
    role: 'Homeowner',
  },
]

export const projectTypes = [
  'Kitchen remodel',
  'Bathroom remodel',
  'Whole-home remodel',
  'Custom woodwork',
  'Deck & outdoor',
  'New construction',
  'Something else',
]
