import React from 'react';
import { Input, Form } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function AntInput(props) {
  console.log('props: ', props);

  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      validateStatus={errors && errors[props.name] ? 'error' : ''}
      help={errors[props.name]?.message}
      tooltip={props.required && `${props.label} is required`}
      required = {props.required}
    >
      <Controller
        rules={{
          required: {
            value: props.required,
            message: `${props.label} is required`
          }
        }}
        placeholder={props.label}
        control={control}
        name={props.name}
        render={({ field }) => <Input {...field} />}
      />
    </Form.Item>
  );
}
