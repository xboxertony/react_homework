import React, { Component } from 'react';
import style from "./Another.module.css"

class Another extends Component {
    render() {
        return (
            <div>
                <div className={style.main}>React練習專案</div>
                <div className={style.window}>歡迎光臨我的頁面</div>
            </div>
        );
    }
}

export default Another;