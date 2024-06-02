import styled from 'styled-components';
import {
  Breakpoints,
  Container,
  Spacing
} from '../../../../design-system/tokens';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: ${Spacing.None};
  margin: ${Spacing.None};
  width: 100%;

  @media (min-width: ${Breakpoints.Large}) {
    margin: auto;
    max-width: ${Container.Large};
  }
`;
