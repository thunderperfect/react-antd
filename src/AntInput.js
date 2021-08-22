import React from 'react';
import { Input, Form } from 'antd';

export default function AntInput(props) {
  console.log('props: ', props);

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      help={errors[props.name]?.message}
      tooltip={props.required && `${props.label} is required`}
      required={props.required}
    >
      <Input {...field} size="small" />
    </Form.Item>
  );
}
