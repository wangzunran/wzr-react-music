import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // componentWillMount(){
    //     console.log('will mount')
    // };
    componentDidMount(){
        console.log('did mount')
    };
    // componentWillReceiveProps(newProps){//接收从其他组件传递过来的属性
    //     console.log('will props' + newProps.name)
    // };
    shouldComponentUpdate(){//注意 一旦调用setState就会执行的一个方法
        console.log('should update');
        return true;//默认return true  如果return false了 后面的生命周期方法就不会走了 这里要注意
    }
    // componentWillUpdate(){
    //     console.log('will update')
    // };
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        return <div>
            <p>这里是子组件 测试子组件的生命周期</p>
            <p>{this.props.name}</p>
            <p>hard to get</p>
        </div>
    }
}