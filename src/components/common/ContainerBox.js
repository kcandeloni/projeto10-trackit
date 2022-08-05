import styled from 'styled-components';

export default function ContainerBox ({
  children,
  size = 'medio',
  color = 'blue',
  ...otherProps
}) {
  return (
    <CommonBox {...otherProps}>
      {children}
    </CommonBox>
  );
}

const CommonBox = styled.div`
    width: calc(100vw - 36px);

    background: #FFFFFF;
    border-radius: 5px;
    margin: 6px 18px;
    padding: 14px 14px;
`;





