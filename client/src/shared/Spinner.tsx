import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  margin-block: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  --spinner-size: 5rem;
  --spinner-bold: 0.5rem;
  --spinner-color: var(--pink);
  --spinner-background-color: var(--pink-light);

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  position: relative;
  width: var(--spinner-size);
  height: var(--spinner-size);
  margin: 0 auto;

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--spinner-size);
    height: var(--spinner-size);
    margin-top: calc(var(--spinner-size) / -2);
    margin-left: calc(var(--spinner-size) / -2);
    border-radius: 50%;
    border-width: var(--spinner-bold);
    border-color: var(--spinner-background-color);
    border-style: solid;
    border-top-color: var(--spinner-color);
    animation: spinner 0.6s linear infinite;
  }
`;
