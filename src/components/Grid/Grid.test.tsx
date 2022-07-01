import React from 'react';
import { render } from '@testing-library/react';
import { GridProps, GridItemProps } from './Grid.types';
import Grid from './Grid';

describe('Grid', () => {
  const props: GridProps = {
    width: '100px',
    lineHeight: 1,
    height: '100px',
    gridTemplateRows: 'none',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    gridRowGap: '5px',
    gridColumnGap: '5px',
    justifyItems: 'stretch',
    alignItems: 'start',
    justifyContent: 'center',
    alignContent: 'space-between',
    position: 'absolute',
    background: 'red',
    color: 'white',
    zIndex: 1,
    userSelect: 'none',
  };

  const renderComponent = () => render(<Grid data-testid="Grid" {...props} />);

  it('applies styles', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Grid');
    expect(component).toHaveStyle(
      'width: 100px; line-height: 1; height: 100px; grid-template-rows: none; grid-template-columns: repeat(4,1fr); gap: 10px; justify-items: stretch; align-items: start; justify-content: center; align-content: space-between; position: absolute; background: red; color: white; z-index: 1; user-select: none',
    );
  });
});

describe('GridItem', () => {
  const props: GridItemProps = {
    alignItems: 'start',
    alignSelf: 'start',
    display: 'flex',
    gridColumn: '1/3',
    gridRow: 'auto',
    height: '200px',
    justifyContent: 'center',
    justifySelf: 'center',
    position: 'absolute',
    width: '200px',
    zIndex: 3,
  };

  const renderComponent = () => render(<Grid.Item data-testid="GridItem" {...props} />);

  it('applies styles', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('GridItem');
    expect(component).toHaveStyle(
      'alignItems: start; align-self: start; display: flex; grid-column: 1/3; grid-row: auto; height: 200px; justify-content: center; justify-self: center; position: absolute; width: 200px; z-index: 3;',
    );
  });
});
