import { useMemo } from 'react'
import { queryProducts } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { ProductCard } from '../../features/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { SectionHeading } from '../../components/ui/SectionHeading'

// Best sellings (ref): five across on desktop, a swipeable row on phones, and "See all".
export function BestSellings() {
  const ref = useReveal()
  const items = useMemo(() => queryProducts({ bestseller: true, sort: 'rating', limit: 5 }), [])
  return (
    <section ref={ref} className="shell pt-20 lg:pt-24" aria-labelledby="best-title">
      <SectionHeading id="best-title" title="Best" italic="sellings" sub="Get in on the trend with the styles our customers reorder in a second colour." />
      <ul className="no-scrollbar -mx-4 mt-10 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-5">
        {items.map((p, i) => (
          <li key={p.id} className="w-[60vw] shrink-0 snap-start sm:w-auto" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <ProductCard product={p} sizes="(min-width: 1024px) 18vw, 60vw" />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button to="/shop?bestseller=1" arrow>
          See all
        </Button>
      </div>
    </section>
  )
}
