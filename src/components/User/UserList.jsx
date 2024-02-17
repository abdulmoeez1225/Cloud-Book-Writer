import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import axios from 'axios';
import { getAllUserApi } from '../../api';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
const UserList = () => {
    
    const [data,setData] = useState([])
    useEffect(()=>{
        getAllUserApi().then(res =>{
            setData(res)
        })
    },[])

    console.log({data})
    
    return(
  <Table dataSource={data}>
  
    <Column title="Name" dataIndex="username" key="username" />
    <Column title="Email" dataIndex="email" key="email" />
    
  </Table>
)


};
export default UserList;