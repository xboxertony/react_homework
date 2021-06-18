import React, { useContext } from 'react';
import value from './context';

const Count = () => {
        const {cnt,addCnt} = useContext(value)
        return (
            <div>
                <p>{cnt}</p>
                <button onClick={addCnt}>加數字</button>
            </div>
        );
}

export default Count;