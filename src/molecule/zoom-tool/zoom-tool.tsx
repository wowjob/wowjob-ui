import './zoom-tool.css'

import { Flex, Text } from '../../atom'

const zoomLevelList = [
  { defaultChecked: false, label: 'small', value: 1 },
  { defaultChecked: true, label: 'normal', value: 1.5 },
  { defaultChecked: false, label: 'big', value: 2 },
  { defaultChecked: false, label: 'large', value: 2.5 },
  { defaultChecked: false, label: 'giant', value: 3 },
]

export const ZoomToolController = () => {
  return (
    <>
      {zoomLevelList.map(({ label, value, defaultChecked }) => (
        <input
          key={label}
          type="radio"
          name="zoom-tool"
          data-zoom={value}
          id={`zoom-tool-${value}`}
          aria-labelledby={`zoom-tool-selector-${value}`}
          defaultValue={value}
          defaultChecked={defaultChecked}
          className="zoom-tool-input"
          // @ts-expect-error
          transition:persist={`zoom-tp-${value}`}
        />
      ))}
    </>
  )
}

export const ZoomToolSelector = () => {
  return (
    <Flex
      mobile={{ flexDirection: 'row', justifySelf: 'end', display: 'none' }}
      tablet={{ display: 'flex', position: 'relative' }}
    >
      {zoomLevelList.map(({ label, value }, index) => (
        <Text
          as="label"
          key={label}
          id={`zoom-tool-selector-${value}`}
          htmlFor={`zoom-tool-${value}`}
          className="zoom-tool-label"
          theme="info"
        >
          <Text as="span" className="visually-hidden">
            Current zoom: {value}
          </Text>

          <Text
            theme="primary"
            as="span"
            mobile={{
              fontSize: 8,
              borderRadius: '50%',
              width: 16,
              height: 16,
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              bottom: -2,
              right: -2,
            }}
          >
            {zoomLevelList[index ? index - 1 : zoomLevelList.length - 1].value}
          </Text>
        </Text>
      ))}
    </Flex>
  )
}
