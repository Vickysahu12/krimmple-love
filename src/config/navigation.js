// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'shop',
    label: 'Products',
    to: '/shop',
    columns: [
      {
        title: 'Categories',
        items: [
          { label: 'Anarkalis', desc: 'Flare that flatters', image: 'c26-1', to: '/shop/anarkalis' },
          { label: 'Kurta Sets', desc: 'Every day, every size', image: 'c24-1', to: '/shop/kurta-sets' },
          { label: 'Lehengas & Shararas', desc: 'For the big nights', image: 'c15-1', to: '/shop/lehengas' },
          { label: 'Sarees', desc: 'Free size, 1 m blouse', image: 'c14-1', to: '/shop/sarees' },
          { label: 'New arrivals', desc: 'Fresh this week', image: 'c43-1', to: '/shop?sort=new' },
        ],
      },
    ],
    feature: { image: 'c26-1', title: 'The Maroon Zari Anarkali is back in every size', to: '/product/maroon-zari-anarkali' },
  },
  {
    id: 'occasion',
    label: 'Occasions',
    to: '/shop',
    columns: [
      {
        title: 'Dress for',
        items: [
          { label: 'Weddings', desc: 'Sangeet to pheras', image: 'c15-1', to: '/shop?occasion=wedding' },
          { label: 'Festive', desc: 'Diwali, Eid, Teej', image: 'c21-1', to: '/shop?occasion=festive' },
          { label: 'Mehendi & Haldi', desc: 'Colour and twirl', image: 'c13-1', to: '/shop?occasion=mehendi' },
          { label: 'Everyday', desc: 'Lunches, office, errands', image: 'c30-1', to: '/shop?occasion=everyday' },
          { label: 'Bestsellers', desc: 'Loved on repeat', image: 'c01-1', to: '/shop?bestseller=1' },
        ],
      },
    ],
    feature: { image: 'c15-1', title: 'The Blush Organza Lehenga, our wedding-guest favourite', to: '/product/blush-organza-lehenga' },
  },
]

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/#love' },
  { label: 'Contact', to: '/#contact' },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Anarkalis', to: '/shop/anarkalis' },
  { label: 'Kurta Sets', to: '/shop/kurta-sets' },
  { label: 'Lehengas', to: '/shop/lehengas' },
  { label: 'Sarees', to: '/shop/sarees' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
