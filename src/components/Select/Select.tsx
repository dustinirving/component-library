import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectProps } from './Select.types';
const Select: React.FC<SelectProps> = (props) => {
  const { initialSelectedValue, options } = props;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  useEffect(() => {
    setSelectedValue(initialSelectedValue);
  }, [initialSelectedValue]);
  return (
    <Wrapper>
      <Selection onClick={() => setOptionsOpen(!optionsOpen)}>
        <Trigger>
          <span>{options[selectedValue].text}</span>
        </Trigger>
        <Options open={optionsOpen}>
          {Object.keys(options).map((option, i) => (
            <Option
              onClick={() => setSelectedValue(option)}
              selected={selectedValue === option}
              key={i}
            >
              {options[option].text}
            </Option>
          ))}
        </Options>
      </Selection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
`;
const Selection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const openOptionsStyles = `opacity: 1;
visibility: visible;
pointer-events: all;`;

const Options = styled.div<{ open: boolean }>`
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid rgb(206, 206, 206);
  border-top: 0;
  background: #fff;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;

  ${({ open }) => open && openOptionsStyles}
`;

const selectedOptionStyles = `color: #ffffff;
background-color: var(--color-active);`;

const Option = styled.span<{ selected?: boolean }>`
  position: relative;
  display: block;
  padding: 0 12px 0 12px;
  font-size: 16px;
  font-weight: 300;
  line-height: 40px;
  color: #3b3b3b;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: rgb(206, 206, 206);
  }

  ${({ selected }) => selected && selectedOptionStyles}
`;
const Trigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 300;
  color: #3b3b3b;
  height: 40px;
  line-height: 40px;
  background: #ffffff;
  cursor: pointer;
  border: 1px solid rgb(206, 206, 206);
`;

export default Select;
