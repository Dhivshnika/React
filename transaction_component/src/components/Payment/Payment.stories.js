import React from "react";
import Payment from "./Payment";
import Balance from '../Balance/Balance';
import Transaction from '../Transaction/Transaction';
import Transfer from '../Transfer/Transfer';
import {Flex} from 'antd'



export default {
  title: "Components/Payment",
  component: Payment,
};
export const Default = () => {


  return (
    <Payment>
    <Flex gap="40px">
        <Transaction/>
      <Flex vertical gap="25px">
        <Balance/> 
        <Transfer/>
      </Flex>
    </Flex>
    </Payment>
  );
};
