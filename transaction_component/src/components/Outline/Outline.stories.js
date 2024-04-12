import React from "react";
import Outline from "./Outline";
import Expense from '../Expense/Expense';
import Income from '../Income/Income';
import {Flex} from 'antd'


export default {
  title: "Components/Outline",
  component: Outline,
};
export const Default = () => {


  return (
    <Outline>
        <Flex gap="30px">
          <Income/>
          <Expense/> 
        </Flex>
    </Outline>
  );
};
