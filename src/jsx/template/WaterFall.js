import React, { Component } from 'react';
import Immutable from 'immutable';
export class WaterFall extends Component {
	componentWillMount(){
        console.log("WaterFall componentWillMount");
        this.setState({"list":["list"]});
	}
	componentDidMount(){
       console.log("WaterFall componentDidMount");
	}
    add(){
       let value=this.refs["gogo"].value;
       this.state.list.push(value)
       
       let newState=Object.assign({},{"list":this.state.list});
       this.setState(newState);
    }
	render() {
		console.log(this.state);
		let items=this.state.list.map(function(value){
			return (<Item value={value}/>);
		});
		console.log(items);
		return (
			<div>
			   <p>This is waterfall</p>
			</div>
		);
	}
}

class Item extends Component {
	geyInitialState(){
        console.log("Item geyInitialState");
        return {message:"ok"};
	}
	componentWillMount(){
        console.log("Item componentWillMount");
	}
	componentDidMount(){
       console.log("Item componentDidMount");
	}
	  constructor(props) {
	    super(props);
	  }

  render() {
  	console.log("render Item ,value is "+this.props.value);
    return (
      <div>{this.props.value}</div>
    );
  }
}

