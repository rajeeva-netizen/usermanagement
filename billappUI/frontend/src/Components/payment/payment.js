import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Result, Button,Table, Tag, Space  } from 'antd';
const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'payment',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Not paid') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['paid'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['Not paid'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['paid'],
  },
];
 const Payment = ()=>{
 return(
    <>  
        {/* <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  /> */}
  <Table columns={columns} dataSource={data} />
    </>
 )
}



export default Payment
//ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));