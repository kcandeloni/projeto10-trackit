import styled from 'styled-components';

export default function SubTitulo({
  children,
  ...otherProps
}) {
  return (
    <TextSub {...otherProps}>
      {children}
    </TextSub>
  );
}

const TextSub = styled.h2`
    font-weight: 400;
    font-size: 22.976px;

    color: #126BA5;
`;