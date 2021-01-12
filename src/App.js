import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Head } from './Head';
import { List } from './List';
 class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Head/>
        <List/>
    
     
    </div>
  );
  }
}
export default App;

