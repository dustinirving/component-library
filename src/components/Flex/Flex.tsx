import styled, { StyledComponent } from 'styled-components';
import { FlexProps, FlexItemProps } from './Flex.types';

const Flex = styled.div<FlexProps>`
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};
`;

Flex.displayName = 'Flex';

const FlexItem = styled.div<FlexItemProps>`
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  order: ${({ order }) => order};
`;

const defaultExport: StyledComponent<'div', any, FlexProps, never> & {
  Item: StyledComponent<'div', any, FlexItemProps, never>;
} = Object.assign(Flex, { Item: FlexItem });

export default defaultExport;
