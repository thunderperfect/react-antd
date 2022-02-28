import React from 'react';
import { Row, Col, Form, Descriptions } from 'antd';
import AntInput from '../AntInput';

export default function PublicTab(props) {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} lg={12}>
          <AntInput
            name="FirstName"
            label="First Name"
            required
            rules={{
              pattern: /^[a-zA-Z]{3,30}$/i,
              message: 'First Name Pattern Error',
            }}
          />
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <AntInput name="LastName" label="Last Name" />
        </Col>

      </Row>

    </>
  );
}
