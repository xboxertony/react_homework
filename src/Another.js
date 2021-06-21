import React from 'react';
import style from "./Another.module.css"
import { Link } from "react-router-dom"

const Another = () => {
    return (
        <div>
            <div className={style.main}>React練習專案</div>
            <div className={style.window}>歡迎光臨我的頁面</div>
            <Link to="/about" className={style.btn}>點此開始</Link>
        </div>
    );
}

export default Another;