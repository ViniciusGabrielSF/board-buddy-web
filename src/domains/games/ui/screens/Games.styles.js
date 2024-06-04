import styled from 'styled-components';
import { Color, BorderRadius } from '../../../../design-system/tokens';

export const Container = styled.div`
    width: 50%;
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    gap: 5em;
    padding: 5em;

`;

export const SearchContainer = styled.div`
  display:flex;
  align-items: end;
`;


export const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: ${BorderRadius.Medium};

  &:hover {
    cursor: pointer;
    background-color: ${Color.Neutral100};
  }

  &:active,
  &:focus,
  &:focus-visible {
    outline: 0.125rem solid ${Color.Brand400};
  }
`;
