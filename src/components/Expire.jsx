import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



export default function Expire({ timeout, onAnimationFinished, original, children }) {
    var [content, setContent] = useState(children);

    useEffect(() => {
        window.setTimeout(() => {
            setContent( <div /> );
            onAnimationFinished();
        }, timeout);
    }, []);
    return content;
}
