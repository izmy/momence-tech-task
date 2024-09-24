import React from 'react';
import styled from 'styled-components';
import { ExchangeRateInfo } from '../api/CnbExchangeRatesApi';
import { convertCzkExchangeRate } from '../utils/convertCzkExchangeRate';
import { currencySymbolMap } from '../utils/currencySymbolMap';

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    line-height: 2.5;
    padding-inline: 0.5rem;
  }

  tr:nth-child(even) {
    td {
      background-color: #f3f3f3;
    }
  }

  tr:hover {
    td {
      background-color: #e3e3e3;
    }
  }
`;

const TableHeader = styled.th<{ $align?: 'left' | 'center' | 'right' }>`
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #f3f3f3;
  text-align: ${(props) => props.$align || 'left'};
`;

const TableDataNumber = styled.td`
  text-align: right;
  font-variant-numeric: tabular-nums;
`;

const CountryCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    max-height: 1rem;
    vertical-align: center;
  }
`;

const ConvertedCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.5rem;

  strong {
    font-weight: 550;
  }

  span {
    font-weight: 300;
    width: 2rem;
  }
`;

type ExchangeRatesTableProps = {
  exchangeRates: ExchangeRateInfo[];
  amountInCZK?: number;
};

export const ExchangeRatesTable = (props: ExchangeRatesTableProps) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <TableHeader>Country</TableHeader>
          <TableHeader>Currency</TableHeader>
          <TableHeader>Code</TableHeader>
          <TableHeader $align='right'>Amount</TableHeader>
          <TableHeader $align='right'>Rate</TableHeader>
          <TableHeader $align='right'>Converted CZK</TableHeader>
        </tr>
      </thead>
      <tbody>
        {props.exchangeRates.map((exchangeRate) => (
          <tr key={exchangeRate.code}>
            <td>
              <CountryCell>
                <img
                  alt={`${exchangeRate.country} flag`}
                  src={`/flags/${exchangeRate.code.toLowerCase()}.png`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.remove();
                  }}
                />
                <span>{exchangeRate.country}</span>
              </CountryCell>
            </td>
            <td>
              {exchangeRate.currency} (
              {currencySymbolMap.get(exchangeRate.code) ?? exchangeRate.code})
            </td>
            <td>{exchangeRate.code}</td>
            <TableDataNumber>{exchangeRate.amount}</TableDataNumber>
            <TableDataNumber>{exchangeRate.rate.toFixed(3)}</TableDataNumber>
            <TableDataNumber>
              {props.amountInCZK != null ? (
                <ConvertedCell>
                  <strong>
                    {(() => {
                      try {
                        return convertCzkExchangeRate({
                          czk: props.amountInCZK,
                          rate: exchangeRate.rate,
                          amount: exchangeRate.amount,
                        }).toFixed(3);
                      } catch (_error) {
                        return '?';
                      }
                    })()}
                  </strong>
                  <span>{exchangeRate.code}</span>
                </ConvertedCell>
              ) : (
                '–'
              )}
            </TableDataNumber>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
};
