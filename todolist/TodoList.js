import React, { useState } from 'react';

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const [items, setItems] = useState([])
    const addItem = (text) => {
        setItems([...items, { id: Date.now(), text }])
    }
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }
    return (
        <div>
            <TodoInput addItem={addItem}></TodoInput>
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id} onClick={()=>{removeItem(item.id)}}>{item.text}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;