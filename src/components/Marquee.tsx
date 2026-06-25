import { Plus } from './primitives'

const items = [
  'Kitchens',
  'Bathrooms',
  'Whole-Home Remodels',
  'Custom Woodwork',
  'Decks & Patios',
  'New Construction',
  'Barns & Small Homes',
  'Designed for Life',
]

export default function Marquee() {
  const Row = () => (
    <div className="flex shrink-0 items-center">
      {items.map((it) => (
        <span key={it} className="flex items-center">
          <span className="spec px-6 text-paper/85">{it}</span>
          <Plus size={11} className="text-brick" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="flex overflow-hidden border-y border-ink/40 bg-walnut py-4">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        <Row />
        <Row />
      </div>
    </div>
  )
}
