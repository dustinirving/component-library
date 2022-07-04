import React from 'react';
import Select from './Select';
import { Colors } from '../GlobalStyles';
import styled from 'styled-components';
export default {
  title: 'Select',
  component: Select,
  decorators: [
    (Story) => (
      <>
        <Colors />
        <Story />
      </>
    ),
  ],
};

const options = {
  'option-1': { text: 'Option 1' },
  'option-2': { text: 'Option 2' },
  'option-3': { text: 'Option 3' },
};
export const Default = () => (
  <Container>
    <Select options={options} initialSelectedValue="option-1" />
  </Container>
);

const Container = styled.div`
  width: 250px;
`;
