import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('component rendering', () => {
  it('renders root component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
