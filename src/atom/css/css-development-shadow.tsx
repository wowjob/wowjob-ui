// css-development-shadow.tsx: Granular React component for shadow-embedded style (advanced TS: generics for CSS load)
import { useEffect, useState, type FC } from 'react' // Singular imports for effect/state/FC

type TCssString = string // Granular: Strict string for embedded CSS

// Inline load helper: Vite ?inline yields string (singular entity for all.css; composable async)
const loadCss = async (): Promise<TCssString> => {
  // @ts-ignore – Vite inline import is valid at runtime
  const module = await import('@wowjob/css/all.css?inline') // Vite inline query: Direct string export
  return module.default // Singular entity from module
}

export const CSSDevelopmentShadow: FC = () => {
  const [cssText, setCssText] = useState<TCssString>('') // Singular state entity for CSS

  useEffect(() => {
    // Async load: Composable for await (no .then)
    const loadAsync = async (): Promise<void> => {
      try {
        const loadedCss: TCssString = await loadCss() // Await inline load
        setCssText(loadedCss) // Update state (granular)

        if (import.meta.env.MODE === 'development') {
          // Dev-only log
          // console.log('CSSDevelopmentShadow: Loaded, length:', loadedCss.length) // Debug entity
        }
      } catch (error) {
        console.warn('CSSDevelopmentShadow: Load failed:', error) // Granular error log
      }
    }

    loadAsync() // Fire async (composable; no blocking)
  }, []) // Empty deps: One-time load (composable)

  return <style>{cssText}</style> // Singular entity: Direct JSX render (embeds in shadow when mounted there)
}
