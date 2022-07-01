import styled, { StyledComponent } from 'styled-components';
import { GridProps, GridItemProps } from './Grid.types';

const Grid = styled.div<GridProps>`
  display: grid;
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: ${({ gap, gridColumnGap, gridRowGap }) =>
    gap ? gap : `${gridRowGap || 0} ${gridColumnGap || 0}`};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  position: ${({ position }) => position};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
  user-select: ${({ userSelect }) => userSelect};
`;

Grid.displayName = 'Grid';

const GridItem = styled.div<GridItemProps>`
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  display: ${({ display }) => display};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-self: ${({ justifySelf }) => justifySelf};
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};
`;

const defaultExport: StyledComponent<'div', any, GridProps, never> & {
  Item: StyledComponent<'div', any, GridItemProps, never>;
} = Object.assign(Grid, { Item: GridItem });

export default defaultExport;
