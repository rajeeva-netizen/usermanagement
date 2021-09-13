import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/index.css';
import { Descriptions,Timeline } from 'antd';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import axios from 'axios'

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default class Client extends React.Component {
  state = { visible: false };

  constructor(props){
    super();
    this.state={
      val:[]
    }

//console.log(this.props.id)
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount(){
    console.log(this.props)
    axios.get(`https://digitechusers.herokuapp.com/customers/${this.props.match.params.id}`)
    .then(res=>{
      console.log(res.data.customer[0])
      this.setState({
        val:res.data.customer[0]
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
   console.log(this.state.val)
    return (
      <>
      <Descriptions title="User Info">
    <Descriptions.Item label="Name">{this.state.val.customer_name}</Descriptions.Item>
    <Descriptions.Item label="Telephone">{this.state.val.contact_info}</Descriptions.Item>
    <Descriptions.Item label="Email">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      {this.state.val.address}
    </Descriptions.Item>
  </Descriptions>

  <h1>Project</h1>
        <List
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View details
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                
                description="Progresser XTech"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>
        </Drawer>
      </>
    );
  }
}
