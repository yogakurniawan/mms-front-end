export const getValue = (lookups, text) => {
  if (text) {
    const lookup = lookups.find((result) => result.text.toLowerCase() === text.toLowerCase());
    if (lookup) {
      return lookup.value;
    }
  }
  return null;
}

export const getPhoneNumber = (list, type) => {
  if (list.length) {
    const phoneNumber = list.find((result) => result.type === type);
    return phoneNumber;
  }
  return {
    number: "",
    ext: ""
  };
}