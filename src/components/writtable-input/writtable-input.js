import React, { useEffect, useState } from 'react';
import './writtable.scss'
const WrittableInput = ({initialValue}) => {
    const [value, setValue] = useState(initialValue);
    const [isFocus, setFocus] = useState(false);
    
    useEffect(() => {
        //ajax
    }, [value]);

    return (
        isFocus? <textarea defaultValue={value} autoFocus
        onBlur={(e) => {setValue(e.target.value); setFocus(false);}}></textarea>: 
        <p onDoubleClick={() => {setFocus(true)}} className="writtable-input">{value}</p>
    )
};

export default WrittableInput;