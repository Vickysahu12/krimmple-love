import { aboutBlock, categories } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { Link } from 'react-router'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'

const count = (id) => products.filter((p) => p.category === id).length

/**
 * About us (ref): a blush panel with the founders' photo and why the brand exists, followed by
 * the four categories as soft tiles whose arrow turns on hover.
 */
export function AboutUs() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="about-title">
      <div className="bubble grid items-center gap-8 bg-blush p-5 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:p-12">
        <div className="overflow-hidden rounded-[22px]" data-reveal-frame>
          <Img id={aboutBlock.image} alt="Two Krimmple customers in rust and maroon anarkalis" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3]" position="50% 25%" />
        </div>
        <div data-reveal>
          <p className="text-[14px] font-extrabold text-rouge">About us</p>
          <h2 id="about-title" className="display mt-2 text-[32px] text-ink sm:text-[42px]">
            {aboutBlock.title}
          </h2>
          {aboutBlock.body.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <Button to="/about" className="mt-7" arrow>
            Read our story
          </Button>
        </div>
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {categories.map((c, i) => (
          <li key={c.id} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <Link to={c.to} className="group flex items-center gap-3 rounded-[20px] border border-line bg-paper p-2.5 pr-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-rouge/40 hover:shadow-float">
              <Img id={c.image} alt="" sizes="64px" className="size-16 shrink-0 rounded-[14px]" position="50% 18%" imgClassName="transition-transform duration-700 group-hover:scale-110" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-bold text-ink">{c.label}</span>
                <span className="block text-[12.5px] text-ink-soft">{count(c.id)} styles</span>
              </span>
              <Icon name="arrow" size={18} className="shrink-0 text-rouge transition-transform duration-300 group-hover:-rotate-45" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
