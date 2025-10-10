// css-production-shadow.tsx: Granular React component for shadow-embedded style (advanced TS: generics for CSS load)
import { useEffect, useState, type FC } from 'react' // Singular imports for effect/state/FC

type TCssString = string // Granular: Strict string for embedded CSS

// Inline load helper: Vite ?inline yields string (singular entity for all.min.css; composable async)
const loadCss = async (): Promise<TCssString> => {
  // @ts-ignore – Vite inline import is valid at runtime
  // const module = await import('@wowjob/css/all.min.css?inline') // Vite inline query: Direct string export
  const module = await import('@wowjob/css/all.min.css')
  return module.default // Singular entity from module
}

export const CSSProductionShadow: FC = () => {
  const [cssText, setCssText] = useState<TCssString>('') // Singular state entity for CSS

  useEffect(() => {
    // Async load: Composable for await (no .then)
    const loadAsync = async (): Promise<void> => {
      try {
        const loadedCss: TCssString = await loadCss() // Await inline load
        setCssText(loadedCss) // Update state (granular)
      } catch (error) {
        // Prod-safe: Silent fail (no warn for minified)
      }
    }

    loadAsync() // Fire async (composable; no blocking)
  }, []) // Empty deps: One-time load (composable)

  return <style>{cssText}</style> // Singular entity: Direct JSX render (embeds in shadow when mounted there)
}
