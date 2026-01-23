import React from 'react';
import type { FlexProps } from './FlexTypes';
import { StyledFlex } from './FlexStyledComponents';

const Flex = (
  props: React.PropsWithChildren<{
    direction?: FlexProps['$direction'];
    justify?: FlexProps['$justify'];
    align?: FlexProps['$align'];
    margin?: string;
    className?: string;
    style?: React.CSSProperties;
  }>,
) => {
  return (
    <StyledFlex
      $direction={props.direction}
      $justify={props.justify}
      $align={props.align}
      $margin={props.margin}
      className={props.className}
      style={props.style}>
      {props.children}
    </StyledFlex>
  );
};

export default Flex;
