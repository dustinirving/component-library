import React from 'react';
import { render } from '@testing-library/react';
import Select from './Select';
import { SelectProps } from './Select.types';
describe('Select', () => {
  let props: SelectProps;
  beforeEach(() => {});
  const renderComponent = () => render(<Select {...props} />);
  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Select');
    // expect(component).toHaveTextContent("dustin");
  });
});
