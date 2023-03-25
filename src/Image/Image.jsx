import React from 'react'
import './Image.css';

export default function Image({imageLink}) {

    function viewProject(){
        console.log("viewProject");
    }

    return (
        <div onClick={viewProject}>
            <a href="#">
                <img alt='image'/>
            </a>
        </div>
    )
}
