import React from 'react';
import './style.css';
import AntTable from './AntTable';

export default function App() {
  return (
    <div className="container">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        <div className="col ">
          <AntTable />
        </div>
      </div>
    </div>
  );
}
