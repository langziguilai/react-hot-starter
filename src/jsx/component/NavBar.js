import React, { Component } from 'react';
import {Link} from 'react-router';
import ClassName from 'className';
//上面定义的class都称之为cstClass这个prop
export class NavBar extends Component {
	render() {
		let actionNav=new ClassName({
			nav:true,
			left:true,
			hide:this.props.isLogin
		});
		let userNav=new ClassName({
			nav:true,
			left:true,
			hide:!this.props.isLogin			
		});
		return (
			<div className={"topbar"}>
			     <div className={"responsiveContainer"}>
                     <nav className={"nav left"}>
                          <Link className={"navLink"} to={this.props.url}>{this.props.name}</Link>
                          <Link className={"navLink"} to={this.props.url}>{this.props.name}</Link>
                          <Link className={"navLink"} to={this.props.url}>{this.props.name}</Link>
                     </nav> 
                     <nav className={actionNav}>
                          <button className={"navbtn"}>{}</button> 
                          <button className={"navbtn"}>{}</button> 
                     </nav>
                     <nav className={userNav}>
                          
                     </nav>
                     <form className={"navform"}>
                          <input/>
                          <span className={"fa fa-search"}></span>
                     </form>
                     <div className={"clearfix"}/>
			     </div>
			</div>
		);
	}
}



