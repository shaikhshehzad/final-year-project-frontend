import React from 'react';
import User from './User';
class Users extends React.Component {
  test = " react props testing "
    render() {
        return(
        <>
      <h1>{this.props.children}</h1>
      <h1>{this.props.count}</h1>
      <h1>{this.props.subtitle}</h1>
      <h1>{this.props.subtitle } : {this.props.subtitle}</h1>


      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>

        </>
        )
    }

}

export default Users;