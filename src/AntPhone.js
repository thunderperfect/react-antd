import React from 'react';
import { Form, Switch, Col, Input } from 'antd';

import InputMask from 'react-input-mask';
export default function AntPhone(props) {
  console.log('AntPhone props: ', props);

  const [form] = Form.useForm();

  const { name } = props;
  const isForeignName = `${name}IsForeign`;

  const [isForeign, setIsForeign] = React.useState(false);

  // console.log('isForeignName=', isForeignName)
  // console.log('form.getFieldsValue(isForeignName) =' , form.getFieldValue(isForeignName))
  return (
    <>
      <Col>
        <Form.Item
          form={form}
          name={props.name}
          label={props.label}
          tooltip={props.required && `${props.label} is required`}
          required={props.required}
        >
          <InputMask
            mask={isForeign ? '+9999999999' : '(999) 999-9999'}
            title={props.name}
            // onChange={e => {
            //   e.target.value = e.target.value.replace(/\D/g, '');
            //   return onChange(e);
            // }}
          >
            {inputProps => <Input {...inputProps} type="tel" size="small" />}
          </InputMask>
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label={`${props.label} Is Foreign`} name={isForeignName}>
          <Switch onChange={e => setIsForeign(e)} />
        </Form.Item>
      </Col>
    </>
  );
}
