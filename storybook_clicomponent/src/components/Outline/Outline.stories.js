import React from 'react';
import Outline from './Outline';
import { Avatar, Flex} from "antd";
import {Icon} from "@storybook/design-system";

export default {
    title: 'Components/Outline',
    component: Outline,
};

export const Default = () => (
    <Outline>
      <Flex gap="15px" align="center" style={{marginBottom:"10px",marginTop:"10px"}}>
        <Flex justify="center" align="center" className="image-background">
          <img src="/users.png" alt="users" width={40} height={40} />
        </Flex>
        <Flex vertical style={{lineHeight:"0px"}}>
          <p className="title">Total Customers</p>
          <p className="readings">5,423</p>
          <p>
            <span className="demandRise">
              <Icon icon="arrowupalt" />
              16%{" "}
            </span>
            this month
          </p>
        </Flex>
      </Flex>
      <div className="separator"></div>
      <Flex gap="15px" align="center">
        <Flex justify="center" align="center" className="image-background">
          <img src="/check.png" alt="check" width={40} height={40} />
        </Flex>
        <Flex vertical style={{lineHeight:"0px"}}>
          <p className="title">Members</p>
          <p className="readings">1,893</p>
          <p>
            <span className="demandFall">
              <Icon icon="arrowdownalt" />
              1%{" "}
            </span>
            this month
          </p>
        </Flex>
      </Flex>
      <div className="separator"></div>
      <Flex gap="15px" align="center">
        <Flex justify="center" align="center" className="image-background">
          <img src="/pc-monitor.png" alt="users" width={35} height={35} />
        </Flex>
        <Flex vertical style={{lineHeight:"0px",marginBottom:"10px"}}>
          <p className="title">Active Now</p>
          <p className="readings" style={{paddingtop:"2px"}}>189</p>
          <Avatar.Group size={26} style={{marginTop:"10px"}}>
            <Avatar src="https://avatars2.githubusercontent.com/u/263385" />
            <Avatar src="https://avatars2.githubusercontent.com/u/132554" />
            <Avatar src="https://avatars0.githubusercontent.com/u/81672" />
            <Avatar src="https://avatars2.githubusercontent.com/u/263385" />
            <Avatar src="https://avatars2.githubusercontent.com/u/132554" />
        </Avatar.Group>
        </Flex>
      </Flex>
    </Outline>
);
