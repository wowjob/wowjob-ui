const propMapConfig = {
  padding: '--p',
  margin: '--m',
  border: '--b',
  background: '--bg',
  backgroundColor: '--bgc',
  color: '--c',
  font: '--f',
  fontSize: '--fs',
  lineHeight: '--lh',
  letterSpacing: '--ls',
  width: '--w',
  height: '--h',
  minWidth: '--miw',
  minHeight: '--mih',
  maxWidth: '--maw',
  maxHeight: '--mah',
  boxShadow: '--bs',
  textShadow: '--ts',
}

type TCSSPropKey = keyof typeof propMapConfig

export const getCssPropMap = (propMap: Record<string, string | number>) => {
  const objectEntryList = Object.entries(propMap) as [
    TCSSPropKey,
    string | number
  ][]

  const newObject = Object.fromEntries(
    objectEntryList.map(([key, value]) => [
      propMapConfig[key],
      typeof value === 'number' ? `${value / 16}rem` : value,
    ])
  )

  console.log(newObject)
  console.log('newObject')

  return newObject
}
