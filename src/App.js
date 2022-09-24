import React from 'react';
import 'antd/dist/antd.css';
import {
  Input,
  Layout,
  Menu,
  Breadcrumb,
  Tabs,
  Form,
  Button,
  Checkbox,
} from 'antd';
import PublicTab from './Tabs/Public';
import AntSelect from './AntSelect';
import { FrownTwoTone } from '@ant-design/icons';
const { TabPane } = Tabs;

export default function App() {
  const { Header, Footer, Content } = Layout;

  const employee = {
    FirstName: 'Michael',
    LastName: 'Smith',
    OfficePhoneNumber: '4075551234',
    OfficePhoneNumberIsForeign: true,
    MobilePhoneNumber: '3215551234',
    MobilePhoneNumberIsForeign: false,
    PersonalCellNumber: '',
    PersonalCellNumberIsForeign: false,
    IsCBPEmployee: true,
    Location: null,
    EmployeeTypeId: '1',
  };

  const employeeTypes = [
    { id: '1', name: 'CustomsEmployee' },
    { id: '2', name: 'CustomsContractor' },
    { id: '3', name: 'MilitaryEmployee' },
  ];

  const [form] = Form.useForm();
  const [reset, setReset] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      form.setFieldsValue(employee);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const onFinish = (values) => {
    console.log('onFinish Success:', values);
  };

  const handleTabError = (errorInfo) => {
    //if (errorInfo) {
    // const { errorFields } = errorInfo;
    // let hasPubErr = errorFields.some((ef) =>
    //   ef.name.some((n) => validationProfiles.public.includes(n))
    //);
    //setHasPublicErrors(hasPubErr);
    //}
  };

  const onFinishFailed = (errorInfo) => {
    //handleTabError(errorInfo);
  };

  const onValuesChange = (changedValues, allValues) => {
    //form.validateFields().catch(handleTabError);
  };

  const validateEmployeeType = (employeeTypeId, isCbpEmployee) => {
    console.log(employeeTypeId, isCbpEmployee);
    if (isCbpEmployee && employeeTypeId == 1) {
      return Promise.resolve();
    }
    if (!isCbpEmployee && employeeTypeId != 1) {
      return Promise.resolve();
    }
    return Promise.reject('Employee type error');
  };

  if (isLoading) return <>Loading ...</>;
  return (
    <>
      <Layout style={{ margin: '0px', padding: '0px' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Form
              layout="vertical"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={employee}
              onFinish={onFinish}
              form={form}
            >
              <div className="card-container">
                <Tabs type="card" size="small">
                  <TabPane tab={<span>Tab 1</span>} key="1">
                    <PublicTab form={form} />
                    <Form.Item
                      valuePropName="checked"
                      name="IsCBPEmployee"
                      rules={[
                        ({ getFieldValue }) => ({
                          validator: async (rule, value) =>
                            validateEmployeeType(
                              getFieldValue('EmployeeTypeId'),
                              value
                            ),
                        }),
                      ]}
                    >
                      <Checkbox />
                    </Form.Item>
                    <AntSelect
                      name="EmployeeTypeId"
                      data={employeeTypes}
                      textField="name"
                      valueField="id"
                      required
                      rules={[
                        ({ getFieldValue }) => ({
                          validator: async (rule, value) =>
                            validateEmployeeType(
                              value,
                              getFieldValue('IsCBPEmployee')
                            ),
                        }),
                      ]}
                    />
                  </TabPane>
                </Tabs>
              </div>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
