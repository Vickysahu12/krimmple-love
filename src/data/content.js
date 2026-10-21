// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (cNN-1 full look, cNN-2 close crop).

// Hero: "Just pick your own style" (ref). Each style shows three looks, the middle one large.
export const heroStyles = [
  { id: 'anarkali', label: 'Anarkali', images: ['c21-1', 'c26-1', 'c47-1'], productId: 'c26', to: '/shop/anarkalis' },
  { id: 'lehenga', label: 'Lehenga', images: ['c17-1', 'c15-1', 'c20-1'], productId: 'c15', to: '/shop/lehengas' },
  { id: 'kurta', label: 'Kurta set', images: ['c18-1', 'c24-1', 'c41-1'], productId: 'c24', to: '/shop/kurta-sets' },
  { id: 'sharara', label: 'Sharara', images: ['c16-1', 'c19-1', 'c10-1'], productId: 'c19', to: '/shop/lehengas' },
  { id: 'saree', label: 'Saree', images: ['c38-1', 'c14-1', 'c03-1'], productId: 'c14', to: '/shop/sarees' },
]

export const sizeRun = ['XL', '2XL', '3XL', '4XL', '5XL', '6XL']

export const perks = [
  { icon: 'ruler', title: 'Cut for curves', body: 'Patterns drafted for XL to 6XL, not stretched' },
  { icon: 'returns', title: 'Free size exchange', body: 'Within 10 days, pickup from home' },
  { icon: 'cash', title: 'Cash on delivery', body: 'Pay when it arrives' },
  { icon: 'truck', title: 'Free shipping', body: 'On orders above ₹1,999' },
]

export const categoryLabels = {
  anarkalis: 'Anarkalis',
  'kurta-sets': 'Kurta Sets',
  lehengas: 'Lehengas & Shararas',
  sarees: 'Sarees',
}

export const categorySingular = {
  anarkalis: 'Anarkali',
  'kurta-sets': 'Kurta Set',
  lehengas: 'Lehenga Set',
  sarees: 'Saree',
}

export const categories = [
  { id: 'anarkalis', label: 'Anarkalis', image: 'c26-1', to: '/shop/anarkalis' },
  { id: 'kurta-sets', label: 'Kurta Sets', image: 'c24-1', to: '/shop/kurta-sets' },
  { id: 'lehengas', label: 'Lehengas & Shararas', image: 'c15-1', to: '/shop/lehengas' },
  { id: 'sarees', label: 'Sarees', image: 'c14-1', to: '/shop/sarees' },
]

// "Occasion" is stored in each product's `occasions`.
export const occasionLabels = {
  wedding: 'Wedding',
  festive: 'Festive',
  mehendi: 'Mehendi & Haldi',
  everyday: 'Everyday',
}

export const occasions = [
  { id: 'wedding', label: 'Weddings', image: 'c15-1', to: '/shop?occasion=wedding' },
  { id: 'festive', label: 'Festive', image: 'c21-1', to: '/shop?occasion=festive' },
  { id: 'mehendi', label: 'Mehendi & Haldi', image: 'c13-1', to: '/shop?occasion=mehendi' },
  { id: 'everyday', label: 'Everyday', image: 'c30-1', to: '/shop?occasion=everyday' },
]

// "Our Products" tabs (ref: Festive formals, Bridal, Luxury, New arrivals, Wedding formals).
export const collectionTabs = [
  { id: 'festive', label: 'Festive', query: { occasion: ['festive'], sort: 'rating' } },
  { id: 'wedding', label: 'Wedding', query: { occasion: ['wedding'], sort: 'rating' } },
  { id: 'mehendi', label: 'Mehendi', query: { occasion: ['mehendi'], sort: 'rating' } },
  { id: 'everyday', label: 'Everyday', query: { occasion: ['everyday'], sort: 'rating' } },
  { id: 'new', label: 'New arrivals', query: { sort: 'new' } },
]

