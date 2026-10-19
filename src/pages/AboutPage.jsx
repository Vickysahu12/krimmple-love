import { Link } from 'react-router'
import { aboutBlock, categories, perks } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useReveal } from '../hooks/useReveal'
import { Img } from '../components/ui/Img'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'

const CHAPTERS = [
  { title: 'Drafted for curves,', hand: 'not stretched', body: 'Most brands take a size M pattern and make it wider. We start every pattern at 3XL and grade both ways, so the armholes, the bust darts and the flare all sit where your body needs them.', image: 'c43-2' },
  { title: 'Tried on by', hand: 'real women', body: 'Every style is fitted on women who wear that size before it goes on sale. If it pulls at the arm or clings at the tummy, we change the pattern, not the photo.', image: 'c26-2' },
  { title: 'Exchanges,', hand: 'on us', body: 'Sizing online is hard. If your first pick is not perfect, we pick it up from your door and send the right size within 10 days, free.', image: 'c18-2' },
]

export function AboutPage() {
  useDocumentTitle('About us')
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="shell grid items-center gap-12 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="text-[14px] font-extrabold text-rouge">About us</p>
          <h1 className="display mt-3 text-[44px] leading-[1.04] text-ink sm:text-[64px]">
            Love every <span className="hand">curve</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-ink-soft">{aboutBlock.body[0]}</p>
          <Button to="/shop" size="lg" className="mt-8" arrow>
            Shop the collection
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Img id="c47-1" alt="A red gota anarkali" sizes="(min-width: 1024px) 22vw, 50vw" className="bubble aspect-[3/4]" position="50% 20%" />
          <Img id="c21-1" alt="A royal purple anarkali" sizes="(min-width: 1024px) 22vw, 50vw" className="bubble-r mt-14 aspect-[3/4]" position="50% 20%" />
        </div>
      </section>

      <section className="shell pt-24 lg:pt-32">
        <ul className="space-y-16 lg:space-y-24">
          {CHAPTERS.map((c, i) => (
            <li key={c.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? 'lg:order-2' : ''} data-reveal-frame>
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[24px]" position="50% 30%" />
              </div>
              <div data-reveal>
                <h2 className="display text-[32px] text-ink sm:text-[44px]">
                  {c.title} <span className="hand">{c.hand}</span>
                </h2>
                <p className="mt-5 max-w-[48ch] text-[16.5px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-24 lg:pt-32">
        <ul className="grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <li key={p.title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-rouge">
                <Icon name={p.icon} size={22} />
              </span>
              <span>
                <span className="block text-[16px] font-bold text-ink">{p.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{p.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-20 lg:pt-28">
        <h2 className="display text-[30px] text-ink sm:text-[38px]">Where to begin</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={c.to} className="press group inline-flex h-12 items-center gap-3 rounded-full border border-line-strong bg-paper pr-2 pl-5 text-[15px] font-bold text-ink transition-colors hover:border-rouge hover:bg-rouge hover:text-white">
                {c.label}
                <span className="grid size-8 place-items-center rounded-full bg-blush text-rouge transition-transform duration-300 group-hover:-rotate-45">
                  <Icon name="arrow" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
