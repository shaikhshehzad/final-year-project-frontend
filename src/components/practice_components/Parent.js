import React from "react";
import Child01 from './Child01';

class Parent extends React.Component{
    render(){
        return(
            <>
            <h1> </h1>
                Hi from Parent 
                <Child01/>
                

                {/* <Child02/> */}

                <h1>{this.props.children}-{this.props.AN} </h1>
            </>
        )
    }
}
export default Parent;