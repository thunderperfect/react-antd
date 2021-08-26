import React from 'react';
import 'antd/dist/antd.css';
import AntTable from './AntTable';
import logo from './Assets/Images/logo_2.png';
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
  console.log('app Rerender');

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
  const [reset, setReset] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      form.setFieldsValue(employee);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const validationProfiles = {
    public: ['OfficePhoneNumber', 'FirstName', 'LastName'],
    official: ['MobilePhoneNumber'],
    personal: ['PersonalCellNumber']
  };

  const [hasPublicErrors, setHasPublicErrors] = React.useState(false);

  const onFinish = values => {
    setHasPublicErrors(false);
    setReset(!reset);
    console.log('onFinish Success:', values);
  };

  const handleTabError = errorInfo => {
    if (errorInfo) {
      const { errorFields } = errorInfo;

      let hasPubErr = errorFields.some(ef =>
        ef.name.some(n => validationProfiles.public.includes(n))
      );
      setHasPublicErrors(hasPubErr);
    }
  };

  const onFinishFailed = errorInfo => {
    handleTabError(errorInfo);
  };

  const onValuesChange = (changedValues, allValues) => {
    form.validateFields().catch(handleTabError);
  };

  if (isLoading) return <>Loading ...</>;
  return (
    <>
      <Layout style={{ margin: '0px', padding: '0px' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <img src={logo} className="logo" />
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
              onValuesChange={onValuesChange}
            >
              <div className="card-container">
                <Tabs type="card" size="small">
                  <TabPane
                    tab={
                      <span>
                        Tab 1{' '}
                        {hasPublicErrors && (
                          <FrownTwoTone
                            twoToneColor="red"
                            title="tab contains errors"
                          />
                        )}
                      </span>
                    }
                    key="1"
                  >
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
