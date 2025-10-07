import './text.css'

import type { TText } from './type'
import { createElement } from 'react'
import { getEnv } from '../../util'
import { getStyle } from '@wowjob/css'

export const Text = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  transitionName,
  title,
  className: customClassName = '',
  as = 'p',
  ...rest
}: TText) => {
  const env = getEnv()
  if (['strong', 'b'].includes(as) && mobile) {
    mobile.display = 'contents'
  }

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: ['wowjob-ui-flex', customClassName].filter(Boolean).join(' '),
  })

  const Component = createElement(
    as,
    {
      className,
      style,
      'data-transition-name': transitionName,
      title,
      ...rest,
    },
    children,
  )

  return Component
}
