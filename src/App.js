import React, { useState } from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import TodoList from "./Todolist"
import Another from './Another';
import style from "./App.module.css"

const App = () => {
    const [state,setState] = useState({
        id: 0,
        arr: [{ id: 0, text: "首頁", conn: "/" }, { id: 1, text: "點此開始", conn: "/about" }]
    })
    const onclick = (idx) => {
        setState({ ...state,id: idx })
    }
    const list = state.arr.filter((item) => { return item.id !== state.id })
    return (
        <HashRouter>
            <div>
                <Route exact path="/" component={Another}></Route>
                <Route path="/about" component={TodoList}></Route>
                <ul>
                    {
                        (list.map((item) => {
                            return <li className={style.li_btn} key={item.id}>
                            </li>
                        }))
                    }
                </ul>
            </div>
        </HashRouter>
    )
}

export default App;