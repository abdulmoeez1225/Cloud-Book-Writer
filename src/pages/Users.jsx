import React from 'react';
import BookList from '../components/Book/BookList';
import UserList from '../components/User/UserList';
import { Col, Row } from 'antd';

const Users = () => {
    return (<>
        <Row style={{ justifyContent: 'center', display: 'flex', padding: 10 }}>
            <Col xl={24} >
                <h2>User List</h2>
            </Col>
        </Row>

        <UserList />
    </>);
}

export default Users;