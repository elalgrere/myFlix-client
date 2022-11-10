import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainView} from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';


class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
      <MainView />
      </Container>
    );
  }
}


const container = document.getElementById('app-container');
<div id='app-container'>
  <div class='container'>
    <div calss='main-view'></div>
  </div>
  </div>
console.log ('cot: ', container)
const rootElement =ReactDOM.createRoot(container)

// Tells React to render your app in the root DOM element
rootElement.render(<MyFlixApplication/>) 