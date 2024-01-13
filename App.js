// import React from 'react';
// import ReactDOM from 'react-dom';

// const heading= React.createElement("h1",{},"Namaste React from reat");
// const root=ReactDom.createRoot(document.getElementById("root"));
// root.render(heading)


// const heading = React.createElement('h1', {}, 'Namaste React from react');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const heading=React.createElement(
//     'h1',
//     {id:"heading",abc:'xyz'},
//     'hello from react');
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent =React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag")
    ])
]);

console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);