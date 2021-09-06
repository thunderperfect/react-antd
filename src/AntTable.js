import React from 'react';
import { Table, Input, Button, Space, Pagination } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, FilterFilled } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];

export default function FilterableTable(props) {
  const searchInput = React.useRef(null);
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');

  const getColumnSearchProps = (dataIndex, customRender) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            <SearchOutlined />
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <FilterFilled
        style={{
          color: filtered ? '#c6ff1a' : undefined
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(
          () =>
            searchInput && searchInput.current && searchInput.current.select()
        );
        // null check above: as its initial value was null
      }
    }
    //render: (text, row, index) => {

    //    let result = props.columns.find(c => c.dataIndex == dataIndex).render && props.columns.find(c => c.dataIndex == dataIndex).render(text, row, index);
    //    console.log(result);

    //    return searchedColumn === dataIndex ? (
    //        <Highlighter
    //            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //            searchWords={[searchText]}
    //            autoEscape
    //            textToHighlight={text ? text.toString() : ''}
    //        />
    //    ) : (
    //        text
    //    )
    //}
  });

  // apply filter props if filterable == true
  const mappedColumns = props.columns.map(c => {
    return {
      ...c,
      ...(c.filterable && getColumnSearchProps(c.dataIndex, c.render))
    };
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  return (
    <Table
      className="table-striped-rows"
      rowKey={row => row.Id}
      bordered
      {...props}
      columns={mappedColumns}
      dataSource={props.data}
      size="small"
      pagination={{
        style: { margin: '4px 0px' },
        size: 'small',
        showTotal: total => `Total ${total} items`,
        position: ['topRight', 'bottomRight']
      }}
    />
  );
}
