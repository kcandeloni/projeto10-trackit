import styled from 'styled-components';

export default function TextConteudo({
  children,
  ...otherProps
}) {
  return (
    <Conteudo {...otherProps}>
      {children}
    </Conteudo>
  );
}

const Conteudo = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding: 0 18px;
    word-break: normal;

    color: #666666;
`;