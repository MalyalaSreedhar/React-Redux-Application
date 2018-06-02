import React from 'react';
import {connect} from 'react-redux';
import {SelectUser} from '../actions/action.js'

export class UsersInformation extends React.Component{

  userCollection(){
      return this.props.users.map(user=>(
         <li key={user.id} onClick={()=>this.props.selectUser(user)}>
         {user.firstName} {user.lastName}
         </li>
      ))
  }

  render(){
    console.log('user data'+this.props.users)
    return (
      <div>
        <h1>Users Information</h1>
        <ul>
          {this.userCollection()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state)=>{

  return {
    users:state.usersList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    selectUser : (user)=>{
      dispatch(SelectUser(user))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(UsersInformation);
