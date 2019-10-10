import React from 'react'
import Child from './Child'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:2
        }
    }
    handleAdd=()=>{
        this.setState({
            count: this.state.count+1
        })
    };
    handleClick(){
        this.setState({
            count: this.state.count*2
        })
    }

    render(){
        let style = {
            padding:50
        };
        return <div style={style}>
            <p>React生命周期介绍</p>
            <button  onClick={this.handleAdd}>加1</button>
            <button  onClick={this.handleClick.bind(this)}>乘2</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}