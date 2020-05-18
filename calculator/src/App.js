import React from 'react';
import './App.css';
import Button from './components/button';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <Button number={'1'} />
          <Button number={'2'} />
          <Button number={'3'} />
          <Button number={'+'} />
        </div>
        <div className="row">
          <Button number={'4'} />
          <Button number={'5'} />
          <Button number={'6'} />
          <Button number={'-'} />
        </div>
        <div className="row">
          <Button number={'7'} />
          <Button number={'8'} />
          <Button number={'9'} />
          <Button number={'*'} />
        </div>
        <div className="row">
          <Button number={'.'} />
          <Button number={'0'} />
          <Button number={'='} />
          <Button number={'/'} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
