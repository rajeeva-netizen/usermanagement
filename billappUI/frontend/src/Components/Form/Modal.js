import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Addcutomers from './Form'
import {connect} from 'react-redux'
import {submit} from '../../Actions/submitActions'

const OpenForm = ({submit}) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    submit(true)
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
    setTimeout(() => {
        alert('new customer added')
      }, 3000)
    
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Cutomer
      </Button>
      <Modal
        title="Form"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Addcutomers/>
      </Modal>
    </>
  );
};


export default connect(null, {submit})(OpenForm)