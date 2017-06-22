export const requiredValidation = (values, fields) => {
  const errors = {};
  for (const val of fields) {
    if (!values[val]) {
      errors[val] = 'required';
    }
  }
  return errors;
};

export const numberValidation = (values, fields) => {
  const errors = {};
  for (const val of fields) {
    if (!/^[-+]?\d+$/.test(values[val])) {
      errors[val] = 'must be numeric';
    }
  }
  return errors;
};