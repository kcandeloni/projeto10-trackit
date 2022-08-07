import styled from 'styled-components';

export default function Input({
  children,
  ...otherProps
}) {
  return (
    <InputWrapper {...otherProps}>
      {children}
    </InputWrapper>
  );
}

const InputWrapper = styled.input`
    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-weight: 400;
    font-size: 20px;
    padding: 0 10px;
    margin: 6px 0;
    outline: none;
    color: #666666;
`;