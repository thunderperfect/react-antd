import React from 'react';
import { Form, Switch, Col, Input } from 'antd';

import InputMask from 'react-input-mask';
export default function AntPhone(props) {
  console.log('AntPhone props: ', props);

  const { name } = props;
  const isForeignName = `${name}IsForeign`;

  return (
    <>
      <Col>
        <Form.Item
          label={props.label}
          help={errors[props.name]?.message}
          tooltip={props.required && `${props.label} is required`}
          required={props.required}
        >
          <InputMask
            mask={1 ? '+9999999999' : '(999) 999-9999'}
            title={props.name}
            // onChange={e => {
            //   e.target.value = e.target.value.replace(/\D/g, '');
            //   return onChange(e);
            // }}
          >
            {inputProps => <Input {...inputProps} type="tel" />}
          </InputMask>
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label={`${props.label} Is Foreign`}>
          <Switch />
        </Form.Item>
      </Col>
    </>
  );
}
