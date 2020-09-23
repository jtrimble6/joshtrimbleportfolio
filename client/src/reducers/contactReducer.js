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