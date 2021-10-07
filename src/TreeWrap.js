import React from 'react';
import { Tree } from 'antd';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    className: 'testMe',
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
      },
      {
        title: 'leaf',
        key: '0-0-1',
      },
    ],
  },
];

export default function Demo() {
  return (
    <Tree
      className="treeSelect"
      showIcon
      defaultExpandAll
      defaultSelectedKeys={['0-0-0']}
      treeData={treeData}
    />
  );
}
