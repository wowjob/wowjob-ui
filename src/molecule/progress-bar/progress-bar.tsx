import { Flex, Text } from '../../atom'

export const ProgressBar = ({
  progressText,
  progress,
  width = 240,
}: {
  progressText: string
  progress: number
  width?: number
}) => {
  return progress > 0 ? (
    <Flex
      mobile={{
        width,
        height: 28,
        borderRadius: 32,
        padding: 4,
        position: 'relative',
      }}
      theme="dark"
    >
      <Text
        mobile={{
          position: 'absolute',
          top: 2,
          left: 0,
          color: 'white',
          fontSize: 16,
          width,
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
      >
        {progressText}
      </Text>

      <Flex
        mobile={{
          width: `${progress}%`,
          height: '100%',
          borderRadius: 32,
          overflow: 'hidden',
          position: 'relative',
          // opacity: 0.2,
        }}
        theme="success"
      >
        <Text
          mobile={{
            position: 'absolute',
            top: -2,
            left: 0,
            color: 'black',
            fontSize: 16,
            width,
            textAlign: 'center',
            fontFamily: 'monospace',
          }}
        >
          {progressText}
        </Text>
      </Flex>
    </Flex>
  ) : null
}
