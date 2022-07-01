import styled, { StyledComponent } from 'styled-components';

import { CSSProperties } from 'react';

export interface FlexProps {
  alignItems?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  height?: CSSProperties['height'];
  justifyContent?: CSSProperties['justifyContent'];
  position?: CSSProperties['position'];
  width?: CSSProperties['width'];
  zIndex?: CSSProperties['zIndex'];
}

export interface FlexItemProps {
  alignSelf?: CSSProperties['alignSelf'];
  flex?: CSSProperties['flex'];
  flexBasis?: CSSProperties['flexBasis'];
  order?: CSSProperties['order'];
}

const Flex = styled.div<FlexProps>`
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'inherit'};
  height: ${({ height }) => height || `auto`};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  position: ${({ position }) => position || `relative`};
  width: ${({ width }) => width || `100%`};
  z-index: ${({ zIndex }) => zIndex || 'auto'};
`;

Flex.displayName = 'Flex';

const FlexItem = styled.div<FlexItemProps>`
  align-self: ${({ alignSelf }) => alignSelf || 'flex-start'};
  flex: ${({ flex }) => flex || '0 1 auto'};
  flex-basis: ${({ flexBasis }) => flexBasis || 'none'};
  order: ${({ order }) => order || '0'};
`;

const defaultExport: StyledComponent<'div', any, FlexProps, never> & {
  Item: StyledComponent<'div', any, FlexItemProps, never>;
} = Object.assign(Flex, { Item: FlexItem });

export default defaultExport;