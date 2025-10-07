import { getStyle } from '@wowjob/css'
import type { TInput } from './input.type'
import { getEnv } from '../../util'
import './input.css'

export const Input = ({
  mobile,
  tablet,
  desktop,
  theme,
  required = true,
  autoComplete = 'off',
  title,
  help,
  ...rest
}: TInput) => {
  const env = getEnv()

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wowjob-ui-input',
    env,
  })
  return (
    <input
      className={className}
      style={style}
      autoComplete={autoComplete}
      title={title}
      required={required}
      {...rest}
    />
  )
}
