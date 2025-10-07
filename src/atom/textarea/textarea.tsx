import { getEnv } from '../../util'
import type { TTextarea } from './textarea.type'
import { getStyle } from '@wowjob/css'
import './textarea.css'

export const Textarea = ({
  mobile,
  tablet,
  desktop,
  theme,
  autoComplete = 'off',
  title,
  ...rest
}: TTextarea) => {
  const env = getEnv()

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: 'wowjob-ui-textarea',
  })

  return (
    <textarea
      className={className}
      style={style}
      title={title}
      autoComplete={autoComplete}
      {...rest}
    />
  )
}
