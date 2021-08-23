import React from 'react';
import { Input, Form } from 'antd';

export default function AntInput(props) {
  console.log(`AntInput ${props.name} Rerender`);

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      tooltip={props.required && `${props.label} is required`}
      rules={[
        {
          required: props.required,
          message: props.required && `${props.label} is required`
        },
        { ...props.rules }
      ]}
    >
      <Input size="small" />
    </Form.Item>
  );
}
