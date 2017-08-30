import React from 'react';

const style = {
  display: 'block',
  padding: '10px 30px',
  margin: '0',
  overflow: 'scroll',
};

const JsonText = ({ data }) => (
  <pre style={style}>
    { JSON.stringify(data, null, 2) }
  </pre>
);

export default JsonText;
