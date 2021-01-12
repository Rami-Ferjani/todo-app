import React from 'react';
import './App.css';
var st="";
 export class Task extends React.Component{
     constructor(props){
         super(props);
         this.state={ mark:false,};
         
     }
     handleClick(){
        
        st="mark";
        this.setState({mark :true},);
         
         
     }
     /*componentWillUnmount(){
         this.setState={ mark:false};
     }*/
    render(){
        var m="";
        if(this.state.mark){
             m="true";
        }else  {
             m="false";
        };
        
        return (<div>
            <p>{m}</p>
            <p>{this.props.id}</p>
        <a onClick={ () => this.handleClick() }className={this.state.mark? "mark" : ""}> {this.props.taskname}</a>
        <button onClick={() => this.props.delete(this.props.id)}>delete</button></div>
        )
    }

}
