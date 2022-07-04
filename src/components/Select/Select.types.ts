export interface Options {
  [value: string]: { text: string };
}
export interface SelectProps {
  options: Options;
  optionsOpen: boolean;
  selectedValue: string;
  setOptionsOpen: (open: boolean) => void;
  setSelectedValue: (value: string) => void;
}

export interface useSelectProps {
  initialSelectedValue?: string;
  options?: Options;
}
