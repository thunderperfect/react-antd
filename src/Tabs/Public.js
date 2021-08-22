import React from 'react';
import { Row, Col, Form, Descriptions } from 'antd';
import AntInput from '../AntInput';
import AntPhone from '../AntPhone';
// import LocationSearch from '../LocationSearch';
export default function PublicTab(props) {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} lg={12}>
          <AntInput
            name="FirstName"
            label="First Name"
            rules={{
              pattern: /^[a-zA-Z]{3,30}$/i,
              message: 'First Name Pattern Error'
            }}
          />
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <AntInput name="LastName" label="Last Name" required />
        </Col>
        <Col xs={24} lg={12}>
          <AntInput name="LastName" label="Last Name" required />
        </Col>
        <AntPhone name="OfficePhoneNumber" label="Office Phone" required form={props.form} />
      </Row>
      <Row>
        <Col>
          {/* <LocationSearch /> */}
          <Descriptions>
            <Descriptions.Item label="Location">Location</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
}
