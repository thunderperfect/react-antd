import React from 'react';
import 'antd/dist/antd.css';
import AntTable from './AntTable';

import {
  Input,
  Layout,
  Menu,
  Breadcrumb,
  Tabs,
  Form,
  Button,
  Col,
  Row
} from 'antd';
import PublicTab from './Tabs/Public';
import OfficialTab from './Tabs/Official';
import { FrownTwoTone } from '@ant-design/icons';
const { TabPane } = Tabs;

export default function App() {
  const { Header, Footer, Sider, Content } = Layout;

  const employee = {
    FirstName: 'Michael',
    LastName: 'Keefe',
    OfficePhoneNumber: '4075551234',
    OfficePhoneNumberIsForeign: true,
    MobilePhoneNumber: '3215551234',
    MobilePhoneNumberIsForeign: false,
    PersonalCellNumber: '',
    PersonalCellNumberIsForeign: false,
    Location: null
  };

  const [form] = Form.useForm();

  console.log(form);

  const [reset, setReset] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      form.setFieldsValue(employee);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // const validationProfiles = {
  //   public: ['OfficePhoneNumber', 'FirstName', 'LastName'],
  //   official: ['MobilePhoneNumber'],
  //   personal: ['PersonalCellNumber']
  // };

  const onFinish = values => {
    console.log('employee=', employee);
    setReset(!reset);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    const { errorFields } = errorInfo;
    const errors = errorFields.map(ef => ef.name.map(n => n));

    console.log('errorFields', errorFields);
    console.log(errors)
  };
  if (isLoading) return <>Loading ...</>;
  return (
    <>
      <Layout style={{ margin: '0px', padding: '0px' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
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
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}
            >
              <div className="card-container">
                <Tabs type="card" size="small">
                  <TabPane tab={<span>Tab 1 </span>} key="1">
                    <PublicTab form={form} />
                  </TabPane>
                  <TabPane tab="Tab Title 2" key="2">
                    <AntTable />
                  </TabPane>
                  <TabPane tab="Tab Title 3" key="3">
                    <span>test</span>
                  </TabPane>
                </Tabs>
              </div>
              <Row gutter={[16, 8]}>
                <Col
                  span={24}
                  className="gutter-row"
                  style={{ textAlign: 'right' }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
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
