// button/server.tsx
import { getStyle } from '@wowjob/css'
import { Flex } from '../../atom'
import type { TButtonGroup } from './type'
import { getEnv } from '../../util'
import './button-group.css'

export const ButtonGroup = ({
  children,
  mobile,
  tablet,
  desktop,
  theme,
}: TButtonGroup) => {
  const env = getEnv()
  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    className: 'wowjob-ui-button-group',
    theme,
    env,
  })

  return (
    <Flex style={style} className={className}>
      {children}
    </Flex>
  )
}
