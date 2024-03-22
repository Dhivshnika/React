"use client"
import React, { useState } from "react";
import { Flex } from "antd";
import "../app/globals.css";
import Image from "next/image";
import { ManOutlined, RightCircleFilled, WomanOutlined } from "@ant-design/icons";
import { Button, ButtonToggle, Input, Radio } from "@storybook/design-system";

export default function Home() {
  const [select, setSelect] = useState(0);
  const [detail, setDetail] = useState({ name: "", gender: "Male", dob: "01-01-2001", mail: "", mobile: "", pwd: "" });
  function handleSelectIndex(index: number): void {
    setSelect(index);
  }
  return (
    <Flex justify="center" align="center" className="form-box">
      <Flex vertical justify="center" align="center" gap="large" className="women">
        <Image src="/woman.png" width={150} height={150} alt="women" />
        <div>
          <h3>Let's get you set up</h3>
          <p className="minute">It should take only a couple of minutes</p>
          <p className="watch">to pair with your watch</p>
        </div>
        <RightCircleFilled style={{ fontSize: "40px" }} />
      </Flex>
      <Flex className="form" gap="middle" vertical align="center">
        <Input className="form-input" value={detail.name} onChange={(e) => setDetail({ ...detail, name: e.target.value })} id="Code-with-error-and-label" placeholder="Name" style={{ width: '200px' }} label="Name" orientation="horizontal" appearance="pill" />


        <ButtonToggle
          titles={[
            { title: 'Male', tooltip: 'Male [1]' },
            { title: 'Female', tooltip: 'Female [2]' },
          ]}
          onSelectIndex={handleSelectIndex}
          selectedIndex={select}
        />

        <Input className="form-input" value={detail.dob} onChange={(e) => setDetail({ ...detail, dob: e.target.value })} label="DOB" type="date" style={{ width: '200px' }} orientation="horizontal" appearance="pill" />
        <Input classDOB="form-input" value={detail.mail} onChange={(e) => setDetail({ ...detail, mail: e.target.value })} placeholder="Email" label="Email" type="mail" style={{ width: '200px' }} orientation="horizontal" appearance="pill" />
        <Input className="form-input" value={detail.mobile} onChange={(e) => setDetail({ ...detail, mobile: e.target.value })} placeholder="Mobile" label="Mobile" style={{ width: '200px' }} orientation="horizontal" appearance="pill" />
        <Input className="form-input" value={detail.pwd} onChange={(e) => setDetail({ ...detail, pwd: e.target.value })} placeholder="Password" label="Password" style={{ width: '220px' }} orientation="horizontal" appearance="pill" type="password" />
        <Button style={{ marginTop: "20px", marginBottom: "11px" }}>Signup</Button>
      </Flex>
    </Flex>
  );
}
