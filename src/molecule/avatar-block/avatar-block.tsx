import { Image, Link, Text } from '../../atom'

import { TPublicProfile } from '@wowjob/db'
import { avatarFilter } from '@wowjob/type'
import { getProfileFullName } from '@wowjob/util'

type TAvatarImage = typeof avatarFilter.media

export const AvatarBlock = ({
  author,
  pic,
  domain,
  borderWidth = 0,
  // slug,
  width = 32,
  height = 32,
}: {
  author: TPublicProfile['db']['base_client__public_profile']['select']
  pic: string
  domain: string
  slug?: string
  borderWidth?: number
  width?: number
  height?: number
}) => {
  const { thumbnail } = author
  const avatar = (thumbnail as TAvatarImage)['avatar-sm']

  return (
    <Link
      href={`/profile/${author.username}`}
      mobile={{
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        gap: 8,
        alignItems: 'center',
      }}
    >
      <Text
        as="span"
        mobile={{
          whiteSpace: 'nowrap',
          display: 'block',
          // viewTransitionName: `title-${author.username}`,
        }}
      >
        {author.nickname}
      </Text>

      <Image
        src={`//${pic}.${domain}/${avatar.url}`}
        alt={getProfileFullName(author)}
        width={width}
        height={height}
        mobile={{
          borderWidth,
          borderStyle: 'solid',
          borderRadius: '50%',
          // viewTransitionName: `avatar-${author.username}`,
        }}
        theme="dark"
      />
    </Link>
  )
}
