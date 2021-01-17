import React from 'react';
import './App.css';
var st="";
var name2="";

 export class Task extends React.Component{
     constructor(props){
         super(props);
         this.state={ mark:false,form2:false,};
         
     }
    changeview(){
         this.setState({ form2:false,});
     }
    handleClick(){
        
        st="mark";
        this.setState({mark :true},);   
     }
    change(){
        this.setState({form2 : true});
    }
    change2(){
        
    }
    wrapper=() =>{
        if(name2.length ===0){
            this.setState({form2 : false});
        }
        else{
            this.props.edit(this.props.id,name2);
            this.setState({form2 : false});
            name2="";
        }
            
    }

    render(){
                var m="";
                if(this.state.mark){
                     m="true";
                }else  {
                     m="false";
                };
                if(this.state.form2){
                     return (
                        <div><input type="text" className="input2" defaultValue ={this.props.taskname} onChange={this.newValue.bind(this)}></input> 
                        <button onClick={this.wrapper}  size="sm" className="btn success">Save</button>
                        </div>
                        )
                    }
                else{
        
                    return (
                        <div className="gridcontainer" >
                           
                            <span  onClick={ () => this.handleClick() }className={this.state.mark? "mark" : ""}> {this.props.taskname} </span>
                           
                            
                                <button className="btn info" onClick={() => this.change()} > edit </button>
                                <button  className="danger btn" onClick={() => this.props.delete(this.props.id)}>delete</button>
                             </div>
                    );}
            }
    newValue(event3){
        name2=(event3.target.value);
   }
   

}
