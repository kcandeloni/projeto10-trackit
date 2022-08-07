import styled from 'styled-components';

export default function ContainerPrivate ({ children,...otherProps }) {
    return (
      <BackgroundPrivate {...otherProps}>
        {children}
      </BackgroundPrivate>
    );
  }

const BackgroundPrivate = styled.div`
  background-color: #E5E5E5;
  height: calc(100vh - 70px);
  overflow-y: auto;
  margin-bottom: 70px;
`;