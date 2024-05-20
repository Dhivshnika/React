'use client'

import React, { useState, useEffect } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Flex, Table } from 'antd';
import '../../globals.css';
import jsonData from '../../utils/TableDetails/data.json';
import { MenuOutlined } from '@ant-design/icons';


type OnChange = NonNullable<TableProps<DataType>['onChange']>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: number;
  name?: string;
  voltage?: number;
  current?: number;
  real?: number;
  reactive?: number;
  apparent?: number;
  power?: number;
  Sources?: string;
}

export default function TableShow () {
  const [data, setData] = useState<DataType[]>([]);
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleChange: OnChange = (sorter) => {
    setSortedInfo(sorter as Sorts);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Sources",
      dataIndex: "Sources",
      key: "Sources",
      align: "right",
      className: "source-column"
    },
    {
      title: "Voltage L-L Average (V)",
      dataIndex: "voltage",
      key: "voltage",
      sorter: (a, b) => a.voltage! - b.voltage!,
      sortOrder: sortedInfo.columnKey === 'voltage' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
    {
      title: "Current Avg (A)",
      dataIndex: "current",
      key: "current",
      sorter: (a, b) => a.current! - b.current!,
      sortOrder: sortedInfo.columnKey === 'current' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
    {
      title: "Real Power (kW)",
      dataIndex: "real",
      key: "real",
      sorter: (a, b) => a.real! - b.real!,
      sortOrder: sortedInfo.columnKey === 'real' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
    {
      title: "Reactive Power (VAR)",
      dataIndex: "reactive",
      key: "reactive",
      sorter: (a, b) => a.reactive! - b.reactive!,
      sortOrder: sortedInfo.columnKey === 'reactive' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
    {
      title: "Apparent Power (VA)",
      dataIndex: "apparent",
      key: "apparent",
      sorter: (a, b) => a.apparent! - b.apparent!,
      sortOrder: sortedInfo.columnKey === 'apparent' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
    {
      title: "Power factor (W)",
      dataIndex: "power",
      key: "power",
      sorter: (a, b) => a.power! - b.power!,
      sortOrder: sortedInfo.columnKey === 'power' ? sortedInfo.order : null,
      ellipsis: true,
      align: "right",
    },
  ];

  return (
    <Flex vertical className='box-header' style={{width:"95%"}}>
        <Flex justify="space-between" align='self-start'>
        <Flex vertical>
          <h2 style={{marginTop:"0px"}}>Plant-Real-Time Status</h2>
          <div className='subTitle'>Last Update: 1/2//2024 10:35:55 AM Updated in 0.06</div>
        </Flex>
        <Flex gap="15px" align="center">
          <img src="/box.png" alt="box" width="30px" height="30px" />
          <MenuOutlined style={{ fontSize: "25px" }} />
        </Flex>
      </Flex>
        <Table columns={columns} dataSource={jsonData} onChange={handleChange} pagination={false} scroll={{y:400}} />
    </Flex>
  );
};

