import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import {MainView} from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';

// Main component (will eventually use all the others)

class MyFlixApplication extends React.Component {
 
  render() {  
    return (
    <Container>
      <MainView />
    </Container>
  );
 }
}
 
    
// Finds the root of your app
const container = document.getElementById('app-container')
console.log ('cot: ', container)
const rootElement =ReactDOM.createRoot(container)

// Tells React to render your app in the root DOM element
rootElement.render(<MyFlixApplication/>)
ReactDOM.render(React.createElement(MyFlixApplication), container);
