import { useEffect, useState } from 'react';
import { useSelectProps } from './Select.types';
const useSelect = (props: useSelectProps) => {
  const { initialSelectedValue, options } = props;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue || '');
  useEffect(() => {
    setSelectedValue(initialSelectedValue);
  }, [initialSelectedValue]);
  return { options, optionsOpen, setOptionsOpen, selectedValue, setSelectedValue };
};

export default useSelect;
