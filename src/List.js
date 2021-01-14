import React from 'react';
import {Task} from './Task';
var name1="";
var allItems = [];
var i=0;
 export class List extends React.Component{
    constructor(props){
        super(props);
        this.state={data:"",task:[]}
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        if(name1.length===0)
        {
            return null;
        }
        else{
        allItems.push({id:i,value:name1});
        i++;
        this.setState({
            task:allItems
        })}
    }

    handleDelete=(itemId)=>{
        const items = allItems.filter(item => item.id !== itemId);
        allItems=items;
            this.setState({
                task:allItems
            })  
    }

    handleEdit=(itemId,newValue)=>{
        const objIndex = allItems.findIndex((obj => obj.id == itemId));
        allItems[objIndex].value=newValue;
        this.setState({
            task:allItems,
        });       

    }
    
    render(){

        return (
            <div >
                
              <div className="list1 ">{this.state.task.map((taskN) => <Task id={taskN.id} key={taskN.id} taskname={taskN.value} delete={this.handleDelete} edit={this.handleEdit} save={this.handleSave} ref={taskN.id}/>)}</div>
               <div className="addDiv">
                    <input size="40" type="text" className="task" onChange={this.handle.bind(this)}></input>
                    <button className="success btn" onClick={this.handleClick}  > add</button>
                
                </div>
            </div>
        )
    }
    handle(event2){
        name1=(event2.target.value);
   }
}
