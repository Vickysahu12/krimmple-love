import { useState } from 'react'
import { Link } from 'react-router'
import { testimonials } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { cn } from '../../lib/cn'

/**
 * Feedback corner (ref): three speech-bubble notes, the middle one lifted onto blush. Arrows
 * rotate the trio. Each note says the size she wears, the thing plus-size shoppers ask first.
 */
export function FeedbackCorner() {
  const [start, setStart] = useState(0)
  const n = testimonials.length
  const trio = [0, 1, 2].map((k) => testimonials[(start + k) % n])

  return (
    <section id="love" className="shell scroll-mt-32 pt-20 lg:pt-28" aria-labelledby="love-title">
      <SectionHeading id="love-title" title="Feedback" italic="corner" sub="Real words from women who finally found their fit." />
      <ul className="mt-10 grid gap-5 md:grid-cols-3" aria-live="polite">
        {trio.map((t, k) => {
          const p = getProductSync(t.productId)
          const mid = k === 1
          return (
            <li key={`${t.name}-${start}`} className={cn('anim-fade-up', k !== 1 && 'max-md:hidden')} style={{ '--delay': `${k * 70}ms` }}>
              <figure className={cn('bubble flex h-full flex-col p-6 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] sm:p-7', mid ? 'bg-blush md:-translate-y-3 md:shadow-lift' : 'bg-paper shadow-[0_16px_40px_-32px_rgb(48_48_48/0.5)] hover:-translate-y-1')}>
                <span className="display text-[54px] leading-[0.6] text-rouge" aria-hidden="true">
                  “
                </span>
                <figcaption className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-[17px] font-extrabold text-ink">{t.name}</span>
                  <span className="rounded-full bg-paper px-2.5 py-0.5 text-[12px] font-extrabold text-rouge ring-1 ring-rouge/25">wears {t.size}</span>
                </figcaption>
                <span className="mt-1 flex text-rouge" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" size={14} weight={i < t.rating ? 'fill' : 'regular'} />
                  ))}
                </span>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{t.text}</blockquote>
                <Link to={`/product/${p.slug}`} className="group mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <Img id={p.images[0]} alt="" sizes="44px" className="h-14 w-11 shrink-0 rounded-[10px]" position="50% 18%" />
                  <span className="min-w-0">
                    <span className="block truncate text-[13.5px] font-bold text-ink group-hover:text-rouge">{p.name}</span>
                    <span className="block text-[12.5px] text-ink-soft">
                      {t.city}
                    </span>
                  </span>
                </Link>
              </figure>
            </li>
          )
        })}
      </ul>
      <div className="mt-8 flex items-center justify-center gap-3">
        {[
          [-1, 'caret-left', 'Previous notes'],
          [1, 'caret-right', 'Next notes'],
        ].map(([d, icon, label]) => (
          <button key={d} type="button" onClick={() => setStart((s) => (s + d + n) % n)} aria-label={label} className="press grid size-11 place-items-center rounded-full border border-line-strong bg-paper text-ink transition-colors hover:border-rouge hover:bg-rouge hover:text-white">
            <Icon name={icon} size={16} weight="bold" />
          </button>
        ))}
      </div>
    </section>
  )
}
