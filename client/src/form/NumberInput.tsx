import React from 'react';
import styled from 'styled-components';
import { isLikeNumber, parseNumber } from '../utils/numberHelpers';

const InputGroup = styled.div<{ $error?: boolean }>`
  --input-border-color: oklch(0.4 0.11 280);
  --input-border-color-error: oklch(0.63 0.26 29);

  border: 2px solid transparent;
  width: 100%;
  max-width: 12em;
  height: 2.5em;
  padding-inline: 1em;
  outline: none;
  overflow: hidden;
  background-color: #f3f3f3;
  border-radius: 10px;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus,
  &:focus-within,
  &:hover {
    border: 2px solid ${(props) => (props.$error ? 'var(--input-border-color-error)' : 'var(--input-border-color)')};
    box-shadow: 0px 0px 0px 7px ${(props) => (props.$error ? 'var(--pink-light)' : 'var(--indigo-light)')};
    background-color: white;
  }
`;

const InputStyled = styled.input`
  flex: 1;
  width: 100%;
  padding: 0;
  height: 100%;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

type InputProps = {
  value: number | undefined;
  error?: boolean;
  onValueChange: (value: number | undefined) => void;
};

export const NumberInput = (props: InputProps) => {
  const [value, setValue] = React.useState(`${props.value ?? ''}`);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);

    const rawValue = event.currentTarget.value.replace(',', '.').trim();

    if (!isLikeNumber(rawValue)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const parsedNumber = parseNumber(rawValue);
    props.onValueChange(parsedNumber);
  };

  return (
    <InputGroup $error={props.error}>
      <InputStyled
        type='number'
        step='any'
        autoFocus
        placeholder='Type here...'
        value={value}
        onChange={handleValueChange}
      />
      <span>CZK</span>
    </InputGroup>
  );
};
