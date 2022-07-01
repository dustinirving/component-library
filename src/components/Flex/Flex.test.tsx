import React from 'react';
import { render } from '@testing-library/react';
import { FlexProps, FlexItemProps } from './Flex.types';
import Flex from './Flex';

describe('Flex', () => {
  const props: FlexProps = {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: '200px',
    justifyContent: 'center',
    position: 'absolute',
    width: '200px',
    zIndex: 1,
  };

  const renderComponent = () => render(<Flex data-testid="Flex" {...props} />);

  it('applies styles', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Flex');
    expect(component).toHaveStyle(
      'align-items: center; align-self: flex-start; flex-direction: row; flex-wrap: nowrap; height: 200px; justify-content: center; position: absolute; width: 200px; z-index: 1',
    );
  });
});

describe('FlexItem', () => {
  const props: FlexItemProps = {
    alignSelf: 'flex-end',
    flex: 1,
    flexBasis: '50%',
    order: 2,
  };

  const renderComponent = () => render(<Flex.Item data-testid="FlexItem" {...props} />);

  it('applies styles', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('FlexItem');
    expect(component).toHaveStyle('align-self: flex-end; flex: 1; flex-basis: 50%; order: 2');
  });
});
