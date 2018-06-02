   import React from 'react';
import {SelectUser} from '../actions/action.js'
import {connect} from 'react-redux';
   class FormExample extends React.Component{

     formHandler(event){
       event.preventDefault();
       const firstName = event.target.querySelector('#first').value;
       const lastName = event.target.querySelector('#last').value;
       const age = event.target.querySelector('#age').value;
       const description = event.target.querySelector('#desc').value;
       const userFormData = {
         firstName:firstName,
         lastName:lastName,
         age:age,
         description:description
       }

       this.props.addUser(userFormData)

     }

     render(){
       return (
         <div>
         <h1>Form Component</h1>
         <form onSubmit={this.formHandler.bind(this)}>
         <label>FirstName:
         <input id = "first" type="text"/>
         </label><br/>
         <label>lastName:
         <input type="text" id="last"/>
         </label><br/>
         <label>Age:
         <input type="text" id="age"/>
         </label><br/>

          <textarea rows="4" cols="15" placeHolder="Please provide description" id="desc"></textarea><br/>
          <input type="submit" value="SUBMIT"/>
         </form>

         </div>
       )
     }
   }

   const mapDispatchToProps = (dispatch)=>{
     return {
       addUser : (formdata)=>{
         dispatch({type:'addinguser',payload:formdata})
       }
     }
   }


   export default connect(null,mapDispatchToProps)(FormExample);
