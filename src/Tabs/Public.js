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
          <AntInput name="FirstName" label="First Name" required />
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <AntInput name="LastName" label="Last Name" required />
        </Col>
        <Col xs={24} lg={12}>
          <AntInput name="LastName" label="Last Name" required />
        </Col>
        <AntPhone name="OfficePhoneNumber" label="Office Phone" required />
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
