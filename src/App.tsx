import * as React from 'react';
import './App.css';
import Header from "./components/Header";
import HomeImages from "./components/HomeImages";


class App extends React.Component {
  public render() {
    return (
     
      <div >
       
          <Header /> 
          <HomeImages />
      </div>
       
    );
  }
}

export default App;
