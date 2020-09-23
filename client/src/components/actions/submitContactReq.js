import { API_URL } from "../global";
export const makeAPIRequestToSendEmail = () => {
 return {
 type: "MAKE_API_REQUEST_TO_SEND_EMAIL"
 };
};
export const clearEmailDetails = () => {
 return {
 type: "CLEAR_EMAIL_DETAILS"
 };
};
export const receivedResponse = () => {
 return {
 type: "RECEIVED_RESPONSE"
 };
};
export const sentEmail = data => {
 return {
 type: "SENT_EMAIL",
 data
 };
};
export const errorEmail = () => {
 return {
 type: "ERROR_EMAIL"
 };
};
export function submitContactReqToServer(url, data) {
 console.log(JSON.stringify({ data }))
 return dispatch => {
 dispatch(makeAPIRequestToSendEmail());
 dispatch(clearEmailDetails());
 return fetch(API_URL + url, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json"
 },
 body: JSON.stringify({ data })
 })
 .then(response => response.json())
 .then(emailMessage => {
 dispatch(receivedResponse());
 console.log(emailMessage)
 dispatch(sentEmail(emailMessage));
 })
 .catch(err => dispatch(errorEmail()));
 }
}