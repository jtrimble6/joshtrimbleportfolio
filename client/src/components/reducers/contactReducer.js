// import {
//     SEND_MAIL_REQUEST,
//     SEND_MAIL_SUCCESS,
//     SEND_MAIL_FAILED
//   } from '../actions/actionTypes';
  
//   const initialState = {
//     loading: false,
//     message: '',
//     errMessage: ''
//   }
//   export default function contactReducer(state=initialState, action) {
//     switch(action.type) {
//       case SEND_MAIL_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           message: '',
//           errMessage: ''
//         };
//       case SEND_MAIL_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           message: action.payload.message,
//           errMessage: ''
//         };
//       case SEND_MAIL_FAILED:
//         return {
//           ...state,
//           loading: false,
//           message: '',
//           errMessage: action.payload
//           };
//       default:
//         return state
//     }
//   }

export default function updateLocation(state = {
  message: {},
  makeReq: false,
  errorRec: false,
  recvdResp: false
  }, action){
 switch(action.type){
 case "MAKE_API_REQUEST_TO_SEND_EMAIL":
  return Object.assign({}, state, {
  makeReq: true
  });
 case "CLEAR_EMAIL_DETAILS":
  return Object.assign({}, state, {
  message: {},
  recvdResp: false
  });
 case "RECEIVED_RESPONSE":
  return Object.assign({}, state, {
  recvdResp: true
  });
 case "SENT_EMAIL":
  return Object.assign({}, state, {
  message: action.data
  });
 case "ERROR_EMAIL":
  return Object.assign({}, state, {
  errorRec: true
  });
  default: {
  return {
  ...state
  }
  }
  }
 }