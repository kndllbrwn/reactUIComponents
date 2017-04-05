import React from 'react';
import ReactDom from 'react-dom';

const Component = <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)', color:'white'}}>
      <div className="container">
        <h1>Building React.js User Interfaces</h1>
        <p>with Bootstrap and SASS.</p>
        <p><a className="btn btn-primary" href="#" target="_blank">Discover things</a></p>
      </div>
    </div>

ReactDom.render(Component, document.getElementById('react'));