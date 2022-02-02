import React from "react";
class Child01 extends React.Component{
    title = "BLood BAnk "
    render(){
        return(
            <>
            <h1>{this.title}</h1>
            <h1>
                Hi from  Child01
                {this.props.children}
            </h1>
            </>
        )
    }
}
export default Child01;