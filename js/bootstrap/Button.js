import React from 'react'

export default class Button extends React.Component{
  render(){
    {/*var { className, href, target } = this.props
     can verbosely assign props with className={className} href={href} target={target} */}
    const Tag = this.props.href ? 'a':'button';
    const className = 'btn ' + this.props.className;
    return(
      <Tag {...this.props} className={className}>Discover things</Tag>
    )
  }
}