// Fit finder: body bust in inches -> size. Garments carry about 2 inches of ease on top.
export const fitChart = [
  { size: 'XL', min: 0, max: 41 },
  { size: '2XL', min: 41, max: 43 },
  { size: '3XL', min: 43, max: 45 },
  { size: '4XL', min: 45, max: 47 },
  { size: '5XL', min: 47, max: 49 },
  { size: '6XL', min: 49, max: 99 },
]

export const aboutBlock = {
  image: 'c25-1',
  title: 'Made by curvy women, for curvy women',
  body: [
    'Krimmple started with three sisters who were tired of hearing “we do not have that in your size”. So we drafted every pattern from the start for real bodies from XL to 6XL, with room at the arms, the bust and the hips, and a flare that begins where it should.',
    'Every piece is tried on by women who wear that size before it reaches you. If it does not sit right, we change the pattern, not the model.',
  ],
}

// Sample customer notes (demo content), each linked to what she wore.
export const testimonials = [
  { name: 'Ritika Bansal', city: 'Delhi', size: '4XL', rating: 5, productId: 'c26', text: 'For the first time I did not have to get an outfit altered for a wedding. The arms fit, the bust fits, and I danced all night.' },
  { name: 'Shabnam Ali', city: 'Lucknow', size: '5XL', rating: 5, productId: 'c22', text: 'The fuchsia gown made me feel like the bride’s favourite cousin. Which I am.' },
  { name: 'Deepa Nair', city: 'Kochi', size: '3XL', rating: 5, productId: 'c14', text: 'A 1 metre blouse piece! Finally a saree that thought about women like me.' },
  { name: 'Harleen Kaur', city: 'Amritsar', size: '6XL', rating: 4, productId: 'c24', text: 'Ordered my usual 6XL and it fit perfectly. The size exchange was easy when I wanted a second colour.' },
  { name: 'Ananya Ghosh', city: 'Kolkata', size: '2XL', rating: 5, productId: 'c43', text: 'The tiers on the sea green anarkali are so pretty. Light, flowy and it does not cling anywhere.' },
]

export const contact = {
  image: 'c09-1',
  phone: '+91 98290 45512',
  email: 'love@krimmple.in',
  address: 'Studio 4, C-Scheme, Jaipur',
}

export const offers = [
  { title: '10% off everything', code: 'CURVES10' },
  { title: '₹500 off above ₹3,999', code: 'LOVE500' },
  { title: '15% off above ₹6,999', code: 'FESTIVE15' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Pooja R.', rating: 5, title: 'Fits like it was made for me', text: 'Room at the arms and the bust, and the length is perfect. No alterations needed.' },
  { name: 'Nazia K.', rating: 5, title: 'Finally, my size', text: 'I ordered 5XL and it fit exactly as the chart said. The fabric is lovely and not see-through.' },
  { name: 'Smita J.', rating: 4, title: 'Beautiful, a little long', text: 'I am 5 feet 1, so I wore heels. The flare is gorgeous.' },
  { name: 'Komal T.', rating: 5, title: 'Got so many compliments', text: 'Wore it to my cousin’s engagement. Everyone asked where it was from.' },
  { name: 'Sonal M.', rating: 4, title: 'Great quality', text: 'Neat stitching and soft lining. Delivery took four days.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u2499', label: 'Under ₹2,500', min: 0, max: 2499 },
  { id: '2500-3499', label: '₹2,500 to ₹3,499', min: 2500, max: 3499 },
  { id: '3500-4499', label: '₹3,500 to ₹4,499', min: 3500, max: 4499 },
  { id: '4500-5999', label: '₹4,500 and above', min: 4500, max: 5999 },
]

// Body measurements in inches: bust, waist, hip.
export const sizeChart = [
  ['XL', '42', '36', '46'],
  ['2XL', '44', '38', '48'],
  ['3XL', '46', '40', '50'],
  ['4XL', '48', '42', '52'],
  ['5XL', '50', '44', '54'],
  ['6XL', '52', '46', '56'],
]
