import { useState } from 'react'
import { contact, instagram, offers } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { CopyCode } from '../../components/ui/CopyCode'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Get in touch (ref): the studio card on the left, a short form on the right with an option
 * to book a free video fitting. Then the codes and the #KrimmpleLove wall.
 */
export function GetInTouch() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '', video: true })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!EMAIL.test(form.email.trim())) next.email = 'Please enter a valid email.'
    setErrors(next)
    if (Object.keys(next).length) return
    setSent(true)
  }

  return (
    <section ref={ref} id="contact" className="shell scroll-mt-32 pt-20 lg:pt-28" aria-labelledby="contact-title">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="bubble-r mx-auto w-full max-w-[420px] bg-paper p-4 shadow-[0_24px_60px_-40px_rgb(48_48_48/0.6)]" data-reveal>
          <Img id={contact.image} alt="Inside the Krimmple studio" sizes="420px" className="aspect-[4/3] rounded-[16px]" position="50% 30%" />
          <ul className="mt-5 space-y-3 px-2 pb-2 text-[14.5px]">
            {[
              ['whatsapp', contact.phone, `https://wa.me/${contact.phone.replace(/\D/g, '')}`],
              ['chat', contact.email, `mailto:${contact.email}`],
              ['pin', contact.address, null],
            ].map(([icon, text, href]) => (
              <li key={icon} className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-blush text-rouge">
                  <Icon name={icon} size={17} />
                </span>
                {href ? (
                  <a href={href} className="link-line font-semibold text-ink">
                    {text}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h2 id="contact-title" className="display text-[34px] text-ink sm:text-[44px]">
            Get in <span className="hand">touch</span>
          </h2>
          <p className="mt-2 text-[15.5px] text-ink-soft">Any question about sizing or an order? We reply within a day, usually much sooner.</p>
          {sent ? (
            <div role="status" className="anim-fade-up bubble mt-7 flex items-start gap-4 bg-blush p-6">
              <span className="size-12 shrink-0" aria-hidden="true" style={{ background: 'url(/brand/heart-bubble.svg) center / contain no-repeat' }} />
              <p className="text-[15.5px] leading-relaxed text-ink">
                <span className="block text-[18px] font-extrabold">Thank you, {form.name.split(' ')[0]}.</span>
                {form.video ? 'We will WhatsApp you to set up a free video fitting.' : 'We will write back to you soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="mt-7 grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="sr-only">
                  Your name
                </label>
                <input id="c-name" className="field" placeholder="Your name" value={form.name} onChange={set('name')} aria-invalid={Boolean(errors.name)} autoComplete="name" />
                <p role="alert" className="mt-1 min-h-4 text-[12.5px] text-danger">
                  {errors.name}
                </p>
              </div>
              <div>
                <label htmlFor="c-email" className="sr-only">
                  Your email
                </label>
                <input id="c-email" className="field" type="email" placeholder="Your email" value={form.email} onChange={set('email')} aria-invalid={Boolean(errors.email)} autoComplete="email" />
                <p role="alert" className="mt-1 min-h-4 text-[12.5px] text-danger">
                  {errors.email}
                </p>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-msg" className="sr-only">
                  Your message
                </label>
                <textarea id="c-msg" className="field h-28 py-3" placeholder="Your message" value={form.message} onChange={set('message')} />
              </div>
              <label className="flex cursor-pointer items-center gap-3 text-[14.5px] text-ink sm:col-span-2">
                <input type="checkbox" checked={form.video} onChange={set('video')} className="size-5 accent-[var(--color-rouge)]" />
                Book me a free video fitting on WhatsApp
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" arrow>
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      <ul className="mt-20 grid gap-3 sm:grid-cols-3">
        {offers.map((o) => (
          <li key={o.code} className="bubble flex items-center justify-between gap-3 border border-dashed border-rouge/40 bg-paper px-5 py-4">
            <p className="text-[15px] font-bold text-ink">{o.title}</p>
            <CopyCode code={o.code} />
          </li>
        ))}
      </ul>

      <div className="mt-20 flex flex-col items-center text-center">
        <h2 className="display text-[30px] text-ink sm:text-[40px]">{instagram.tag}</h2>
        <p className="mt-2 text-[15px] text-ink-soft">Tag {instagram.handle} to be featured. Every size, every story.</p>
      </div>
      <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
        {instagram.images.map((id, i) => (
          <li key={id}>
            <a href={instagram.href} target="_blank" rel="noreferrer" aria-label={`Instagram post ${i + 1}`} className="group relative block overflow-hidden rounded-[18px]" data-reveal-frame style={{ '--reveal-delay': `${i * 60}ms` }}>
              <Img id={id} alt="" sizes="(min-width: 1024px) 16vw, 33vw" className="aspect-square" position="50% 20%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-rouge/0 transition-colors duration-300 group-hover:bg-rouge/45">
                <span className="size-10 scale-50 opacity-0 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100" style={{ background: 'url(/brand/heart-bubble-white.svg) center / contain no-repeat' }} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
