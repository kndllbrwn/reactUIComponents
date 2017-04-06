import React from 'react'

export default class Button extends React.Component{
  render(){
    var { className, href, target } = this.props
    {/* can verbosely assign props with className={className} href={href} target={target} */}
    return(
      <a {...this.props}>Discover things</a>
    )
  }
}