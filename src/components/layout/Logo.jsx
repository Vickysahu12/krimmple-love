import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's logo (public/brand): the charcoal and coral K, the wordmark and the heart
// bubble. On hover the heart bubble gives a small hop. `light` swaps the charcoal for white.
export function Logo({ className, light, size = 'md' }) {
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group relative inline-flex items-center', className)}>
      <img
        src={light ? '/brand/logo-light.png' : '/brand/logo.png'}
        alt={site.name}
        width={500}
        height={125}
        draggable={false}
        className={cn('w-auto', size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14' : 'h-9 lg:h-10')}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[50.2%] aspect-square w-[12.4%] -translate-y-0.5 opacity-0 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-2 group-hover:opacity-100"
        style={{ background: 'url(/brand/heart-bubble.svg) center / contain no-repeat' }}
      />
    </Link>
  )
}
