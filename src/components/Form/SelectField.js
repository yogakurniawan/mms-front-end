import React from 'react';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { renderSelectField } from 'utils/form';
import { generate } from 'utils/uuid';

const SelectField = ({ id, name, items, label, ...custom }) => (
  <Field
    id={id}
    name={name}
    component={renderSelectField}
    label={label}
    {...custom}
  >
    {
      items.map((item) => {
        if (typeof item === 'object') {
          return <MenuItem key={generate()} value={item.value} primaryText={item.text} />
        }
        return <MenuItem key={generate()} value={item} primaryText={item} />
      })
    }
  </Field>
);

export default SelectField;