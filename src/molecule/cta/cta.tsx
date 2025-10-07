import { Flex, Link, Text } from '../../atom'

import { MarkdownRenderer } from '../markdown-renderer'

export const CTA = ({
  cta_description,
  cta_label,
  cta_link,
  cta_title,
  cta_type,
}: {
  cta_link?: string | null
  cta_title?: string | null
  cta_description?: string | null
  cta_type?: string | null
  cta_label?: string | null
}) => {
  return cta_link ? (
    <Flex
      theme="info"
      mobile={{ borderRadius: 16, overflow: 'hidden', gap: 0 }}
    >
      <Text
        as="h3"
        theme="dark"
        mobile={{
          padding: [8, 16],
          textTransform: 'capitalize',
          fontSize: 20,
        }}
        tablet={{
          fontSize: 28,
        }}
      >
        {cta_title}
      </Text>

      <Flex mobile={{ padding: [8, 16] }}>
        <MarkdownRenderer markdown={cta_description || ''} />
      </Flex>

      <Flex mobile={{ padding: [8, 16] }}>
        <Link
          target={cta_type === 'external' ? '_blank' : undefined}
          theme="error"
          href={cta_link}
          title={cta_title || ''}
          mobile={{
            width: 'fit-content',
            padding: [0, 16],
            height: 48,
            borderRadius: 32,
            fontSize: 16,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
          tablet={{
            fontSize: 24,
          }}
        >
          {cta_label}
        </Link>
      </Flex>
    </Flex>
  ) : null
}
