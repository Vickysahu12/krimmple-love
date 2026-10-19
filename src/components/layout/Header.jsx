import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { quickChips } from '../../config/navigation'
import { useCart } from '../../features/cart/CartContext'
import { useWishlist } from '../../features/wishlist/WishlistContext'
import { useSearch } from '../../features/search/SearchOverlay'
import { Icon } from '../ui/Icon'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { MegaNav, useIsActive } from './MegaNav'
import { cn } from '../../lib/cn'

/** Icon with a tiny label under it (as in the reference), and a count that re-pops on change. */
function Utility({ icon, label, count, bumpKey, onClick, to, className, ...props }) {
  const Tag = to ? Link : 'button'
  return (
    <Tag
      {...(to ? { to } : { type: 'button', onClick })}
      aria-label={count ? `${label}, ${count} items` : label}
      className={cn('group press relative flex h-12 min-w-11 flex-col items-center justify-center gap-0.5 px-1.5 text-ink transition-colors duration-200 hover:text-rouge', className)}
      {...props}
    >
      <Icon name={icon} size={22} className="transition-transform duration-300 ease-[var(--ease-spring)] group-hover:-translate-y-0.5" />
      <span className="hidden text-[11px] font-medium lg:block">{label}</span>
      {count > 0 && (
        <span
          key={bumpKey}
          className={cn(
            'absolute top-0.5 right-0 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-rouge px-1 text-[10px] font-semibold text-paper tabular-nums ring-2 ring-paper',
            bumpKey ? 'anim-bump' : '',
          )}
        >
          {count}
        </span>
      )}
    </Tag>
  )
}

/**
 * Header in the reference's order: logo left, menu centred, utilities with small labels
 * right, and a rouge sale strip running underneath. It floats on a frosted paper sheet once
 * the page scrolls.
 */
export function Header() {
  const cart = useCart()
  const wishlist = useWishlist()
  const { openSearch } = useSearch()
  const isActive = useIsActive()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinel = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    if (sentinel.current) io.observe(sentinel.current)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-px" />
      <header
        className={cn(
          'sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300',
          scrolled ? 'border-transparent bg-paper/88 shadow-[0_14px_34px_-26px_rgb(48_48_48/0.55)] backdrop-blur-xl' : 'border-line bg-paper',
        )}
      >
        <div className="shell grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-[76px] lg:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center">
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="press -ml-2 grid size-11 place-items-center text-ink lg:hidden">
              <Icon name="menu" size={24} />
            </button>
            <span className="hidden lg:block">
              <Logo />
            </span>
          </div>

          <span className="lg:hidden">
            <Logo size="sm" />
          </span>
          <div className="hidden justify-center lg:flex">
            <MegaNav />
          </div>

          <div className="flex items-center justify-end gap-0.5 lg:gap-2">
            <Utility icon="search" label="Search" onClick={openSearch} />
            <Utility icon="user" label="Profile" to="/account" className="hidden sm:flex" />
            <Utility icon="heart" label="Wishlist" to="/wishlist" count={wishlist.count} className="hidden sm:flex" />
            <Utility icon="bag" label="Bag" count={cart.count} bumpKey={cart.addedAt} onClick={() => cart.setOpen(true)} className="-mr-1.5" data-bag-target="" />
          </div>
        </div>

        {/* Phones: swipeable chips */}
        <nav aria-label="Categories" className="lg:hidden">
          <ul className="no-scrollbar flex snap-x scroll-px-4 gap-2 overflow-x-auto px-4 pb-3 sm:px-6">
            {quickChips.map((c) => {
              const active = isActive(c.to)
              return (
                <li key={c.label} className="shrink-0 snap-start">
                  <Link
                    to={c.to}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'press flex h-9 items-center rounded-full border px-4 text-[13px] font-medium transition-colors duration-200',
                      active ? 'border-ink bg-ink text-paper' : c.accent ? 'border-rouge/40 bg-blush text-rouge-deep' : 'border-line-strong text-ink',
                    )}
                  >
                    {c.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
