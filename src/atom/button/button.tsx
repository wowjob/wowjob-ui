// button/server.tsx
import { getEnv } from '../../util'
import type { TButton } from './type'
import { getStyle } from '@wowjob/css'
import './button.css'

export const Button = ({
  children,
  type = 'button',
  mobile,
  desktop,
  tablet,
  theme,
  label,
  ...rest
}: TButton) => {
  const env = getEnv()

  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: 'wowjob-ui-button',
  })

  const showLabel = label || typeof children === 'string'
  const showChildren = !showLabel

  return (
    <button type={type} style={style} className={className} {...rest}>
      {showLabel && (
        <span className="wowjob-ui-button__label">{label || children}</span>
      )}

      {showChildren && children}
    </button>
  )
}
