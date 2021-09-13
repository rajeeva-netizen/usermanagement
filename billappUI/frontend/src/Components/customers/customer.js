import NavBar from "../Nav"
import CustomerTable from './list'
import OpenForm from '../Form/Modal'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const onSearch = value => console.log(value);
function Customer(){
    return(
        <>
        {/* <NavBar/> */}
        <OpenForm/>
        {/* <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    /> */}
        <CustomerTable/>

        </>
    )
}

export default Customer