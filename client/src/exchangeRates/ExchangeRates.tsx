import { useExchangeRates } from '../hooks/useExchangeRatesHooks';
import { Spinner, SpinnerContainer } from '../shared/Spinner';
import { ExchangeRatesTable } from './ExchangeRatesTable';

type ExchangeRatesProps = {
  amountInCZK?: number;
};

export const ExchangeRates = (props: ExchangeRatesProps) => {
  const { data, isPending, isError, error } = useExchangeRates();

  if (isPending) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <ExchangeRatesTable exchangeRates={data} amountInCZK={props.amountInCZK} />;
};
