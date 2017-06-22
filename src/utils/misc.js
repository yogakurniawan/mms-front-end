export const getValue = (lookups, text) => {
  if (text) {
    const lookup = lookups.find((result) => result.text.toLowerCase() === text.toLowerCase());
    if (lookup) {
      return lookup.value;
    }
  }
  return null;
}

export const checkNull = (valueToCheck, defaultValue = "") => {
  if (valueToCheck === undefined || valueToCheck === null) {
    return defaultValue;
  }
  return valueToCheck;
}

export const getPhoneNumber = (list, type) => {
  const defaultValue = {
    number: "",
    ext: ""
  };
  if (list.length) {
    const phoneNumber = list.find((result) => result.type === type);
    return checkNull(phoneNumber, defaultValue);
  }
  return defaultValue;
}