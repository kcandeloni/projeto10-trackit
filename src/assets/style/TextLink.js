import styled from 'styled-components';

export default function TextLink({
  children,
  ...otherProps
}) {
  return (
    <Link {...otherProps}>
      {children}
    </Link>
  );
}

const Link = styled.p`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;

    color: #52B6FF;
    cursor: pointer;
`;