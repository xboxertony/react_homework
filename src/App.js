import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import TodoList from "./Todolist"
import Another from './Another';
import style from "./App.module.css"

class App extends Component {
    state = {
        id: 0,
        arr: [{ id: 0, text: "首頁", conn: "/" }, { id: 1, text: "點此開始", conn: "/about" }]
    }
    onclick = (idx) => {
        this.setState({ id: idx })
    }
    render() {
        const { arr, id } = this.state
        const { onclick } = this
        const list = arr.filter((item) => { return item.id !== id })
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Another}></Route>
                    <Route path="/about" component={TodoList}></Route>
                    <ul>
                        {
                            (list.map((item) => {
                                return <li className={style.li_btn}>
                                    <Link to={item.conn}
                                        key={item.id}
                                        onClick={() => { onclick(item.id) }}
                                        className={style.btn}
                                    >{item.text}</Link>
                                </li>
                            }))
                        }
                    </ul>
                </div>
            </HashRouter>
        );
    }
}

export default App;