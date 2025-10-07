import type { ReactNode } from 'react'
import { Flex, Link, Text } from '../../atom'
import type { TStyle } from '@wowjob/css'
import { copyrightJSON, type TCopyrightJSON } from '@wowjob/type'

type TLegalItem = {
  text?: string
  label?: string
}
type TLegal = {
  cookie?: TLegalItem
  term?: TLegalItem
  privacy?: TLegalItem
  target?: '_blank' & string
}

export const Footer = async ({
  company = copyrightJSON,
  theme = 'dark',
  legal,
  domainUrl = '',
  children,
}: {
  company?: TCopyrightJSON
  legal?: TLegal
  theme?: TStyle['theme']
  domainUrl?: string
  children?: ReactNode
}) => {
  const {
    copyright,
    company_type,
    address_line_1,
    address_line_2,
    google_map_link,
  } = company

  let legalList: {
    href: string
    label?: string
  }[] = []

  if (legal) {
    legalList = [
      { href: 'cookie', label: legal.cookie?.label },
      { href: 'term', label: legal.term?.label },
      { href: 'privacy', label: legal.privacy?.label },
    ].filter(({ label }) => label)
  }

  const showLegal = legalList.length > 0

  return (
    <Flex theme={theme} mobile={{ padding: 32, alignItems: 'center' }}>
      {showLegal && (
        <Flex
          mobile={{ flexDirection: 'column', alignItems: 'center' }}
          tablet={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          {legalList.map(({ label, href }) => (
            <Link
              href={`${domainUrl}/legal/${href}`}
              key={href}
              mobile={{ padding: [8, 16], viewTransitionName: href }}
              target={legal?.target}
            >
              {label}
            </Link>
          ))}
        </Flex>
      )}

      {children}

      {(company_type || address_line_1) && (
        <Flex mobile={{ alignItems: 'center', gap: 4 }}>
          {company_type && (
            <Text as="span" mobile={{ fontWeight: 700, fontSize: 20 }}>
              {company_type}
            </Text>
          )}

          <Link
            href={google_map_link}
            target="_blank"
            mobile={{ display: 'flex', alignItems: 'center' }}
          >
            {google_map_link && (
              <Text as="span" mobile={{ fontSize: 28 }}>
                📍
              </Text>
            )}

            {address_line_1 && (
              <Text as="span" mobile={{ textDecoration: 'underline' }}>
                {address_line_1}
              </Text>
            )}
          </Link>

          {address_line_2 && <Text as="span">{address_line_2}</Text>}
        </Flex>
      )}

      {copyright && <Text mobile={{ fontStyle: 'italic' }}>{copyright}</Text>}
    </Flex>
  )
}
