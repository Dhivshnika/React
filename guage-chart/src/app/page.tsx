import React from 'react';
import Chart from '../app/components/Chart/chart';
import Speed from '../app/components/Speed/speed';
import { Flex } from 'antd';
export default function welcome() {
  return (
    <Flex gap="large" justify='center' align='center' vertical >
      <Chart />
      <Speed />
    </Flex >
  );
}