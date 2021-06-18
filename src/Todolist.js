import React, { Component, Fragment, createRef } from 'react';
import TodoItem from "./TodoItem"
import style from "./Todolist.module.css"

class TodoList extends Component {
    state = {
        arr: [],
        value: "測試紀錄"
    }
    myref = createRef()
    onclick = () => {
        this.setState({ value: "", arr: [{ id: Date.now(), text: this.state.value }, ...this.state.arr] })
    }
    onchange = (e) => {
        this.setState({ value: e.target.value })
    }
    onDelete = (idx) => {
        const a = [...this.state.arr]
        this.setState({ arr: a.filter(item => item.id !== idx) })
    }
    componentDidMount() {
        this.myref.current.focus()
    }
    render() {
        const { arr, value } = this.state
        return (
            <div>
                <div className={style.sent}>
                    <input type="text" value={value} onChange={this.onchange} ref={this.myref}></input>
                    <button onClick={this.onclick}>新增紀錄</button>
                </div>
                <ul>
                    {
                        arr.map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    <div className={style.list}>
                                        <TodoItem>{item.text}</TodoItem>
                                        <button onClick={() => { this.onDelete(item.id) }} className={style.delete}>刪除</button>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;