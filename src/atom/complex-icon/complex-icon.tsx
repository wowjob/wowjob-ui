import { createElement, type ReactNode } from 'react'
import type { TComplexIcon } from './type'
import { getStyle } from '@wowjob/css'
import { getEnv } from '../../util'
import './complex-icon.css'

export const ComplexIcon = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  iconName = '',
  nPath,
  size = 40,
  as = 'span',
  ...rest
}: TComplexIcon) => {
  const env = getEnv()

  if (mobile) {
    mobile.fontSize = size - 4
  } else {
    mobile = { fontSize: size - 4 }
  }

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: `wowjob-ui-complex-icon complex-icon-${iconName}`,
  })

  let pathComponent: ReactNode = []
  if (nPath) {
    pathComponent = Array.from({ length: nPath }, (_, k) => (
      <span className={`path${k + 1}`} />
    ))
  }

  const Component = createElement(
    as,
    {
      className,
      style,
      ...rest,
    },
    children,
    ...pathComponent,
  )

  return Component
}
