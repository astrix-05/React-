import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function MyApp() {
  return (
    <div>
      <h1>Hello my app! </h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://reactjs.org',
//     target: '_blank',
//   },
//   children: 'Click me to visit google', // lowercase 'children'
// };

const anotherElement = (
  <a href="https://reactjs.org" target="_blank">Visit react</a>
);

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  { href: 'https://reactjs.org', target: '_blank' },
  'Click me to visit react',
  anotherUser
  //u can't write if else statement insid
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp()
  // <ReactElement /> //it's an object, not a function
  // anotherElement
 
  // <App />
  ReactElement
);
