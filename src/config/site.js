// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'Krimmple',
  tagline: 'Love every curve',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 1999,
  shippingFee: 79,
  codFee: 49,
  stitchFee: 0,
  orderPrefix: 'KR',
  instagram: '@krimmple.love',
  phone: '+91 98290 45512',
  email: 'love@krimmple.in',

  announcements: [
    'Sizes XL to 6XL · Free size exchange',
    'Free shipping on orders above ₹1,999',
    'Extra 10% off with code CURVES10',
  ],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    CURVES10: { type: 'percent', value: 10, label: '10% off everything' },
    LOVE500: { type: 'flat', value: 500, label: '₹500 off orders above ₹3,999', min: 3999 },
    FESTIVE15: { type: 'percent', value: 15, label: '15% off orders above ₹6,999', min: 6999 },
  },

  footer: {
    blurb: 'Anarkalis, kurta sets, lehengas and sarees cut for curves, in sizes XL to 6XL. Made for women who never want to settle for a fit again.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Anarkalis', to: '/shop/anarkalis' },
          { label: 'Kurta Sets', to: '/shop/kurta-sets' },
          { label: 'Lehengas & Shararas', to: '/shop/lehengas' },
          { label: 'Sarees', to: '/shop/sarees' },
          { label: 'New arrivals', to: '/shop?sort=new' },
        ],
      },
      {
        title: 'Information',
        links: [
          { label: 'Find my fit', to: '/#fit' },
          { label: 'Return & exchange', to: '/help#returns' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'FAQs', to: '/help' },
          { label: 'Track your order', to: '/account' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About us', to: '/about' },
          { label: 'Testimonials', to: '/#love' },
          { label: 'Contact us', to: '/#contact' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
      { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
      { label: 'Pinterest', icon: 'pinterest', href: 'https://pinterest.com' },
      { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    ],
  },
}
