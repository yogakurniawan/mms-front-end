import React from 'react';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import {
  TextField,
  AutoComplete
} from 'redux-form-material-ui';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    floatingLabelText={label}
    floatingLabelFixed={true}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
    <SelectField
      dropDownMenuProps={{ animated: true }}
      selectedMenuItemStyle={{ color: "rgb(0, 130, 203)" }}
      floatingLabelText={label}
      floatingLabelFixed={true}
      errorText={touched && error}
      {...input}
      value={input.value}
      onChange={(event, index, value) => input.onChange(value)}
      onBlur={(event, index, value) => input.onBlur(value)}
      children={children}
      {...custom}
    />
  );


export const renderAutoComplete = ({ input, label, meta: { touched, error }, ...custom }) => (
  <AutoComplete hintText={label}
    floatingLabelText={label}
    filter={AutoComplete.caseInsensitiveFilter}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

