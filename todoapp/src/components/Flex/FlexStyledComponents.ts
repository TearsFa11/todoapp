import styled from 'styled-components';
import type { FlexProps } from './FlexTypes';

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$align || 'stretch'};
  justify-content: ${(props) => props.$justify || 'stretch'};
  margin: ${({ $margin }) => $margin || '0'};
`;
