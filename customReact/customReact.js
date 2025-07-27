function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children; // lowercase 'children'
  if (reactElement.props) {
    if (reactElement.props.href) domElement.setAttribute('href', reactElement.props.href);
    if (reactElement.props.target) domElement.setAttribute('target', reactElement.props.target);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://reactjs.org',
    target: '_blank',
  },
  children: 'Click me to visit google', // lowercase 'children'
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);