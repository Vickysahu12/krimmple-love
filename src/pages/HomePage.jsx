import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroStyles } from '../sections/home/HeroStyles'
import { BestSellings } from '../sections/home/BestSellings'
import { FitFinder } from '../sections/home/FitFinder'
import { OurProducts } from '../sections/home/OurProducts'
import { AboutUs } from '../sections/home/AboutUs'
import { FeedbackCorner } from '../sections/home/FeedbackCorner'
import { GetInTouch } from '../sections/home/GetInTouch'

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroStyles />
      <BestSellings />
      <FitFinder />
      <OurProducts />
      <AboutUs />
      <FeedbackCorner />
      <GetInTouch />
    </>
  )
}
