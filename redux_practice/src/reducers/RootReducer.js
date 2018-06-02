import {combineReducers} from 'redux';

const initialState = [
  {
    id:1,
    firstName:'Sreedhar',
    lastName:'Malyala',
    age:24,
    description :'He is the greatest crickter of all time'
  },
  {
    id:2,
    firstName:'Bhaskar',
    lastName:'Malyala',
    age:29,
    description :'He is the greatest footballer of all time'
  },
  {
    id:3,
    firstName:'Rajni',
    lastName:'Kanth',
    age:64,
    description :'He is the greatest actor of all time of indian cinema'
  }
]

const  userInformation = (state=initialState,action)=>{


  if(action.type==='addinguser'){
    state = [
      ...state,
      action.payload
    ]
  }
  return state;

}


  const selectedUser = (state=null,action) => {

  switch (action.type) {
    case 'SELECT_USER':
      state = action.payload
      break;
  }

  return state;
}




export default combineReducers({
  usersList:userInformation,
  userSelected:selectedUser
})
