import type { TEnv } from '@wowjob/css'

export const getEnv = (): TEnv => {
  if (
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    typeof import.meta.env.MODE === 'string'
  ) {
    return import.meta.env.MODE as TEnv
  }

  return 'development'
}
