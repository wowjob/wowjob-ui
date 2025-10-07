import './multi-currency-price.css'

import { Flex, Input, Text } from '../../atom'

import { Fragment } from 'react'
import { MarkdownRenderer } from '../markdown-renderer'

const currencyMap = {
  gbp: { symbol: '£', country: 'en-GB', rate: 1 },
  usd: { symbol: '$', country: 'en-US', rate: 1.3 },
  eur: { symbol: '€', country: 'de-DE', rate: 1.2 },
  ron: { symbol: 'RON', country: 'ro-RO', rate: 6 },
  aed: { symbol: 'AED', country: 'ae-AE', rate: 5 },
}

type TCurrency = keyof typeof currencyMap
const currencyList = Object.keys(currencyMap) as TCurrency[]

export const MultiCurrencyPrice = ({
  price,
  off,
  offUnit = 'percentage',
  currency = 'gbp',
  priceMmessage,
  prefix,
  priceType,
}: {
  price: number
  off?: number
  offUnit?: 'value' | 'percentage'
  currency?: TCurrency
  priceMmessage?: string
  prefix?: string
  priceType?: string
}) => {
  const newPrice = off
    ? offUnit === 'percentage'
      ? (price * off) / 100
      : price - off
    : price

  return (
    <Flex
      mobile={{
        display: 'grid',
        position: 'relative',
        gap: 64,
      }}
      tablet={{
        gridTemplateColumns: '1fr auto',
      }}
    >
      <Flex mobile={{ alignSelf: 'center' }}>
        <MarkdownRenderer markdown={priceMmessage || ''} />
      </Flex>

      <Flex mobile={{ display: 'grid', gridTemplateColumns: '1fr ' }}>
        <Text as="h3" mobile={{ gridColumn: '1/-1' }}>
          {priceType}
        </Text>

        {currencyList.map((currencyItem) => (
          <Fragment key={currencyItem}>
            <Input
              name={`currency-${prefix}`}
              type="radio"
              defaultValue={currencyItem}
              id={`currency-${currencyItem}-${prefix}`}
              defaultChecked={currencyItem === currency}
              data-currency={currencyItem}
              className="wowjob-ui-multi-currency-price-input"
            />
            <Flex className="wowjob-ui-multi-currency-price">
              {off && (
                <Flex
                  mobile={{
                    position: 'relative',
                    width: 'fit-content',
                  }}
                >
                  <Text
                    theme="highlight"
                    as="s"
                    mobile={{
                      fontSize: 18,
                      textDecoration: 'line-through',
                      width: 'fit-content',
                      padding: [8, 32],
                      borderRadius: 64,
                      fontWeight: 'bold',
                    }}
                    tablet={{
                      fontSize: 24,
                    }}
                  >
                    {Intl.NumberFormat(currencyMap[currencyItem].country, {
                      style: 'currency',
                      currency: currencyItem.toUpperCase(),
                      maximumFractionDigits: 0,
                    }).format(price * currencyMap[currencyItem].rate)}
                  </Text>

                  <Text
                    theme="error"
                    mobile={{
                      position: 'absolute',
                      top: -20,
                      left: `calc(100% - 2.5rem)`,
                      borderRadius: 32,
                      height: 56,
                      minWidth: 56,
                      width: 'fit-content',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 16,
                      borderWidth: 2,
                      borderStyle: 'solid',
                      gap: 0,
                      zoom: 0.8,
                    }}
                  >
                    <Text
                      as="span"
                      mobile={{ padding: [0, 16], fontWeight: 'bold' }}
                    >
                      {offUnit === 'percentage'
                        ? `${off}%`
                        : Intl.NumberFormat(currencyMap[currencyItem].country, {
                            style: 'currency',
                            currency: currencyItem.toUpperCase(),
                            maximumFractionDigits: 0,
                          }).format(off * currencyMap[currencyItem].rate)}
                    </Text>

                    <Text as="span">OFF</Text>
                  </Text>
                </Flex>
              )}

              {newPrice && (
                <Text
                  theme="accent"
                  mobile={{
                    fontSize: 24,
                    width: 'fit-content',
                    padding: [8, 32],
                    borderRadius: 64,
                    fontWeight: 'bold',
                  }}
                  tablet={{
                    fontSize: 36,
                  }}
                >
                  {Intl.NumberFormat(currencyMap[currencyItem].country, {
                    style: 'currency',
                    currency: currencyItem.toUpperCase(),
                    maximumFractionDigits: 0,
                  }).format(newPrice * currencyMap[currencyItem].rate)}
                </Text>
              )}
            </Flex>
          </Fragment>
        ))}

        <Flex
          mobile={{
            flexDirection: 'row',
            overflow: 'hidden',
            width: 'fit-content',
            height: 'fit-content',
            flexWrap: 'wrap',
            gap: 4,
          }}
          className="wowjob-ui-currency-wrapper"
        >
          {currencyList.map((currencyItem, index) => (
            <Text
              key={index}
              as="label"
              htmlFor={`currency-${currencyItem}-${prefix}`}
              type="button"
              data-currency={currencyItem}
              mobile={{
                textTransform: 'uppercase',
                textAlign: 'center',
                minWidth: 'fit-content',
                cursor: 'pointer',
                padding: [0, 16],
                height: 40,
                transition: '250ms',
                fontSize: 18,
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 32,
              }}
              theme="primary"
            >
              {currencyMap[currencyItem].symbol}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

// multi-currency-price
