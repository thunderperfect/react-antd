import React from 'react';
import { Input } from 'antd';

const WrappedInput = React.forwardRef((props, ref) => (
  <Input ref={ref} {...props} />
));

export default WrappedInput;
