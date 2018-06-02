import React from 'react';
import {connect} from 'react-redux';

class IndividualUser extends React.Component{

  render(){
/*null value evalutes to false when used in conditional expression*/
    if(!this.props.user){
      return <h2>select user...</h2>
    }
    return (
      <div>
          <h1>User Data</h1>
          <h2>Name:{this.props.user.firstName} {this.props.user.lastName}</h2>
          <h2>Age:{this.props.user.age}</h2>
          <h2>Description:{this.props.user.description}</h2>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user:state.userSelected
  }
}

export default connect(mapStateToProps)(IndividualUser);
