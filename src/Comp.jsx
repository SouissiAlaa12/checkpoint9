import React from 'react' ; 
import './Style.css'; 

class Comp extends React.Component{

   state ={
       list:['wakeup','breakfast'] ,
       in:""
   };

   addtodos = () => {
     let ba = this.state.list;
     ba.push(this.state.in)
    this.setState({list: ba})
    }; 


    render(){

        return(
            <div className="todo">
            <input type="text" onChange={(event)=>{
              console.log(event.target.value);
              this.setState({in : event.target.value})}}/>
            
              <button  onClick={this.addtodos} value="reset">Add</button>
            
            <ul>
             {this.state.list.map(todos =><li>{todos}</li>)}
            </ul>
            
            
             </div>
            
       );
       
        
        }
      }
export default Comp ; 