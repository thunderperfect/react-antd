import * as React from 'react';
import { Select, Form } from 'antd';
export interface SelectOption {
  [key: string]: string | number;
  valueField: string;
  textField: string;
}

export interface SelectProps {
  name: string;
  label: string;
  required: boolean;
  placeHolder: string;
  valueField: string;
  textField: string;
  rules: any;
  data: SelectOption[];
}

export default function AntSelect(props: SelectProps) {

  const { Option } = Select;

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      tooltip={props.required && `${props.label} is required`}
      rules={[
        {
          required: props.required,
          message: props.required && `${props.label} is required`,
        },
         ...props.rules ,
      ]}
    >
      <Select
        placeholder={props.placeHolder}
        size="small"
        style={{ width: '100%' }}
        allowClear
      >
        {props.data.map((item) => (
          <Option key={item[props.valueField]} value={item[props.valueField]}>
            {item[props.textField]}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
