import React from 'react';
import TextField from 'material-ui/TextField';

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return(
        <TextField hintText={label}
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          {...custom}
          fullWidth={true}
          autoComplete="off"
          InputLabelProps={{
            classes: {
              root: {
                border: '1px solid #008eff !important'
              },
              focused: {
                border: '1px solid #008eff !important'
              },
            },
          }}
          InputProps={{
            classes: {
              root: {
                border: '1px solid #008eff !important'
              },
              focused: {
                border: '1px solid #008eff !important'
              },
              notchedOutline: {
                border: '1px solid #008eff !important'
              },
            }
          }}
        />
)};

export default renderField;