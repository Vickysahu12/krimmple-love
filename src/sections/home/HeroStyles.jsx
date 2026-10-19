import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { heroStyles, sizeRun } from '../../data/content'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const DURATION = 6000
const ease = [0.23, 1, 0.32, 1]

/**
 * "Just pick your own style" (ref): a wide band of three looks, the middle one large with the
 * promise over it, arrows at the edges, and style chips underneath. Picking a style (or the
 * timer underline running out) swaps all three: the side looks slide in from their edges and
 * the centre settles from a slight zoom. Hover holds the timer; swipe works on touch.
 */
export function HeroStyles() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const startX = useRef(null)
  const style = heroStyles[index]
  const count = heroStyles.length
  const go = (i, d = i > index ? 1 : -1) => {
    setDir(d)
    setIndex((i + count) % count)
  }

  return (
    <section className="group/hero pt-3 sm:pt-5" aria-roledescription="carousel" aria-label="Pick your style">
      <div
        className="relative mx-auto max-w-[1440px] px-3 sm:px-5"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current == null) return
          const dx = e.clientX - startX.current
          startX.current = null
          if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
        }}
      >
        <div className="relative grid h-[clamp(540px,calc(100svh-210px),760px)] grid-cols-1 gap-3 overflow-hidden rounded-[28px] md:grid-cols-[1fr_1.3fr_1fr]">
          {style.images.map((id, k) => (
            <div key={k} className={cn('relative overflow-hidden rounded-[24px] bg-sand', k !== 1 && 'hidden md:block')}>
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={`${style.id}-${k}`}
                  className="absolute inset-0"
                  initial={reduce ? { opacity: 0 } : k === 1 ? { opacity: 0, scale: 1.08 } : { opacity: 0, x: `${(k === 0 ? -1 : 1) * 14}%` }}
                  animate={{ opacity: 1, scale: 1, x: '0%' }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.9, ease, delay: reduce ? 0 : [0.08, 0, 0.16][k] }}
                >
                  <Img id={id} alt="" sizes={k === 1 ? '(min-width: 768px) 40vw, 100vw' : '30vw'} priority={index === 0} className="h-full w-full" position="50% 22%" imgClassName="scale-[1.02] transition-transform duration-[8000ms] ease-out group-hover/hero:scale-100" />
                </motion.div>
              </AnimatePresence>
              {k !== 1 && <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ink/15" />}
            </div>
          ))}

          {/* The promise, over the middle look */}
          <div className="pointer-events-none absolute inset-0 grid place-items-end md:grid-cols-[1fr_1.3fr_1fr]">
            <div className="relative col-start-1 h-full w-full md:col-start-2">
              <div aria-hidden="true" className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgb(30_28_28/0.05)_30%,rgb(30_28_28/0.72)_100%)]" />
              <div className="pointer-events-auto absolute inset-x-0 bottom-0 p-6 text-center text-white sm:p-10">
                <p className="bubble mx-auto inline-flex items-center gap-2 bg-white px-3.5 py-1.5 text-[12.5px] font-extrabold text-ink">
                  <span className="size-4" aria-hidden="true" style={{ background: 'url(/brand/heart-bubble.svg) center / contain no-repeat' }} />
                  Every style in XL to 6XL
                </p>
                <h1 className="display mt-4 text-[44px] leading-[1.02] [text-shadow:0_2px_30px_rgb(0_0_0/0.25)] sm:text-[60px] lg:text-[clamp(56px,5vw,80px)]">
                  Love every <span className="text-[#ff6b70]">curve</span>
                </h1>
                <p className="mx-auto mt-3 max-w-[38ch] text-[15.5px] text-white/85">Anarkalis, lehengas, kurta sets and sarees drafted for real bodies, not stretched to fit them.</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Button to={style.to} variant="light" size="lg" arrow>
                    Shop {style.label.toLowerCase()}s
                  </Button>
                  <Button to="/#fit" variant="outline-light" size="lg">
                    Find my size
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          {[
            [-1, 'caret-left', 'Previous style', 'left-4'],
            [1, 'caret-right', 'Next style', 'right-4'],
          ].map(([d, icon, label, pos]) => (
            <button
              key={d}
              type="button"
              onClick={() => go(index + d, d)}
              aria-label={label}
              className={cn('press absolute top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-float backdrop-blur-sm transition-colors hover:bg-rouge hover:text-white md:grid', pos)}
            >
              <Icon name={icon} size={18} weight="bold" />
            </button>
          ))}
        </div>

        {/* Style chips with a timer underline */}
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p className="display text-[19px] text-ink">Just pick your own style</p>
          <ul className="no-scrollbar flex max-w-full gap-2 overflow-x-auto px-1">
            {heroStyles.map((s, i) => {
              const on = i === index
              return (
                <li key={s.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={on}
                    className={cn('press relative flex h-11 items-center gap-2 overflow-hidden rounded-full border pr-4 pl-1.5 text-[14px] font-bold transition-colors duration-300', on ? 'border-ink bg-ink text-white' : 'border-line-strong bg-paper text-ink hover:border-rouge hover:text-rouge')}
                  >
                    <Img id={s.images[1]} alt="" sizes="32px" className="size-8 rounded-full" position="50% 15%" />
                    {s.label}
                    {on && (
                      <span
                        key={`${s.id}-${index}`}
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-rouge group-hover/hero:[animation-play-state:paused]"
                        style={reduce ? { transform: 'scaleX(1)' } : { animation: `progress ${DURATION}ms linear forwards` }}
                        onAnimationEnd={() => go(index + 1, 1)}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* The size run, on repeat */}
      <div className="marquee mt-8 overflow-hidden bg-rouge py-3 text-white" aria-label={`Sizes ${sizeRun.join(', ')}`}>
        <div className="marquee-track flex w-max items-center gap-8 [--marquee-duration:32s]" aria-hidden="true">
          {Array.from({ length: 4 }).flatMap((_, r) =>
            [...sizeRun, 'Love every curve'].map((s, i) => (
              <span key={`${r}-${i}`} className="flex items-center gap-8">
                <span className={cn('whitespace-nowrap', s.length > 4 ? 'display text-[20px]' : 'text-[18px] font-extrabold tracking-wide')}>{s}</span>
                <span className="size-5 shrink-0" style={{ background: 'url(/brand/heart-bubble-white.svg) center / contain no-repeat' }} />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
