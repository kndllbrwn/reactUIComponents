import React from 'react'

export default class Button extends React.Component{
  classify(key, value){
    if (value[0] === '-') value = key+value;
    value = value.split(' -').join(` ${key}-`)
    return `${key} ${value}`;
  }
  render(){
    {/*var { className, href, target } = this.props
     can verbosely assign props with className={className} href={href} target={target} 
    const className = 'btn ' + this.props.className;*/}
    const Tag = this.props.href ? 'a':'button';
    const className = this.classify('btn', this.props.className) + (this.props.disabled ? ' disabled':'');
    
    return(
      <Tag {...this.props} className={className}>Discover things</Tag>
    )
  }
}