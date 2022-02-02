import React from "react";
import Child01 from './Child01';

class Parent extends React.Component{


// Users = [
//     { name: "shehzad" , Company : "Sears"},
//     { name: "shehzad" , Company : "Sears"},
//     { name: "shehzad" , Company : "Sears"},
//     { name: "shehzad" , Company : "Sears"},
//     { name: "shehzad" , Company : "Sears"}

// ]

constructor(){
    super();
    this.state ={
        listofusers : [
            { name: "shehzad" , Company : "Sears"},
            { name: "shehzad" , Company : "Sears"},
            { name: "shehzad" , Company : "Sears"},
            { name: "shehzad" , Company : "Sears"},
            { name: "shehzad" , Company : "Sears"}
        
        ],

        countofusers :  5 ,
        school : "Edureka",
        stack : "Full Stack "

    };
    console.log("Constructor");
}



static getDerivedStateFromProps(props , state){
    debugger
    console.log("getDerivedStateFromProps")
    state ={
        ...state,
        ...props
    }
    return state;
    
}

componentDidMount(){
    console.log("componentDidMount")
}


increaseCount = () =>{
    //  this.state.countofusers ++ ;
    // this.setState.countofusers ++;

    this.setState({
        countofusers : ++this.state.countofusers 
    })

    console.log(this.state.countofusers)

}
    
decreaseCount = () =>{

    console.log(this.state.countofusers)

    this.setState({
        countofusers : --this.state.countofusers 
    })


    // this.state.countofusers  -- ;

     
}

 

    render(){
        console.log("render method")
        return(
            <>
            <h1> </h1>
                Hi from Parent 
                <Child01/>
                


                <h1>{this.props.children}-{this.props.AN} </h1>
                <h6>{this.state.countofusers}</h6>


                <button onClick={this.increaseCount} >Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>

              
            </>
        )
    }
}
export default Parent;
                // {/* <Child02/> */}
