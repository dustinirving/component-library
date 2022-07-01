import styled, { StyledComponent } from 'styled-components';
import { GridProps, GridItemProps } from './Grid.types';

const Grid = styled.div<GridProps>`
  display: grid;
  width: ${({ width }) => width || `100%`};
  line-height: ${({ lineHeight }) => lineHeight || `initial`};
  height: ${({ height }) => height || `auto`};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || '100%'};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || '100%'};
  gap: ${({ gap, gridColumnGap, gridRowGap }) =>
    gap ? gap : `${gridRowGap || 0} ${gridColumnGap || 0}`};
  justify-items: ${({ justifyItems }) => justifyItems || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'start'};
  align-content: ${({ alignContent }) => alignContent || 'start'};
  position: ${({ position }) => position || 'relative'};
  background: ${({ background }) => background || 'initial'};
  color: ${({ color }) => color || 'inherit'};
  z-index: ${({ zIndex }) => zIndex || 'auto'};
  user-select: ${({ userSelect }) => userSelect || 'auto'};
`;

Grid.displayName = 'Grid';

const GridItem = styled.div<GridItemProps>`
  align-items: ${({ alignItems }) => alignItems || 'center'};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
  display: ${({ display }) => display};
  grid-column: ${({ gridColumn }) => gridColumn || 'auto / auto'};
  grid-row: ${({ gridRow }) => gridRow || 'auto / auto'};
  height: ${({ height }) => height || `auto`};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-self: ${({ justifySelf }) => justifySelf || 'center'};
  position: ${({ position }) => position || 'relative'};
  width: ${({ width }) => width || `auto`};
  z-index: ${({ zIndex }) => zIndex || 'auto'};
`;

const defaultExport: StyledComponent<'div', any, GridProps, never> & {
  Item: StyledComponent<'div', any, GridItemProps, never>;
} = Object.assign(Grid, { Item: GridItem });

export default defaultExport;
