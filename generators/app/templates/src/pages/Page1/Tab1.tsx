import React, { FC, useState, useEffect, Fragment } from 'react';
import { Table } from 'antd';
import QueryForm from '../../components/QueryForm';
import { gosSDK } from '../../api';
import './style.less';

const Tab1: FC = () => {
  const [cameras, setCameras] = useState([]);
  const [query, setQuery] = useState<any>({});

  useEffect(() => {
    gosSDK.cameras.getCameraList(query)
      .then((res:any) => {
        setCameras(
          res.data.filter((i: any) => {
            return query.online === undefined ? true : i.online === query.online
          }
        ).map((i:any) => {
          return {
            name: i.name,
            value: i.id,
            online: i.online,
          };
        }));
      });
  }, [query]);

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'online',
      key: 'online',
      render: (online: boolean) => {
        console.log(online);
        return online ? '在线' : '离线'
      }
    },
  ];
  const queryFormItems = [{
    name: 'online',
    label: '',
    type: 'radio-button',
    options: [{ name: '全部'}, { name: '在线', value: true}, { name: '离线', value: false}],
    style: { marginRight: 16}
  }];

  const handleQueryFormChange = (changedValues:any, values:any) => {
    setQuery(values);
  }

  return (
    <Fragment>
      <QueryForm
        items={queryFormItems}
        onChange={handleQueryFormChange}
      />
      <Table
        className="camera-table"
        rowKey="id"
        columns={columns}
        dataSource={cameras}
        pagination={false}
      />
    </Fragment>
  );
}

export default Tab1;
