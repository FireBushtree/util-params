import React from 'react';
import { getToken } from 'envcloud-utils-params';

const Demo: React.FC = (props) => {
  return (
    <>
      <button
        onClick={() => {
          localStorage.setItem('token', 'aaa');
        }}
      >
        设置token为aaa
      </button>
      <div>{getToken()}</div>
    </>
  );
};

export default Demo;
