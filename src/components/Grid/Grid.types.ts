import { CSSProperties } from 'react';

export interface GridItemProps {
  alignItems?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  display?: CSSProperties['display'];
  gridColumn?: CSSProperties['gridColumn'];
  gridRow?: CSSProperties['gridRow'];
  height?: CSSProperties['height'];
  justifyContent?: CSSProperties['justifyContent'];
  justifySelf?: CSSProperties['justifySelf'];
  position?: CSSProperties['position'];
  width?: CSSProperties['width'];
  zIndex?: CSSProperties['zIndex'];
}

export interface GridProps {
  width?: CSSProperties['width'];
  lineHeight?: CSSProperties['lineHeight'];
  height?: CSSProperties['height'];
  gridTemplateRows?: CSSProperties['gridTemplateRows'];
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gap?: CSSProperties['gap'];
  gridRowGap?: string;
  gridColumnGap?: string;
  justifyItems?: CSSProperties['justifyItems'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  alignContent?: CSSProperties['alignContent'];
  position?: CSSProperties['position'];
  background?: CSSProperties['background'];
  color?: CSSProperties['color'];
  zIndex?: CSSProperties['zIndex'];
  userSelect?: CSSProperties['userSelect'];
}
