export interface Options {
  [value: string]: { text: string };
}
export interface SelectProps {
  options: Options;
  initialSelectedValue: string;
}
