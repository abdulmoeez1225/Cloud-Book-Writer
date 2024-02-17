import { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import Action from "../Action";

const BookEditor = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    book,
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [expand, setExpand] = useState(true);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewSection = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    const onAddSection = () => {
        if (editMode) {
            handleEditNode(book.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(book.id, input);
            setShowInput(false);
            setInput("");
        }

        if (editMode) setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(book.id);
    };

    

   

    return (
        <div>
            <div className={book.id === 1 ? "inputContainer" : "sectionContainer"}>
                {book.id === 1 ? (
                    <>
                        <input
                            type="text"
                            className="inputContainer__input first_input"
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="type..."
                        />

                        <Action
                            className="add-section add-section-button"
                            type="Add"
                            handleClick={onAddSection}
                        />
                    </>
                ) : (
                    <>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                            ref={inputRef}
                            style={{ wordWrap: "break-word" }}
                        >
                            {book.name}
                        </span>

                        <div style={{ display: "flex", marginTop: "5px" }}>
                            {editMode ? (
                                <>
                                    <Action
                                        className="add-section"
                                        type="UPDATE"
                                        handleClick={onAddSection}
                                    />
                                    <Action
                                        className="add-section"
                                        type="CANCEL"
                                        handleClick={() => {
                                            if (inputRef.current)
                                                inputRef.current.innerText = book.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Action
                                        className="add-section"
                                        type={
                                            <>
                                                {expand ? (
                                                    <FaArrowUp />
                                                ) : (
                                                    <FaArrowDown />
                                                )}{" "}
                                                ADD
                                            </>
                                        }
                                        handleClick={handleNewSection}
                                    />
                                    <Action
                                        className="add-section"
                                        type="EDIT"
                                        handleClick={() => {
                                            setEditMode(true);
                                        }}
                                    />
                                    <Action
                                        className="add-section"
                                        type="DELETE"
                                        handleClick={handleDelete}
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                {showInput && (
                    <div className="inputContainer">
                        <input
                            type="text"
                            className="inputContainer__input"
                            autoFocus
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action className="add-section" type="ADD" handleClick={onAddSection} />
                        <Action
                            className="add-section"
                            type="CANCEL"
                            handleClick={() => {
                                setShowInput(false);
                                if (!book?.items?.length) setExpand(false);
                            }}
                        />
                    </div>
                )}

                {book?.items?.map((cmnt) => {
                    return (
                        <BookEditor
                            key={cmnt.id}
                            handleInsertNode={handleInsertNode}
                            handleEditNode={handleEditNode}
                            handleDeleteNode={handleDeleteNode}
                            book={cmnt}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BookEditor;
