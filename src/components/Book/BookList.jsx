import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { getBookList } from '../../api';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
// const data = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
const BookList = () => {
    
    const [data,setData] = useState([])
    useEffect(()=>{
        getBookList().then(res =>{
            // const resUpdate = res.map(item => {
            //     return({id:item.id, name:item.items[0]?.name, items:{...item.items}})
            // })
            setData(res)
        })
    },[])

    console.log({data})
    
    return(
  <Table dataSource={data}>
  
    <Column title="Name" dataIndex="name" key="name" />
 
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Link to={`/book/${record.id}`}>edit</Link>
        </Space>
      )}
    />
  </Table>
)


};
export default BookList;