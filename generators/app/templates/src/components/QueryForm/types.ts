import { ReactNode, CSSProperties } from 'react';

export type OptionItem = {
  value?: any;
  name: string;
  group?: string;
}
export type QueryFormItem = {
  name: Array<string>|string;
  label: string;
  defaultValue?: any;
  options?: Array<OptionItem>;
  type: string;
  style?: CSSProperties;
  showLabel?: boolean;
}

export type QueryFormProps = {
  items?: Array<QueryFormItem>;
  onChange?: Function;
}
