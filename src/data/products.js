// Demo catalogue built from the client's photos (public/media/products/cNN-1 / cNN-2).
// `n` is the source photo number (src/assets/image/ImgNN). Photos of the same piece shot twice
// become extra gallery images (`more`). `model` is the size the model is wearing.
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Every cut runs XL to 6XL. Prices sit between ₹1,999 and ₹5,999; ratings and copy are sample data.

const SIZES = ['XL', '2XL', '3XL', '4XL', '5XL', '6XL']
const FREE = ['Free size']

const CATEGORY = {
  anarkalis: { sizes: SIZES, includes: 'Anarkali, churidar and dupatta', care: ['Dry clean recommended', 'Store on a padded hanger', 'Iron on low from the reverse'] },
  'kurta-sets': { sizes: SIZES, includes: 'Kurta, pants and dupatta', care: ['Gentle hand wash or dry clean', 'Wash the dupatta separately', 'Dry in shade'] },
  lehengas: { sizes: SIZES, includes: 'Lehenga or sharara, top and dupatta', care: ['Dry clean only', 'Store in the garment bag provided', 'Keep perfume off the embroidery'] },
  sarees: { sizes: FREE, includes: 'Saree with unstitched blouse piece (1 m, enough for up to 6XL)', care: ['Dry clean only', 'Store folded in muslin', 'Steam, do not press the sequins'] },
}

const item = (category) => (p) => ({ category, ...CATEGORY[category], ...p })
const anar = item('anarkalis')
const kset = item('kurta-sets')
const leh = item('lehengas')
const saree = item('sarees')

