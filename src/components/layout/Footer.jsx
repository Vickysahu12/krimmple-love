import { useId, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site } from '../../config/site'
import { perks } from '../../data/content'
import { subscribe } from '../../services/newsletter'
import { Icon } from '../ui/Icon'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()
const PAYMENTS = ['UPI', 'Visa', 'Mastercard', 'RuPay', 'COD']
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Newsletter as in the reference: one field joined to a Subscribe button. */
function Newsletter() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!EMAIL.test(email.trim())) return setError('Please enter a valid email.')
    setError('')
    setState('sending')
    await subscribe(email.trim())
    setState('done')
  }

  if (state === 'done') {
    return (
      <p role="status" className="anim-fade-up bubble flex items-center gap-2 bg-paper px-5 py-4 text-[15px] font-semibold text-ink">
        <span className="size-6 shrink-0" style={{ background: 'url(/brand/heart-bubble.svg) center / contain no-repeat' }} aria-hidden="true" />
        You are on the list. Your 10% code is on its way.
      </p>
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="flex overflow-hidden rounded-full border border-line-strong bg-paper transition-[border-color,box-shadow] focus-within:border-rouge focus-within:shadow-[0_0_0_4px_rgb(227_52_58/0.12)]">
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-invalid={Boolean(error)}
          className="h-12 min-w-0 flex-1 bg-transparent px-5 text-[15px] text-ink outline-none placeholder:text-ink-soft"
        />
        <button type="submit" disabled={state === 'sending'} className="btn m-1 h-10 px-5 text-[13.5px]">
          {state === 'sending' ? 'Subscribing' : 'Subscribe'}
        </button>
      </div>
      <p role="alert" className="mt-2 min-h-5 text-[13px] text-rouge-deep">
        {error}
      </p>
    </form>
  )
}

export function Footer() {
  // The home page shows the perks right under the hero, so the footer skips them there.
  const { pathname } = useLocation()
  return (
    <footer className="mt-24 lg:mt-32">
      <ul hidden={pathname === '/'} className="shell grid grid-cols-2 gap-x-4 gap-y-8 border-y border-line py-10 lg:grid-cols-4">
        {perks.map((s) => (
          <li key={s.title} className="group flex flex-col items-center text-center">
            <span className="grid size-14 place-items-center text-rouge transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-1 group-hover:-rotate-6">
              <Icon name={s.icon} size={26} />
            </span>
            <span className="mt-1 text-[15px] font-bold text-ink">{s.title}</span>
            <span className="mt-0.5 text-[13px] text-ink-soft">{s.body}</span>
          </li>
        ))}
      </ul>

      <div className="mt-16 bg-blush text-ink">
        <div className="shell grid gap-12 py-14 lg:grid-cols-[1.1fr_2fr_1.6fr] lg:gap-10 lg:py-20">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-[32ch] text-[14.5px] leading-relaxed text-ink-soft">{site.footer.blurb}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {site.footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[15px] font-extrabold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="link-line text-[14px] text-ink-soft transition-colors hover:text-rouge">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="display text-[26px]">
              Join the <span className="hand">love list</span>
            </h3>
            <p className="mt-2 mb-5 max-w-[40ch] text-[14px] text-ink-soft">New drops in every size, early access to sales and 10% off your first order.</p>
            <Newsletter />
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Payment methods">
              {PAYMENTS.map((p) => (
                <li key={p} className="rounded-[8px] border border-line-strong bg-paper/60 px-2.5 py-1 text-[12px] font-bold text-ink-soft">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <p className="shell py-5 text-center text-[12.5px] text-ink-soft">
            © {YEAR} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
