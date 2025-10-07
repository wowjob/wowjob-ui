import { ComplexIcon, Flex, Link, Text } from '../../atom'

import type { TStyle } from '@wowjob/css'
import { ZoomToolSelector } from '../../molecule'

export const TopMenu = ({
  website_belief,
  website_subtitle,
  website_title,
  linkList = [],
}: {
  website_title?: string
  website_belief?: string
  website_subtitle?: string
  linkList?: {
    label: string
    href: string
    theme?: string | null
    title: string | null
  }[]
}) => {
  const showLinks = linkList && linkList.length > 0

  return (
    <Flex
      mobile={{
        padding: 16,
        width: '100%',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        order: -1,
      }}
      tablet={{
        gap: 16,
        flexDirection: 'row',
      }}
      className="top-menu"
    >
      <Flex
        mobile={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: [0, 12],
        }}
      >
        <Link
          href="/"
          title={website_belief || 'WowJob'}
          mobile={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: [0, 12],
          }}
        >
          <Flex as="span" mobile={{ gridRow: 'span 2' }}>
            <ComplexIcon
              iconName="wowjob-logo"
              nPath={6}
              width={36}
              height={36}
            />
          </Flex>

          {website_title && (
            <Text mobile={{ fontWeight: 'bold', fontSize: 14 }}>
              {website_title}
            </Text>
          )}

          {website_subtitle && (
            <Text mobile={{ lineHeight: 1, fontSize: 12 }}>
              {website_subtitle}
            </Text>
          )}
        </Link>

        <ZoomToolSelector />
      </Flex>

      {showLinks && (
        <Flex
          // mobile={{
          //   display: 'grid',
          //   gap: 4,
          //   fontSize: 18,
          //   fontWeight: 'bold',
          //   padding: 0,
          //   gridColumn: '1/-1',
          //   width: '100%',
          //   direction: 'rtl',
          //   gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 1fr))',
          // }}
          mobile={{
            display: 'flex',
            gap: 4,
            fontSize: 18,
            fontWeight: 'bold',
            padding: 0,
            gridColumn: '1/-1',
            // width: 'max-content',
            justifyContent: 'end',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          as="nav"
        >
          {linkList.map(({ href, label, title, theme }) => (
            <Link
              theme={(theme || 'dark') as TStyle['theme']}
              key={label}
              title={title || ''}
              href={href}
              mobile={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                padding: [0, 16],
                borderRadius: 12,
                flex: '1',
                width: 'fit-content',
              }}
            >
              {label}
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  )
}
