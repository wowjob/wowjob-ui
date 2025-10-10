import { Image, Link, Text } from '../../atom'

import { avatarFilter } from '@wowjob/type'
import { getProfileFullName } from '@wowjob/util'

type TAvatarImage = typeof avatarFilter.media
type TAuthor = {
  id: number
  local_id: string
  created_at: Date
  updated_at: Date
  updated_at_time: number
  thumbnail: unknown
  nickname: string
  username: string
  job_title: string | null
  first_name: string | null
  last_name: string | null
  middle_name: string | null
  bio: string | null
}

export const AvatarBlock = ({
  author,
  pic,
  domain,
  borderWidth = 0,
  // slug,
  width = 32,
  height = 32,
}: {
  author: TAuthor
  pic: string
  domain: string
  slug?: string
  borderWidth?: number
  width?: number
  height?: number
}) => {
  const { thumbnail } = author as TAuthor & {
    thumbnail?: TAvatarImage
  }
  const avatar = thumbnail?.['avatar-sm']

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
        src={`//${pic}.${domain}/${avatar?.url}`}
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
