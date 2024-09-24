import { useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';
import { ExchangeRates } from './exchangeRates/ExchangeRates';
import { NumberInput } from './form/NumberInput';
import { Route } from './routes/__root';

const Container = styled.div`
  --container-gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: var(--container-gap);
`;

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 60rem;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 0.2);
  border-radius: 0.5rem;
`;

const Header = styled.div`
  text-align: center;
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  overflow-x: auto;
`;

export const App = () => {
  const navigate = useNavigate();
  const { value } = Route.useSearch();

  const handleValueChange = (value: number | undefined) => {
    navigate({
      search: (prev) => {
        return { ...prev, value };
      },
    });
  };

  const valueIsNumber = !Number.isNaN(Number(value));
  const amountInCZK = value != null && value > 0 ? value : undefined;

  return (
    <Container>
      <Layout>
        <Header>
          <Title>CNB Exchange Rates</Title>

          <NumberInput
            value={value}
            error={!valueIsNumber && value != null}
            onValueChange={handleValueChange}
          />
        </Header>
        <Content>
          <ExchangeRates amountInCZK={amountInCZK} />
        </Content>
      </Layout>
    </Container>
  );
};
