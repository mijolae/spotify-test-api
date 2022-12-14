import { useReducer } from 'react';
import UserContext from './user-context';

const defaultUserState = {
  name: '',
  city: '',
  interestedAmbassador: false,
  sendLinkAfter: false,
};

// const userReducer = (state, action) => {
//     if(action.type === 'ADD') {
//         return {

//         }
//     }
// }
