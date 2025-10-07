import { Flex, Image } from '@wowjob/ui'

import type { TImageConfig } from '@wowjob/type'
import type { TPicture } from './type'
import { mediaTypeMap } from '@wowjob/type'

export const Picture = ({
  mobile,
  tablet,
  desktop,
  theme,
  alt,
  src,
  srcTablet,
  srcDesktop,
  height,
  width,
  fetchPriority,
}: TPicture) => {
  const extension = src.split('.').reverse()[0] as TImageConfig['type']
  const type =
    extension in mediaTypeMap ? mediaTypeMap[extension] : mediaTypeMap['webp']

  return (
    <Flex as="picture" mobile={{ height: '100%', display: 'block' }}>
      {srcDesktop && (
        <source srcSet={srcDesktop} type={type} media="(min-width: 64rem)" />
      )}

      {srcTablet && (
        <source srcSet={srcTablet} type={type} media="(min-width: 48rem)" />
      )}

      <Image
        src={src}
        alt={alt}
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        width={width}
        height={height}
        theme={theme}
        fetchPriority={fetchPriority}
      />
    </Flex>
  )
}
