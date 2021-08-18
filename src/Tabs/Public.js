import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import ReactJson from 'react-json-view';
export default function PublicTab(props) {
  const { Option } = Select;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const employee = {
    FirstName: 'test',
    OfficePhoneNumber: '4075551234',
    OfficePhoneNumberIsForeign: false,
    MobilePhoneNumber: '3215551234',
    MobilePhoneNumberIsForeign: false,
    PersonalCellNumber: '',
    PersonalCellNumberIsForeign: false,
    Location: null
  };

  const validationProfiles = {
    public: ['OfficePhoneNumber', 'FirstName'],
    official: ['MobilePhoneNumber'],
    personal: ['PersonalCellNumber']
  };
  let defaultValues = { ...employee };

  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };



  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'yyyyyy!',
      gender: 'male'
    });
  };
  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="FirstName" name="FirstName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
        {/* <ReactJson src={getValues()} /> */}
      </Form>
    </>
  );
}
