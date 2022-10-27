import React from 'react';
<<<<<<< Updated upstream
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
>>>>>>> Stashed changes
import {MainView} from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';

// Main component (will eventually use all the others)

class MyFlixApplication extends React.Component {
<<<<<<< Updated upstream
  render() {
    return (
      <MainView />
    );
  }
}

=======
  render() {  
    return (
    <Container>
      <MainView />
    </Container>
  );
 }
} 
    
 
  
>>>>>>> Stashed changes
// Finds the root of your app
const container = document.getElementById('app-container')
console.log ('cot: ', container)
const rootElement =ReactDOM.createRoot(container)

// Tells React to render your app in the root DOM element
<<<<<<< Updated upstream
rootElement.render(<MyFlixApplication/>)
=======
ReactDOM.render(React.createElement(MyFlixApplication), container);
>>>>>>> Stashed changes
