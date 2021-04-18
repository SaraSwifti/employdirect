import React from 'react';
import "Wrapper.css";

export default function index(props) {
    return (
        <div className="wrapper">{props.children}</div>
    )
}
