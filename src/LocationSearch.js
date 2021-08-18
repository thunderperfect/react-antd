import React, { useState } from 'react';
import { Modal, Button, Table, Pagination, Space } from 'antd';
import addresses from './addresses';
import AntInput from './AntInput';
import usaStates from './states';
import { useForm } from 'react-hook-form';

import {
  Layout,
  Menu,
  Breadcrumb,
  Tabs,
  Form,
  Button,
  Col,
  Row,
  Radio,
  Divider,
  Descriptions
} from 'antd';

const LocationSearch = props => {
  const [visible, setVisible] = useState(false);

  const labelStyle = {
    fontSize: '0.9em'
  };

  const defaultValues = {
    address1: '',
    city: 'Panama City',
    postalCode: '32413',
    state: 'FL'
  };
  const [selectionType, setSelectionType] = useState('radio');
  const methods = useForm({ defaultValues });

  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [addr, setAddresses] = React.useState(addresses);
  const toggle = props.toggle;

  const columns = [
    {
      title: 'Street 1',
      dataIndex: 'address1',
      sorter: (a, b) => a.address1.localeCompare(b.address1),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: (a, b) => (a.city || '').localeCompare(b.city || ''),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'State',
      dataIndex: 'state',
      sorter: (a, b) => a.state.localeCompare(b.state),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Postal Code',
      dataIndex: 'postalCode',
      sorter: (a, b) => a.postalCode.localeCompare(b.postalCode),
      sortDirections: ['descend', 'ascend']
    }
  ];

  const onFilter = filter => {
    console.log(filter);

    // let result = addresses.filter(item => {
    //   for (const [key, value] of Object.entries(filter)) {
    //     if (item[key] === undefined || (value && !item[key].startsWith(value)))
    //       return false;
    //   }
    //   return true;
    // });

    // setAddresses(result);
    //console.log(e);
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      // Column configuration not to be checked
      name: record.name
    })
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        //onOk={() => setVisible(false)}
        // okButtonProps={{ style: { display: 'none' } }}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        width={1000}
      >
        <Form onSubmit={methods.handleSubmit(onFilter)} layout="vertical">
          <Row gutter={16}>
            <Col className="gutter-row">
              <AntInput name="FirstName" label="First Name" required />
            </Col>
            <Col className="gutter-row">
              <AntInput name="LastName" label="Last Name" required />
            </Col>
            <Col className="gutter-row">
              <AntInput name="LastName" label="Last Name" required />
            </Col>
            <Col className="gutter-row">
              <AntInput name="LastName" label="Last Name" required />
            </Col>
            <Col className="gutter-row">
              <AntInput name="LastName" label="Last Name" required />
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: 'right',
                margin: '-5px 0px 10px 0px'
              }}
            >
              <Button type="primary" htmlType="submit" size="small">
                Filter
              </Button>
            </Col>
          </Row>
          <Table
            rowKey={record => `${record.address1}_${record.postalCode}`}
            className="table-striped-rows"
            columns={columns}
            dataSource={addr}
            size="small"
            rowSelection={{
              type: 'radio',
              ...rowSelection
            }}
            pagination={{
              size: 'small',
              showSizeChanger: false,
              showTotal: total => `Total ${total} items`,
              position: ['bottomRight']
            }}
          />{' '}
        </Form>
      </Modal>
    </>
  );
};
export default LocationSearch;
