import React from 'react';
import { Row, Col, Form, Descriptions, Button, Select } from 'antd';
import AntInput from '../AntInput';
import AntPhone from '../AntPhone';
import { useFormContext, Controller } from 'react-hook-form';
import ReactJson from 'react-json-view';
export default function PublicTab(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const methods = useFormContext();

  return (
    <>
      <Form layout="vertical" >
        <Row gutter={16}>
          <Col className="gutter-row" xs={24} lg={12}>
            <AntInput name="FirstName" label="First Name" required />
          </Col>
          <Col className="gutter-row" xs={24} lg={12}>
            <AntInput name="LastName" label="Last Name" required />
          </Col>

          <AntPhone name="OfficePhoneNumber" label="Office Phone" required />
        </Row>
        <Row>
          <Col>
            <Descriptions>
              <Descriptions.Item label="Location">Location</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row> 
      </Form>
    </>
  );
}
