import React from 'react'
import { classify } from './Utils'

export default class Button extends React.Component{
  
  render(){
    {/*var { className, href, target } = this.props
     can verbosely assign props with className={className} href={href} target={target} 
    const className = 'btn ' + this.props.className;*/}
    const Tag = this.props.href ? 'a':'button';
    const className = classify('btn', this.props.className) + (this.props.disabled ? ' disabled':'');
    
    return(
      <Tag {...this.props} className={className}>Discover things</Tag>
    )
  }
}