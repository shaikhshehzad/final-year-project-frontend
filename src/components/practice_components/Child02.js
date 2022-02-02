import React from "react";


class Child02 extends React.Component{

    componentWillUnmount(){

        console.log("value of count now : xyz component will go away ")
    
    }
    render(){
        return(
            <>
            <h1><em>
                Hi from  Child02
                </em>
            </h1>
            </>
        )
    }
}
export default Child02;