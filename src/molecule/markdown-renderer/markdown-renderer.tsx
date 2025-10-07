import { Flex, Link, Text } from '../../atom'
import { Fragment, createElement } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

import rehypeReact from 'rehype-react'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

type TMarkdownRendererMap = {
  markdown: string
}

// markdown-renderer
export const MarkdownRenderer = ({ markdown }: TMarkdownRendererMap) => {
  // map HTML tags → your custom components
  const componentsMap = {
    // layout primitives
    // eslint-disable-next-line
    div: (props: any) => <Flex {...props} />,
    // eslint-disable-next-line
    section: (props: any) => <Flex as="section" {...props} />,
    // eslint-disable-next-line
    article: (props: any) => <Flex as="article" {...props} />,
    // eslint-disable-next-line
    ul: (props: any) => <Flex as="ul" {...props} />,
    // eslint-disable-next-line
    ol: (props: any) => <Flex as="ol" {...props} />,
    table: (props: any) => (
      <Flex
        theme="dark"
        as="table"
        {...props}
        mobile={{
          display: 'table',
          borderSpacing: 16,
        }}
      />
    ),
    td: (props: any) => (
      <Text as="td" mobile={{ padding: 16 }} theme="info" {...props} />
    ),
    th: (props: any) => (
      <Text
        as="th"
        theme="tertiary"
        mobile={{
          padding: 16,
          textAlign: 'start',
          textTransform: 'uppercase',
          fontSize: 20,
        }}
        {...props}
      />
    ),
    // eslint-disable-next-line
    li: (props: any) => <Flex as="li" {...props} />,
    // text primitives
    // eslint-disable-next-line
    p: (props: any) => <Text {...props} />,
    // eslint-disable-next-line
    span: (props: any) => <Text as="span" {...props} />,
    // eslint-disable-next-line
    h1: (props: any) => <Text as="h1" {...props} />,
    // eslint-disable-next-line
    h2: (props: any) => <Text as="h2" {...props} />,
    // eslint-disable-next-line
    h3: (props: any) => <Text as="h3" {...props} />,
    // eslint-disable-next-line
    h4: (props: any) => <Text as="h4" {...props} />,
    // eslint-disable-next-line
    h5: (props: any) => <Text as="h5" {...props} />,
    // eslint-disable-next-line
    h6: (props: any) => <Text as="h6" {...props} />,
    // eslint-disable-next-line
    strong: (props: any) => (
      <Text
        as="strong"
        {...{
          ...props,
          ...{ mobile: { ...props.mobile, display: 'contents' } },
        }}
      />
    ),
    // eslint-disable-next-line
    em: (props: any) => (
      <Text
        as="em"
        {...{
          ...props,
          ...{ mobile: { ...props.mobile, display: 'contents' } },
        }}
      />
    ),
    // links
    // eslint-disable-next-line
    a: ({ href, children, ...rest }: any) => (
      <Link
        href={href}
        {...rest}
        mobile={{
          textDecoration: 'underline',
          padding: [4, 6],
          borderRadius: 4,
        }}
        theme="info"
      >
        {children}
      </Link>
    ),
  }

  const content = unified()
    .use(remarkParse) // markdown → md AST
    .use(remarkGfm) // ✅ enables tables, strikethrough, autolink, task list…
    .use(remarkRehype) // md AST → HTML AST
    .use(rehypeSanitize) // strip dangerous things
    .use(rehypeReact, {
      // HTML AST → React nodes
      createElement: createElement,
      Fragment, // required
      jsx, // required in production
      jsxs, // required in production
      components: componentsMap,
    })
    .processSync(markdown).result

  return content
}
