import React from 'react';
import ReactDOM from 'react-dom';

const createElement(type,props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                if(typeof child === 'object') {
                    return child
                } else {
                    return createTextElement(child)
                }
            })
        }
    }
}

function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: [],
        }
    }
}


const element = (
  <div style={'background: orange; color:white;'}>
    <h1 title='web dev made simple'>DevSage</h1>
  </div>
);
const root = document.getElementById('root');
ReactDOM.render(element, root);
