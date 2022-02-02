import React from "react";
import Child01 from './Child01';
import Child02 from './Child02';
import Child03 from './Child03';



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
        stack : "Full Stack ",
        showtest : true,
        showUsers : true,


    };
    console.log("Constructor");

    setTimeout(()=>{

        this.setState({
            showtest : false
        })
    }, 5000)
}

 // let showUsers = true ;
    // setTimeout(()=>{
    //   showUsers = false;
    // }, 5000)




static getDerivedStateFromProps(props , state){
    debugger
    console.log("getDerivedStateFromProps")
    state ={
        ...state,
        ...props
    }
    return state;
    
}
// update 
shouldComponentUpdate(){
    console.log("shouldComponentUpdate()")
    return true;
}
getSnapshotBeforeUpdate(props , state){
    console.log("getSnapshotBeforeUpdate()")
        return state


}
componentDidUpdate(){
    console.log("componentDidUpdate()")


}

//end
componentWillUnmount(){

    console.log("value of count now : xyz component will go away ")

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
                {
                    this.state.listofusers.map((item , index) =>{
                        return <Child02 userinfo={item} key={index} />
                    })
                }
                {
                    this.state.showtest
                    ?
                    <Child03/>
                    :
                    null
                }

              
            </>
        )
    }
}
export default Parent;
                // {/* <Child02/> */}
