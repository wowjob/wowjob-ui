import './flex.css'

import type { TFlex } from './flex.type'
import { createElement } from 'react'
import { getEnv } from '../../util'
import { getStyle } from '@wowjob/css'

export const Flex = ({
  mobile,
  tablet,
  desktop,
  children,
  as = 'div',
  theme,
  className: customClassName = '',
  ...rest
}: TFlex) => {
  const env = getEnv()

  const { className, style } = getStyle({
    mobile,
    desktop,
    tablet,
    theme,
    env,
    className: ['wowjob-ui-flex', customClassName].join(' '),
  })

  const FlexComponent = createElement(
    as,
    { className, style, ...rest },
    children,
  )

  return FlexComponent
}