const raw = [
  anar({ n: 1, name: 'Noor Black Anarkali', fabric: 'Georgette', work: 'Zari border', color: 'Black', hex: '#1d1b1c', occasions: ['festive', 'wedding'], model: '3XL', price: 3999, compareAt: 4999, rating: 4.8, reviews: 214, bestseller: true, badge: 'Bestseller', blurb: 'A full black anarkali with a wide zari-and-thread border that swings when you walk. The bodice is lined and the flare starts just under the bust, so it flatters without clinging.' }),
  anar({ n: 2, name: 'Raat Rani Printed Gown', fabric: 'Chinon', work: 'Foil print', color: 'Black', hex: '#232021', occasions: ['festive'], model: '2XL', price: 3499, rating: 4.7, reviews: 132, blurb: 'A black chinon gown with a gold foil-printed dupatta. Light enough to dance in all night.' }),
  anar({ n: 3, name: 'Emerald Sequin Gown', fabric: 'Georgette', work: 'Sequins', color: 'Emerald', hex: '#0f4d33', occasions: ['wedding', 'festive'], model: '3XL', price: 4799, rating: 4.8, reviews: 98, family: 'sequin-gown', blurb: 'Bottle green georgette scattered with tonal sequins and a sheer sequin dupatta. A sangeet favourite.' }),
  anar({ n: 4, name: 'Midnight Sequin Anarkali', fabric: 'Georgette', work: 'Sequins', color: 'Navy', hex: '#1b2240', occasions: ['wedding', 'festive'], model: '3XL', price: 4799, rating: 4.7, reviews: 76, family: 'sequin-gown', blurb: 'The sequin gown in midnight navy, with a deep flare and full sleeves.' }),
  anar({ n: 5, name: 'Peacock Teal Gown', fabric: 'Silk Blend', work: 'Jacquard', color: 'Teal', hex: '#24566a', occasions: ['festive'], model: '4XL', price: 4299, rating: 4.6, reviews: 61, blurb: 'Teal jacquard silk woven with a soft paisley, finished with a matching dupatta.' }),
  anar({ n: 6, name: 'Peach Blossom Anarkali', fabric: 'Organza', work: 'Thread work', color: 'Peach', hex: '#efb9a3', occasions: ['mehendi', 'festive'], model: '3XL', price: 3999, rating: 4.7, reviews: 88, blurb: 'Soft peach organza with tonal thread flowers and a sheer dupatta. Made for daytime functions.' }),
  anar({ n: 7, name: 'Lavender Gota Anarkali', fabric: 'Georgette', work: 'Gota patti', color: 'Lavender', hex: '#b29ad6', occasions: ['mehendi', 'festive'], model: '2XL', price: 3799, rating: 4.8, reviews: 119, isNew: true, badge: 'New', blurb: 'A lavender anarkali with gota buttis all the way to the hem, and full sleeves.' }),
  kset({ n: 8, name: 'Rust Chevron Kurta Set', fabric: 'Cotton', work: 'Block print', color: 'Rust', hex: '#c4532b', occasions: ['everyday'], model: '3XL', price: 1999, rating: 4.6, reviews: 143, blurb: 'A bold white chevron on rust cotton, straight cut with white pants. For lunches and long days.' }),
  kset({ n: 9, name: 'Mocha Sequin Kurta Set', fabric: 'Georgette', work: 'Sequins', color: 'Mocha', hex: '#5d4a44', occasions: ['festive'], model: '4XL', price: 3299, rating: 4.7, reviews: 67, blurb: 'Mocha brown with all-over sequin embroidery, straight pants and a matching dupatta.' }),
  leh({ n: 10, name: 'Rangeela Sharara Set', fabric: 'Silk Blend', work: 'Mirror work', color: 'Multi', hex: '#2d6b74', occasions: ['mehendi', 'festive'], model: '3XL', price: 4999, rating: 4.8, reviews: 54, badge: 'Limited', blurb: 'A short teal jacket-kurta over a tiered sharara in every colour of a mehendi night.' }),
  leh({ n: 11, name: 'Kesariya Printed Lehenga', fabric: 'Silk Blend', work: 'Digital print', color: 'Multi', hex: '#d0632f', occasions: ['mehendi'], model: '2XL', price: 4499, rating: 4.6, reviews: 47, blurb: 'A Rajasthani-print lehenga in saffron, teal and pink. Wide enough to sit cross-legged in.' }),
  anar({ n: 12, name: 'Indigo Buti Anarkali', fabric: 'Georgette', work: 'Zari buti', color: 'Indigo', hex: '#22305e', occasions: ['festive', 'everyday'], model: '3XL', price: 3499, rating: 4.7, reviews: 92, blurb: 'Deep indigo with gold zari buttis and a heavy border at the hem.' }),
  anar({ n: 13, name: 'Lime Chikankari Anarkali', fabric: 'Georgette', work: 'Chikankari', color: 'Lime', hex: '#b9cf3d', occasions: ['mehendi', 'festive'], model: '3XL', price: 3799, rating: 4.6, reviews: 58, blurb: 'Fresh lime green with fine chikankari and a matching dupatta. Pure mehendi energy.' }),
  saree({ n: 14, name: 'Rose Gold Sequin Saree', fabric: 'Georgette', work: 'Sequins', color: 'Rose Gold', hex: '#c98e7a', occasions: ['wedding', 'festive'], model: 'Free size', price: 3999, compareAt: 4999, rating: 4.8, reviews: 101, bestseller: true, blurb: 'Rose-gold sequin stripes on soft georgette, with a 1 m blouse piece so you can stitch up to 6XL.' }),
  leh({ n: 15, name: 'Blush Organza Lehenga', fabric: 'Organza', work: 'Zari and sequins', color: 'Blush', hex: '#e3b1a8', occasions: ['wedding'], model: '3XL', price: 5999, rating: 4.9, reviews: 43, blurb: 'A full blush lehenga with a scalloped zari dupatta. Our most-asked-for wedding guest look.' }),
  leh({ n: 16, name: 'Saffron Sharara Set', fabric: 'Chanderi', work: 'Gota patti', color: 'Orange', hex: '#d75a2a', occasions: ['mehendi', 'festive'], model: '3XL', price: 4299, rating: 4.7, reviews: 62, blurb: 'A short saffron kurta with gota, over a flared sharara and a printed dupatta.' }),
  leh({ n: 17, name: 'Laal Bandhani Lehenga', fabric: 'Silk Blend', work: 'Bandhani', color: 'Red', hex: '#b7192c', occasions: ['wedding', 'festive'], model: '3XL', price: 5499, rating: 4.8, reviews: 57, blurb: 'Red and rust bandhani with a heavy gota dupatta. Karva Chauth, sorted.' }),
  kset({ n: 18, name: 'Rani Pink Kurta Set', fabric: 'Chanderi', work: 'Thread work', color: 'Rani Pink', hex: '#c0256e', occasions: ['festive', 'everyday'], model: '4XL', price: 2799, rating: 4.7, reviews: 96, blurb: 'Rani pink chanderi with a multicolour embroidered yoke and straight pants.' }),
  leh({ n: 19, name: 'Gulabi Sharara Set', fabric: 'Georgette', work: 'Sequins', color: 'Pink', hex: '#ec5b9a', occasions: ['mehendi', 'festive'], model: '2XL', price: 4499, rating: 4.7, reviews: 71, blurb: 'Bubblegum pink with sequins on the kurta, a flared sharara and a sheer dupatta.' }),
  leh({ n: 20, name: 'Teal Brocade Lehenga', fabric: 'Silk Blend', work: 'Brocade', color: 'Teal', hex: '#1d5367', occasions: ['wedding'], model: '3XL', price: 5799, rating: 4.8, reviews: 38, blurb: 'Teal brocade with a gold-woven lehenga and a sheer dupatta. Big-day energy.' }),
  anar({ n: 21, name: 'Royal Purple Anarkali', fabric: 'Georgette', work: 'Zari', color: 'Purple', hex: '#5a2a85', occasions: ['wedding', 'festive'], model: '3XL', price: 4499, rating: 4.8, reviews: 84, blurb: 'A twirl-ready purple anarkali with a heavy zari hem and full sleeves.' }),
  anar({ n: 22, more: [23], name: 'Fuchsia Jacquard Gown', fabric: 'Silk Blend', work: 'Jacquard', color: 'Fuchsia', hex: '#d22b78', occasions: ['wedding', 'festive'], model: '3XL', price: 4299, compareAt: 5299, rating: 4.7, reviews: 109, bestseller: true, blurb: 'Fuchsia jacquard with a long open jacket that skims over the hips.' }),
  kset({ n: 24, name: 'Maroon Gota Kurta Set', fabric: 'Chanderi', work: 'Gota patti', color: 'Maroon', hex: '#7d1d29', occasions: ['festive', 'everyday'], model: '4XL', price: 2999, rating: 4.7, reviews: 122, family: 'maroon', blurb: 'Maroon chanderi with gota on the yoke and straight pants. Smart enough for any family lunch.' }),
  anar({ n: 25, name: 'Sisters Rust Anarkali', fabric: 'Georgette', work: 'Zari', color: 'Rust', hex: '#b2462c', occasions: ['festive'], model: '2XL', price: 3799, rating: 4.6, reviews: 49, blurb: 'A rust anarkali shown here beside our maroon one. Matching with your sister is optional but encouraged.' }),
  anar({ n: 26, more: [27], name: 'Maroon Zari Anarkali', fabric: 'Georgette', work: 'Zari', color: 'Maroon', hex: '#7b1a2a', occasions: ['wedding', 'festive'], model: '3XL', price: 4499, rating: 4.9, reviews: 167, bestseller: true, badge: 'Bestseller', family: 'maroon', blurb: 'Deep maroon with gold zari flowers and a sheer dupatta. The look that sold out twice.' }),
  kset({ n: 28, name: 'Teal Floral Kurta Set', fabric: 'Cotton Silk', work: 'Print and sequins', color: 'Teal', hex: '#1f4b4e', occasions: ['everyday', 'festive'], model: '3XL', price: 2499, rating: 4.6, reviews: 74, blurb: 'Teal with rose prints and sequin highlights, straight pants and a dupatta.' }),
  kset({ n: 29, name: 'Rust Salwar Suit', fabric: 'Cotton', work: 'Print', color: 'Rust', hex: '#b9442f', occasions: ['everyday'], model: '4XL', price: 2299, rating: 4.5, reviews: 63, blurb: 'A printed rust kurta with a full Patiala salwar. Comfort first.' }),
  kset({ n: 30, name: 'Plum Floral Kurta', fabric: 'Rayon', work: 'Print', color: 'Plum', hex: '#3d2235', occasions: ['everyday'], model: '3XL', price: 1999, rating: 4.6, reviews: 154, bestseller: true, blurb: 'Plum with soft florals and an A-line cut, paired with white pants.' }),
  leh({ n: 31, name: 'Leheriya Lehenga', fabric: 'Georgette', work: 'Leheriya', color: 'Purple', hex: '#7d2c6a', occasions: ['mehendi', 'festive'], model: '3XL', price: 4999, rating: 4.7, reviews: 52, blurb: 'Hand-tied leheriya in plum and pink, with a mirror-work blouse. Shown with our green and mustard pieces.' }),
  anar({ n: 32, name: 'Marigold Leheriya Gown', fabric: 'Georgette', work: 'Leheriya', color: 'Mustard', hex: '#ef9d1a', occasions: ['mehendi', 'festive'], model: '3XL', price: 3799, rating: 4.7, reviews: 66, blurb: 'A marigold leheriya gown with a mirror-work yoke. Haldi is calling.' }),
  anar({ n: 33, name: 'Butter Floral Anarkali', fabric: 'Muslin', work: 'Print', color: 'Butter', hex: '#ece2b2', occasions: ['mehendi', 'everyday'], model: '3XL', price: 2999, rating: 4.6, reviews: 58, blurb: 'Butter yellow muslin with a big floral dupatta. Soft and summery.' }),
  kset({ n: 34, name: 'Garden Print Suit', fabric: 'Muslin', work: 'Print', color: 'Ivory', hex: '#efe0cc', occasions: ['everyday', 'mehendi'], model: '4XL', price: 2499, rating: 4.5, reviews: 47, blurb: 'Ivory muslin in a garden of pink and green, with straight pants.' }),
  anar({ n: 35, name: 'Hot Pink Mirror Anarkali', fabric: 'Georgette', work: 'Mirror work', color: 'Hot Pink', hex: '#e03087', occasions: ['mehendi', 'festive'], model: '3XL', price: 3999, rating: 4.7, reviews: 79, blurb: 'Hot pink with a mirror-work yoke and a sheer dupatta.' }),
  anar({ n: 36, name: 'Nilambari Floral Gown', fabric: 'Silk Blend', work: 'Print', color: 'Blue', hex: '#264a7a', occasions: ['festive'], model: '3XL', price: 3499, rating: 4.6, reviews: 51, blurb: 'Deep blue with big ivory blooms and a zari hem.' }),
  kset({ n: 37, name: 'Camel Classic Kurta', fabric: 'Cotton Flax', work: 'Plain', color: 'Camel', hex: '#c69a6d', occasions: ['everyday'], model: '4XL', price: 1999, rating: 4.5, reviews: 88, blurb: 'A clean camel kurta with a matching dupatta. The everyday hero.' }),
  anar({ n: 38, name: 'Wine Sequin Gown', fabric: 'Georgette', work: 'Sequins', color: 'Wine', hex: '#4c1b39', occasions: ['wedding'], model: '3XL', price: 4799, rating: 4.8, reviews: 63, family: 'sequin-gown', blurb: 'The sequin gown in wine, with a dupatta that catches every light.' }),
  anar({ n: 39, name: 'Haldi Yellow Gown', fabric: 'Georgette', work: 'Gota patti', color: 'Yellow', hex: '#e9c62f', occasions: ['mehendi'], model: '3XL', price: 3799, rating: 4.7, reviews: 72, blurb: 'Bright haldi yellow with gota and a printed dupatta.' }),
  kset({ n: 40, name: 'Night Sequin Kurta Set', fabric: 'Georgette', work: 'Sequins', color: 'Navy', hex: '#1d2033', occasions: ['festive', 'wedding'], model: '4XL', price: 3299, rating: 4.7, reviews: 56, blurb: 'A navy sequin kurta set with a sheer sequin dupatta. Party-ready.' }),
  kset({ n: 41, name: 'Cobalt Zari Kurta Set', fabric: 'Chanderi', work: 'Zari', color: 'Cobalt', hex: '#2b3f86', occasions: ['festive', 'everyday'], model: '3XL', price: 2799, rating: 4.6, reviews: 64, blurb: 'Cobalt blue chanderi with a zari border and a matching dupatta.' }),
  anar({ n: 42, name: 'Mocha Twirl Gown', fabric: 'Georgette', work: 'Zari border', color: 'Mocha', hex: '#9a7465', occasions: ['festive'], model: '3XL', price: 3999, rating: 4.6, reviews: 45, blurb: 'Soft mocha with a deep zari border. Spin once, you will see.' }),
  anar({ n: 43, name: 'Sea Green Tiered Anarkali', fabric: 'Georgette', work: 'Gota patti', color: 'Sea Green', hex: '#2e9a87', occasions: ['mehendi', 'festive'], model: '3XL', price: 4299, rating: 4.8, reviews: 81, isNew: true, badge: 'New', blurb: 'Three tiers of sea green with gota at every hem and bell sleeves.' }),
  leh({ n: 44, name: 'Purple Zari Lehenga', fabric: 'Silk Blend', work: 'Zari', color: 'Purple', hex: '#4b2a85', occasions: ['wedding'], model: '3XL', price: 5499, rating: 4.8, reviews: 49, blurb: 'Purple silk with gold zari and a magenta dupatta.' }),
  kset({ n: 45, name: 'Magenta Sharara Kurta Set', fabric: 'Chanderi', work: 'Thread work', color: 'Magenta', hex: '#c42c73', occasions: ['festive', 'mehendi'], model: '3XL', price: 2999, rating: 4.7, reviews: 77, blurb: 'Magenta with a thread-work yoke and a long dupatta.' }),
  anar({ n: 46, name: 'Sindoori Tiered Anarkali', fabric: 'Georgette', work: 'Zari', color: 'Red', hex: '#c03a2c', occasions: ['wedding', 'festive'], model: '3XL', price: 4299, rating: 4.7, reviews: 58, blurb: 'A sindoori red tiered anarkali with zari bands.' }),
  anar({ n: 47, name: 'Laal Gota Anarkali', fabric: 'Georgette', work: 'Gota patti', color: 'Red', hex: '#d4243c', occasions: ['wedding', 'festive'], model: '3XL', price: 4499, compareAt: 5499, rating: 4.8, reviews: 96, bestseller: true, blurb: 'Red with gota buttis and a scalloped hem. The red you have been looking for.' }),
  anar({ n: 48, name: 'Blue Bandhani Gown', fabric: 'Silk Blend', work: 'Bandhani', color: 'Blue', hex: '#2149a6', occasions: ['festive', 'mehendi'], model: '3XL', price: 3999, rating: 4.7, reviews: 53, blurb: 'Cobalt bandhani with a contrast sea-green yoke and dupatta.' }),
  anar({ n: 49, name: 'Bottle Green Zari Anarkali', fabric: 'Georgette', work: 'Zari', color: 'Green', hex: '#1d4a32', occasions: ['wedding', 'festive'], model: '3XL', price: 4499, rating: 4.8, reviews: 70, blurb: 'Bottle green with zari florals and a long sheer dupatta.' }),
  kset({ n: 50, name: 'Ivory Chikankari Set', fabric: 'Georgette', work: 'Chikankari', color: 'Ivory', hex: '#efe5cc', occasions: ['festive', 'everyday'], model: '3XL', price: 3299, rating: 4.7, reviews: 61, isNew: true, badge: 'New', blurb: 'Ivory chikankari with straight pants and a printed dupatta. Eid, Diwali, every day.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (n) => `c${String(n).padStart(2, '0')}`

export const products = raw.map(({ n, more = [], ...p }) => ({
  id: id(n),
  slug: slugify(p.name),
  images: [`${id(n)}-1`, ...(more.length ? more.map((m) => `${id(m)}-1`) : [`${id(n)}-2`])],
  cut: `Cut for curves, ${p.model === 'Free size' ? 'free size' : 'XL to 6XL'}`,
  ...p,
}))

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
