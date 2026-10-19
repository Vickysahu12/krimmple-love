import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { collectionTabs } from '../../data/content'
import { queryProducts } from '../../services/catalog'
import { ProductCard } from '../../features/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { cn } from '../../lib/cn'

/** Our Products (ref): occasion tabs with a coral underline that slides, and a 4-up grid. */
export function OurProducts() {
  const reduce = useReducedMotion()
  const [tab, setTab] = useState(collectionTabs[0].id)
  const current = collectionTabs.find((t) => t.id === tab)
  const items = useMemo(() => queryProducts({ ...current.query, limit: 8 }), [current])

  return (
    <section className="shell pt-20 lg:pt-28" aria-labelledby="our-title">
      <SectionHeading id="our-title" title="Our" italic="products" />
      <div role="tablist" aria-label="Occasions" className="no-scrollbar mx-auto mt-6 flex max-w-max gap-1 overflow-x-auto sm:gap-3">
        {collectionTabs.map((t) => {
          const on = t.id === tab
          return (
            <button key={t.id} type="button" role="tab" aria-selected={on} onClick={() => setTab(t.id)} className={cn('relative shrink-0 px-3 pt-2 pb-3 text-[15px] font-bold transition-colors duration-300', on ? 'text-rouge' : 'text-ink-soft hover:text-ink')}>
              {t.label}
              {on && <motion.span layoutId="our-line" className="absolute inset-x-3 bottom-0 h-[2.5px] rounded-full bg-rouge" transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.45, bounce: 0.15 }} />}
            </button>
          )
        })}
      </div>
      <ul key={tab} className="mt-9 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4">
        {items.map((p, i) => (
          <li key={p.id} className="anim-fade-up" style={{ '--delay': `${i * 45}ms` }}>
            <ProductCard product={p} sizes="(min-width: 1024px) 23vw, 46vw" />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button to={`/shop${current.query.occasion ? `?occasion=${current.query.occasion[0]}` : '?sort=new'}`} variant="outline" arrow>
          View all {current.label.toLowerCase()}
        </Button>
      </div>
    </section>
  )
}
