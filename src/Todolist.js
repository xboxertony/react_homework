import React, { useState, Fragment, useRef,useEffect } from 'react';
import TodoItem from "./TodoItem"
import style from "./Todolist.module.css"
import { Link } from "react-router-dom"

const TodoList = () => {

    const [state,setState] = useState({
        arr: [],
        value: "測試紀錄"
    })
    const myref = useRef()
    const onclick = () => {
        setState({ value: "", arr: [{ id: Date.now(), text: state.value }, ...state.arr] })
    }
    const onchange = (e) => {
        setState({ ...state,value: e.target.value })
    }
    const onDelete = (idx) => {
        const a = [...state.arr]
        setState({ ...state,arr: a.filter(item => item.id !== idx) })
    }
    useEffect(()=>{
        myref.current.focus()
    })
    return (
        <div>
            <div className={style.sent}>
                <input type="text" value={state.value} onChange={onchange} ref={myref}></input>
                <button onClick={onclick}>新增紀錄</button>
            </div>
            <ul>
                {
                    state.arr.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <div className={style.list}>
                                    <TodoItem>{item.text}</TodoItem>
                                    <button onClick={() => { onDelete(item.id) }} className={style.delete}>刪除</button>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </ul>
            <Link to="/" className={style.btn}>回首頁</Link>
        </div>
    )
}

export default TodoList;