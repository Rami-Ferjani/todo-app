import React from 'react';

import {Task} from './Task';
var name1="hh";
var reptiles = [];
var i=0;
 export class List extends React.Component{
    constructor(props){
        super(props);
        this.state={data:"",}
        this.handleClick = this.handleClick.bind(this);
    }
    
     handleClick(){
        reptiles.push({id:i,value:name1});
        i++;
        this.setState({
            data:name1
        })
    }
    handleDelete=(itemId)=>{
    
        const items = reptiles.filter(item => item.id !== itemId);
        reptiles=items;
            this.setState({
                data:name1
            })
            

    }
    render(){
        var name1="ddsv";
       ;
        return (
            <div>
                
                {reptiles.map((reptile,j) => <Task id={reptile.id} key={'li'+j} taskname={reptile.value} delete={this.handleDelete} />)};
            <input type="text" className="task" onChange={this.handle.bind(this)}></input>
            <button onClick={this.handleClick} > add</button>
            </div>
        )
    }
    handle(event2){
        name1=(event2.target.value);
        
        
        
    
   }
 
}
