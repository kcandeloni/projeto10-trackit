import styled from 'styled-components';

export default function ContainerMenu ({ children,...otherProps }) {
    return (
      <Menu {...otherProps}>
        {children}
      </Menu>
    );
  }

const Menu = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;