'use client'

import { Button, Flex, Input, Text } from '../../atom'
import type { TInputField } from './type'
import { useState } from 'react'

export const PasswordField = ({
  mobile,
  tablet,
  desktop,
  theme,
  label,
  info,
  help,
  name,
  errorList = [],
  ...rest
}: TInputField) => {
  const [show, toggle] = useState(false)
  const showErrorList = errorList.length > 0

  return (
    <Flex>
      <Text
        as="label"
        htmlFor={name}
        mobile={{ fontStyle: 'italic', cursor: 'pointer' }}
      >
        {label}
      </Text>

      <Flex mobile={{ flexDirection: 'row' }} tablet={{ flexDirection: 'row' }}>
        <Input
          id={name}
          name={name}
          {...rest}
          type={show ? 'text' : 'password'}
          mobile={{ flexGrow: 1 }}
        />

        {show && (
          <Button
            mobile={{
              width: 48,
              height: 48,
              padding: 0,
              justifyContent: 'center',
              fontSize: 28,
            }}
            onClick={() => toggle(false)}
          >
            &#x1F649;
          </Button>
        )}

        {!show && (
          <Button
            mobile={{
              width: 48,
              height: 48,
              padding: 0,
              justifyContent: 'center',
              fontSize: 28,
            }}
            onClick={() => toggle(true)}
          >
            &#128584;
          </Button>
        )}
      </Flex>

      {help ? (
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
          {help}
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
