import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';

import { SearchOutlined } from '@ant-design/icons';
import  AntTable  from './AntTable';


export default function App() {
    return <AntTable />; 
}
