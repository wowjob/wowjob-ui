import type { TTextareaField } from './type'
// import { ToastEditorClient } from '../toast-editor/toast-editor'
import { Flex, Link, Text, Textarea } from '../../atom'
import type { TTextarea } from '../../atom/textarea/textarea.type'

export const TextareaField = ({
  mobile,
  tablet,
  desktop,
  theme,
  label,
  info,
  name,
  link,
  errorList = [],
  ...rest
}: TTextareaField) => {
  const showErrorList = errorList.length > 0

  return (
    <Flex mobile={{ gap: 4, width: '100%' }}>
      {label && !['checkbox', 'radio'].includes(rest.type || 'text') ? (
        <Text as="label" htmlFor={name} mobile={{ fontStyle: 'italic' }}>
          {label}
        </Text>
      ) : null}

      {rest.type === 'textarea' && (
        <Textarea
          mobile={{ fieldSizing: 'content', maxWidth: '100%', maxHeight: 320 }}
          key={name}
          {...(rest as TTextarea)}
          name={name}
        />
      )}

      {/* {rest.type === 'markdown' && (
        <ToastEditorClient
          name={name}
          readOnly={!!rest.readOnly}
          initialValue={String(
            rest.value || rest.defaultValue || rest.value || '',
          )}
        />
      )} */}

      {info ? (
        <Flex
          mobile={{
            font: {
              family: 'sans-serif',
              style: 'italic',
              size: 16,
            },
            flexDirection: 'row',
          }}
        >
          {info}

          {link ? (
            <Link
              title={link.title}
              target={link.target || '_blank'}
              href={link.href}
              type="block"
            >
              {link.label}
            </Link>
          ) : null}
        </Flex>
      ) : null}

      {showErrorList
        ? errorList.map(({ message }, key) => (
            <Flex
              key={String(key)}
              theme="error"
              mobile={{ padding: [4, 8], borderRadius: 8 }}
            >
              {message}
            </Flex>
          ))
        : null}
    </Flex>
  )
}
