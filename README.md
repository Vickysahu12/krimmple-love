# Krimmple

A demo storefront for Krimmple, "Love every curve": anarkalis, kurta sets, lehengas, shararas and sarees cut for curves in sizes XL to 6XL. 49 pieces from ₹1,999 to ₹5,999.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - "Just pick your own style" hero with style chips, arrows and swipe.
  - Size marquee, best sellings, and the fit finder (tape slider, size chart, save my size).
  - Our products tabs, about us, feedback corner.
  - Contact form with a video-fitting option, coupon codes and an Instagram wall.
- **Shop:**
  - Category pages, with filters in the URL: fabric, occasion, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, colour siblings and size picker. Your saved size is preselected.
  - "Model wears" fit note, size guide, pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free shipping progress over ₹1,999.
  - Coupons: `CURVES10`, `LOVE500` (₹3,999+), `FESTIVE15` (₹6,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹49).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, about us, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist, orders and saved fit live in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4.
- Motion, Lenis and Phosphor icons.
- Marcellus and Nunito Sans fonts.
