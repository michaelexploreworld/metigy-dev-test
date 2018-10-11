import React, { Component } from 'react';

import './App.css';
import { Button } from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>default</h3>
        <Button label="Button" disabled={false}/>
        <Button label="Button" disabled={true}/>
        <h3>primary</h3>
        <Button primary={true} label="Button" disabled={false}/>
        <Button primary={true} label="Button" disabled={true}/>  
        <h3>secondary</h3>
        <Button secondary={true} label="Button" disabled={false}/>
        <Button secondary={true} label="Button" disabled={true}/>
        <h3>flat</h3>
        <Button flat={true} label="Button" disabled={false}/>
        <Button flat={true} label="Button" disabled={true}/>  
      </div>
    );
  }
}

export default App;
