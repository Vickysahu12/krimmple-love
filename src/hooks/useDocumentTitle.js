import { useEffect } from 'react'
import { site } from '../config/site'

/** Sets the tab title: "Page | Krimmple", or the brand line on the home page. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | Ethnic Wear for Curves, XL to 6XL`
  }, [title])
}
