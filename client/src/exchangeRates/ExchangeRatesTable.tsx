import styled from 'styled-components';
import { ExchangeRateInfo } from '../api/CnbExchangeRatesApi';

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
        </tr>
      </thead>
      <tbody>
        {props.exchangeRates.map((exchangeRate) => (
          <tr key={exchangeRate.code}>
            <td>
              <CountryCell>
                <span>{exchangeRate.country}</span>
              </CountryCell>
            </td>
            <td>{exchangeRate.currency}</td>
            <td>{exchangeRate.code}</td>
            <TableDataNumber>{exchangeRate.amount}</TableDataNumber>
            <TableDataNumber>{exchangeRate.rate.toFixed(3)}</TableDataNumber>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
};
