import React from 'react';
import Button from './bootstrap/Button';

export default class App extends React.Component{
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)', color:'white'}}>
        <div className="container">
          <h1>Building React.js User Interfaces</h1>
          <p>with Bootstrap and SASS.</p>
          <p>
            <Button className="btn btn-primary" href="#" target="_blank" />
            <Button className="btn btn-danger"  target="_blank" />
          </p>
        </div>
      </div>
    )
  }
}