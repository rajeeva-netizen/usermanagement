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
    title: 'Payment',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Modified Date',
    dataIndex: 'Modified',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'orange' : 'green';
          if (tag === 'Not paid') {
            color = 'volcano';
          }else if(tag === 'partial paid'){
            color = 'orange'
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
    address: '5000',
    tags: ['paid'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '6000',
    tags: ['Not paid'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '2000',
    tags: ['partial paid'],
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
  <Button type="primary" style = {{marginRight:50, marginBottom:50}}>Paid</Button>
  <Button type="primary" danger style = {{marginRight:50, marginBottom:50}}>Not Paid</Button>
  <Button type="primary" style = {{marginRight:50, marginBottom:50}}>partial Paid</Button>
  <Table columns={columns} dataSource={data} />
    </>
 )
}



export default Payment
//ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));