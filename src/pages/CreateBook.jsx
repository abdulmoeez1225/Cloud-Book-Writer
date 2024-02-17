import React, { Suspense, useEffect } from 'react';
import BookEditor from '../components/Book/BookEditor';
import { useState } from "react";
import useNode from '../utils/useNode';
import { createBooks, getBookById, updateBooks } from '../api';
import { Button, Col, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const CreateBook = () => {
    const { id } = useParams()
    const [bookData, setBookData] = useState({});
    const navigation = useNavigate()

    useEffect(() => {
        if (id) {
            getBookById(id).then((res) => {
                setBookData(res)
            })
        } else {
            setBookData({
                items: [],
                name:"initial"
            });
        }
    }, [])

    const { insertNode, editNode, deleteNode } = useNode();

    const handleInsertNode = (folderId, item) => {
        const finalStructure = insertNode(bookData, folderId, item);
        setBookData(finalStructure);
    };

    const handleEditNode = (folderId, value) => {
        const finalStructure = editNode(bookData, folderId, value);
        setBookData(finalStructure);
    };

    const handleDeleteNode = (folderId) => {
        const finalStructure = deleteNode(bookData, folderId);
        const temp = { ...finalStructure };
        setBookData(temp);
    };


    const submitData = () => {
        if (id) {
            updateBooks(id, bookData).then(res => {
                navigation('/book-list')
            })

        } else {
            createBooks(bookData).then(res => {
                navigation('/book-list')
            })
        }
    }





    return (
        <>
            <Row style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Col xl={24} >
                    <h2 >{id ? "Update" : "Create"}</h2>
                </Col>
            </Row>



            <BookEditor
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                book={bookData} />


            <Row style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Col xl={24} >
                    <Button type="primary" onClick={submitData}>{id ? "Update" : "Submit"}</Button>
                </Col>
            </Row>

        </>
    );
}

export default CreateBook;