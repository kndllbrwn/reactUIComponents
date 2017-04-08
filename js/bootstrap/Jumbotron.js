import React from 'react';
import {classify} from './Utils';
import Container from './Container'

export default class Jumbotron extends React.Component{
  render() {
    return <div {...this.props} className={classify('jumbotron', this.props.className)} >
      <Container>
        {this.props.children}
      </Container>
    </div>
  }
}