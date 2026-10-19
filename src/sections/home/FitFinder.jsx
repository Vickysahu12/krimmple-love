import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { fitChart, sizeChart } from '../../data/content'
import { useToast } from '../../features/toast/Toast'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

export const FIT_KEY = 'krimmple.fit.v1'
const MIN = 38
const MAX = 54

/**
 * Find your fit: drag the tailor's tape to your bust measurement and the size appears, huge,
 * with the matching row lit in the size chart. "Save my size" remembers it, so product pages
 * open with that size already chosen.
 */
export function FitFinder() {
  const reduce = useReducedMotion()
  const navigate = useNavigate()
  const { show } = useToast()
  const [bust, setBust] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(FIT_KEY))?.bust ?? 44
    } catch {
      return 44
    }
  })
  const size = fitChart.find((f) => bust >= f.min && bust < f.max).size
  const pct = ((bust - MIN) / (MAX - MIN)) * 100

  const save = () => {
    try {
      localStorage.setItem(FIT_KEY, JSON.stringify({ bust, size }))
    } catch {
      // storage blocked; the size still shows for this visit
    }
    show({ title: `Saved: you are a ${size}`, body: 'Product pages will open in your size' })
  }

  return (
    <section id="fit" className="shell scroll-mt-32 pt-20 lg:pt-28" aria-labelledby="fit-title">
      <div className="bubble overflow-hidden bg-blush">
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:p-14">
          <div>
            <h2 id="fit-title" className="display text-[34px] text-ink sm:text-[46px]">
              Find your fit in <span className="hand">10 seconds</span>
            </h2>
            <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-ink-soft">Measure around the fullest part of your bust and slide the tape. Every Krimmple size has 2 inches of ease built in, so you never need to size up.</p>

            {/* The tape */}
            <div className="mt-10">
              <div className="relative pt-12">
                <span className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[13px] font-extrabold text-white tabular-nums transition-[left] duration-150 ease-out" style={{ left: `${pct}%` }}>
                  {bust}″
                </span>
                <div className="relative h-14 overflow-hidden rounded-[10px] bg-[#f6d77a] shadow-[inset_0_-2px_0_rgb(0_0_0/0.08)]">
                  <span className="stitch absolute inset-x-0 top-0 [--stitch-ink:var(--color-ink)] [--stitch-opacity:0.55]" />
                  <ol className="absolute inset-x-0 bottom-1.5 flex justify-between px-3 text-[10.5px] font-bold text-ink/70 tabular-nums" aria-hidden="true">
                    {Array.from({ length: (MAX - MIN) / 2 + 1 }, (_, i) => (
                      <li key={i} className="w-0 text-center">
                        <span className="-ml-2 block w-4">{MIN + i * 2}</span>
                      </li>
                    ))}
                  </ol>
                  <span className="absolute inset-y-0 left-0 bg-rouge/15" style={{ width: `${pct}%` }} />
                  <span className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-rouge" style={{ left: `${pct}%` }} />
                </div>
                <label htmlFor="bust" className="sr-only">
                  Bust measurement in inches
                </label>
                <input id="bust" type="range" min={MIN} max={MAX} step={1} value={bust} onChange={(e) => setBust(+e.target.value)} className="tape-range absolute inset-x-0 bottom-0 h-14 w-full cursor-ew-resize opacity-0" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end gap-6">
              <div>
                <p className="text-[13px] font-bold text-ink-soft">Your Krimmple size</p>
                <div className="relative h-[84px] overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.p
                      key={size}
                      className="display text-[80px] leading-none text-rouge"
                      initial={reduce ? { opacity: 0 } : { y: '70%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { y: '-70%', opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {size}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pb-2">
                <Button onClick={save} variant="rouge">
                  <Icon name="heart" size={17} weight="fill" /> Save my size
                </Button>
                <Button onClick={() => navigate('/shop')} variant="ghost" arrow>
                  Shop in {size}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="bubble-r overflow-hidden bg-paper shadow-[0_20px_50px_-36px_rgb(48_48_48/0.5)]">
              <table className="w-full text-left text-[14.5px]">
                <caption className="sr-only">Size chart in inches</caption>
                <thead>
                  <tr className="text-[12.5px] text-ink-soft">
                    {['Size', 'Bust', 'Waist', 'Hip'].map((h) => (
                      <th key={h} scope="col" className="px-5 py-3 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map(([s, ...m]) => (
                    <tr key={s} className={cn('border-t border-line transition-colors duration-300', s === size && 'bg-rouge text-white')}>
                      <td className="px-5 py-2.5 font-extrabold">{s}</td>
                      {m.map((v, i) => (
                        <td key={i} className="px-5 py-2.5 tabular-nums">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Img id="c47-2" alt="" sizes="72px" className="size-[72px] shrink-0 rounded-full" position="50% 20%" />
              <p className="text-[14px] leading-relaxed text-ink-soft">
                <span className="font-bold text-ink">Our models are real sizes.</span> Every product says which size she is wearing, so you can picture it on you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
