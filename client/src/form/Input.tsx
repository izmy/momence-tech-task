import styled from 'styled-components';

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
  value: string;
  error?: boolean;
  onValueChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
  return (
    <InputGroup $error={props.error}>
      <InputStyled
        autoFocus
        placeholder='Type here...'
        value={props.value}
        onChange={(e) => {
          const value = e.currentTarget.value;
          props.onValueChange(value);
        }}
      />
      <span>CZK</span>
    </InputGroup>
  );
};
