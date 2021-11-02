import React from 'react';
import { Form, Switch, Col, Input, Checkbox } from 'antd';

import InputMask from 'react-input-mask';
export default function AntPhone(props) {
  //console.log(`AntPhone ${props.name} Rerender`);
  const { name } = props;
  const isForeignName = `${name}IsForeign`;

  const [isForeign, setIsForeign] = React.useState(
    props.form.getFieldValue(isForeignName)
  );

  return (
    <>
      <Col>
        <Form.Item
          name={props.name}
          label={props.label}
          tooltip={props.required && `${props.label} is required`}
          required={props.required}
        >
          <InputMask
            mask={isForeign ? '+9999999999' : '(999) 999-9999'}
            title={props.name}
          >
            {(inputProps) => <Input {...inputProps} type="tel" size="small" />}
          </InputMask>
        </Form.Item>
      </Col>
      <Col>
        <Form.Item
          label={`${props.label} Is Foreign`}
          name={isForeignName}
          valuePropName="checked"
        >
          <Switch onChange={(e) => setIsForeign(e)} />
        </Form.Item>
      </Col>
    </>
  );
}
