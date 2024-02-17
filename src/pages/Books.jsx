import React from 'react';
import BookList from '../components/Book/BookList';
import { Col, Row } from 'antd';

const Books = () => {
    return (
        <>
            <Row style={{ justifyContent: 'center', display: 'flex', padding: 10 }}>
                <Col xl={24} >
                    <h2>User List</h2>
                </Col>
            </Row>

            <BookList />
        </>
    );
}

export default Books;