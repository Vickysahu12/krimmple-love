// Media manifest. Product photos are 3:4 and live in public/media/products as <id>.webp
// (960 x 1280) and <id>-s.webp (480 x 640), cropped from the client's square originals. `-1`
// is the full look, `-2` a close crop of the embroidery. tones.json holds each photo's average
// colour as a placeholder.
import tones from './tones.json'

export const imageSet = (id) => ({
  id,
  src: `/media/products/${id}.webp`,
  srcSm: `/media/products/${id}-s.webp`,
  tone: tones[id] ?? 'var(--color-sand)',
})
