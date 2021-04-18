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
export const errorEmail = (err) => {
 return {
 type: "ERROR_EMAIL",
 err
 };
};
export function submitContactReqToServer(url, data) {
 console.log('data: ', data)
 console.log('SUBMITTING DATA: ', JSON.stringify({ data }))
 return dispatch => {
 dispatch(makeAPIRequestToSendEmail());
 dispatch(clearEmailDetails());
 console.log('API URL: ', API_URL)
 console.log('url: ', url)
 return fetch(API_URL + url, {
 method: "POST",
 body: data 
 })
 .then(response => response.json())
 .then(emailMessage => {
 dispatch(receivedResponse());
 console.log('email message: ', emailMessage)
 dispatch(sentEmail(emailMessage));
 })
 .catch(err => dispatch(errorEmail(err)));
 }
}